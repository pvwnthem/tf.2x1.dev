'use server'
import { connect } from "@lib/mongodb";
import { User } from "@models/User";
import { Verify } from "@models/Verify";

export async function getUserByName(username: string) {
    try {
        await connect();

        const user = await User.findOne({ username });

        return JSON.parse(JSON.stringify(user));
    } catch (error : any) {
        throw new Error ( error )
    }
}

export async function getUser(id: string) {
  try {
      await connect();

      const user = await User.findOne({ id });

      return JSON.parse(JSON.stringify(user));
  } catch (error : any) {
      throw new Error ( error )
  }
}

export async function updateUser(id: string, updatedUser: any): Promise<any> {
    try {
      await connect();
      
      const user = await User.findOneAndUpdate({ id }, updatedUser, { new: true });
  
      return JSON.parse(JSON.stringify(user));
    } catch (error: any) {
      throw new Error(error);
    }
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