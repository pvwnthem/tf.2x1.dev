/** @format */

'use client'
import React from 'react'

export default function AuthError() {
    return (
        <div className='w-full h-screen flex items-start justify-center bg-background'>
            <div className='w-1/2 flex flex-col'>
                <h1 className='text-wave-300 text-center text-7xl mt-48'>
                    oops!
                </h1>
                <h2 className='text-wave-400 text-center text-3xl mt-12'>
                    please login to access this page!
                </h2>
                <button
                    className='bg-wave-400 text-white px-8 py-2 text-lg mx-auto rounded-lg mt-8'
                    onClick={() =>
                        window.location.replace(
                            '/login?redirectPath=' + window.location.pathname
                        )
                    }
                >
                    login
                </button>
            </div>
        </div>
    )
}
