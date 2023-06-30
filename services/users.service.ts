'use server'
import { connect } from "@lib/mongodb";
import { User } from "@models/User";

export async function getUserByName(username: string) {
    try {
        await connect();

        const user = await User.findOne({ username });

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