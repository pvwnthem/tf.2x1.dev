/** @format */

import { images } from '@constants/images'
import { ImageResponse } from 'next/server'

export const contentType = 'image/png'

// Image generation
export default function Icon() {
    const randomIndex = Math.floor(Math.random() * images.length)
    const image = images[randomIndex]

    return new ImageResponse(
        (
            // ImageResponse JSX element
            <img
                style={{
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
                src={image}
            />
        )
    )
}
