/** @format */

'use client'
import React from 'react'

const Description = ({
    isEditing,
    handleSave,
    handleEdit,
}: {
    isEditing: boolean
    handleSave: any
    handleEdit: any
}) => {
    return (
        <div className=''>
            {isEditing ? (
                <button
                    onClick={handleSave}
                    className='px-4 rounded-md py-2 mt-4 bg-wave-300 text-white'
                >
                    Save
                </button>
            ) : (
                <button
                    onClick={handleEdit}
                    className='px-4 rounded-md py-2 mt-4 bg-wave-300 text-white'
                >
                    Edit
                </button>
            )}
        </div>
    )
}

export default Description
