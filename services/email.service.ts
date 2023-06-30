import { connect } from "@lib/mongodb";
import { User } from "@models/User";
import { Verify } from "@models/Verify";
import mailer from "nodemailer";

// Initialize the nodemailer transporter
export const transporter = mailer.createTransport({
  host: process.env.EMAIL_SERVER_HOST,
  port: process.env.EMAIL_SERVER_PORT,
  secure: true,
  auth: {
    user: process.env.EMAIL_USERNAME,
    pass: process.env.EMAIL_PASSWORD,
  },
});

export class Mail {
  // Initialize variables
  private transporter: mailer.Transporter;
  private options: mailer.SendMailOptions;

  // Constructor
  constructor(transporter: mailer.Transporter) {
    this.transporter = transporter;
    this.options = {
      from: `"${process.env.EMAIL_USERNAME}" <${process.env.EMAIL_USERNAME}>`,
      subject: "Alert From tf.2x1.dev",
      to: "",
      html: "",
    };
  }

  // Mutator function to change option with option name and value
  setOption<K extends keyof mailer.SendMailOptions>(
    option: K,
    value: mailer.SendMailOptions[K],
  ) {
    this.options[option] = value;
  }

  // Send mail with options
  async send() {
    try {
      const info = await this.transporter.sendMail(this.options);
      console.log(info);
    } catch (error) {
      console.error(error as string);
    }
  }
}

export async function sendVerificationRequest({ identifier: email, token, baseUrl} :  { identifier: string, token: string, baseUrl: string }) {
  const mailer = new Mail(transporter)

  const verificationUrl = `${baseUrl}/api/v1/auth/verify?token=${token}`;

  mailer.setOption('html', `<p>Please click the following link to verify your email: <a href="${verificationUrl}">${verificationUrl}</a></p>`)

  mailer.setOption('to', email)

  await mailer.send()
  
}


export async function verifyToken ( token: string ) {
  try {
      await connect()

      const verificationObject = await Verify.findOne({ token })

      if ( verificationObject ) {
          await User.findOneAndUpdate( { id : verificationObject.id }, { verified: true } )
      }
  } catch ( error : any) {
      throw new Error(error)
  }
  
  
}
