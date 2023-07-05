import './globals.css'

import React from 'react'
import Provider from '@components/Provider'

export const metadata = {
    title: 'tf.2x1.dev',
    description: 'a team fortess 2 community',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <Provider>
            <html lang="en">
                <body className="tf2font">{children}</body>
            </html>
        </Provider>
    )
}
