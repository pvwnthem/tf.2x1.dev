/** @format */

'use client'

const Description = ({ description }: { description: string }) => {
    return (
        <div className='mt-4 w-3/4 flex h-auto items-start justify-center py-2 break-keep'>
            <p className='text-lg text-wave-300 text-center'>{description}</p>
        </div>
    )
}

export default Description
