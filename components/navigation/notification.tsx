/** @format */

import React, { useEffect, useState } from 'react'

const Notification = ({ message }: { message: string }) => {
    const [visible, setVisible] = useState(false)

    useEffect(() => {
        const notificationTimer = setTimeout(() => {
            setVisible(true)
            playAudio()
        }, 1000) // Display notification after 2 seconds

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
            className={`fixed top-4 right-4 bg-white rounded-lg p-4 shadow-md transition-all duration-300 ${
                visible ? 'opacity-100' : 'opacity-0'
            }`}
        >
            <p className='text-gray-800'>{message}</p>
        </div>
    )
}

export default Notification
