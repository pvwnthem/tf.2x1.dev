/** @format */

import { useEffect, useState } from 'react'
import { INotification } from '@models/User'

const Notification = ({ notification }: { notification: INotification }) => {
    const [visible, setVisible] = useState(false)

    useEffect(() => {
        const notificationTimer = setTimeout(() => {
            setVisible(true)
            playAudio()
        }, 1000)

        return () => clearTimeout(notificationTimer)
    }, [])

    const playAudio = () => {
        const audio = new Audio(
            'https://wiki.teamfortress.com/w/images/5/50/Notification_alert.wav'
        )
        audio.play()
    }

    return (
        <a
            href={notification.href}
            className={`fixed top-4 right-4 bg-white rounded-lg p-4 shadow-md transition-all duration-300 ${
                visible ? 'opacity-100' : 'opacity-0'
            }`}
        >
            <p className='text-gray-800'>{notification.message}</p>
        </a>
    )
}

export default Notification
