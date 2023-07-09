/** @format */

import { useEffect, useState } from 'react'
import { INotification } from '@models/User'
import Trash from '@components/svg/trash'

const Notification = ({
    notification,
    handleClose,
}: {
    notification: INotification
    handleClose: any
}) => {
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
        <div
            className={`fixed top-4 right-4 flex items-center justify-center bg-white rounded-lg p-4 shadow-md transition-all duration-300 ${
                visible ? 'opacity-100' : 'opacity-0'
            }`}
        >
            <a href={notification.href} className='text-gray-800'>
                {notification.message}
            </a>
            <button
                onClick={() => {
                    handleClose(notification)
                    setVisible(false)
                }}
                className='w-6 ml-2'
            >
                <Trash />
            </button>
        </div>
    )
}

export default Notification
