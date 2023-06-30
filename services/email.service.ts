import mailer from "nodemailer";

// Initialize the nodemailer transporter
export const transporter = mailer.createTransport({
  // Set the SMTP host to Zoho
  host: process.env.EMAIL_SERVER_HOST,
  // Use SSL on the port 465
  port: process.env.EMAIL_SERVER_PORT,
  secure: true,
  // Set the authentication credentials for the Zoho newsletter account
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
      from: `${process.env.EMAIL_USERNAME} <${process.env.EMAIL_USERNAME}>`,
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
}4