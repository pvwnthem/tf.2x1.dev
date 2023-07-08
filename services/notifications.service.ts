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

export async function removeNotification(
    id: string,
    userNotification: INotification
) {
    try {
        await connect()

        const user = await User.findOne({ id })

        const updatedNotifications = user.notifications.filter(
            (notification: string) => {
                return notification !== JSON.stringify(userNotification)
            }
        )

        console.log(updatedNotifications)
        user.notifications = updatedNotifications
        await user.save()

        return JSON.parse(JSON.stringify(user))
    } catch (e: any) {
        throw new Error(e)
    }
}
