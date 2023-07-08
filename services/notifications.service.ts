/** @format */

'use server'
import { connect } from '@lib/mongodb'
import { type INotification, User } from '@models/User'

export async function addNotification(id: string, notifciation: INotification) {
    try {
        await connect()

        return await User.findOneAndUpdate(
            { id },
            { $push: { notifications: JSON.stringify(notifciation as any) } },
            { new: true }
        )
    } catch (e: any) {
        throw new Error(e)
    }
}
