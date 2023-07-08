/** @format */

'use client'

import Image from 'next/image'

const ProfilePicture = ({ src, onClick }: { src: string; onClick?: any }) => {
    return (
        <div className='rounded-full md:w-1/4 w-1/3 flex items-center justify-center p-2'>
            <Image
                width={250}
                height={250}
                alt='Profile Picture'
                src={src}
                className='w-full'
            />
        </div>
    )
}

export default ProfilePicture
