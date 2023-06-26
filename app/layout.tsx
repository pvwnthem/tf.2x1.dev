import './globals.css'

import React from "react";




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
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
