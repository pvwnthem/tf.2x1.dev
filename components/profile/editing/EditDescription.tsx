/** @format */

'use client'
import React from 'react'

const EditDescription = ({
    description,
    handleDescriptionChange,
}: {
    description: string
    handleDescriptionChange: any
}) => {
    return (
        <div className='w-full flex '>
            <textarea
                value={description}
                onChange={handleDescriptionChange}
                maxLength={128}
                className='mt-4 w-3/4 mx-auto flex items-start text-center justify-center py-2 break-keep text-lg text-wave-300 bg-background'
            />
        </div>
    )
}

export default EditDescription
