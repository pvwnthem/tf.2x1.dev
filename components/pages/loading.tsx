/** @format */

'use client'
import { useState, useEffect } from 'react'

export default function Loading() {
    const [dots, setDots] = useState('...')

    useEffect(() => {
        const interval = setInterval(() => {
            setDots((prevDots) => {
                if (prevDots === '...') {
                    return '.'
                } else if (prevDots === '..') {
                    return '...'
                } else {
                    return '..'
                }
            })
        }, 250)

        return () => {
            clearInterval(interval)
        }
    }, [])

    return (
        <div className='w-full h-screen flex items-center justify-center bg-background'>
            <div className='w-1/2 flex flex-col items-center justify-center'>
                <h1 className='text-wave-300 text-center text-7xl'>
                    Loading{dots}
                </h1>
            </div>
        </div>
    )
}
