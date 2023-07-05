/** @format */

import Trading from '@components/svg/trading'
import { getNumberOfPostsInCategory } from '@services/forum.service'
import React, { useState, useEffect } from 'react'

const CategoryBox = ({
    name,
    description,
}: {
    name: string
    description: string
}) => {
    const [count, setCount] = useState<number | null>(null)

    useEffect(() => {
        async function getCount() {
            const count = await getNumberOfPostsInCategory(name)
            setCount(count)
        }
        getCount()
    }, [name])

    return (
        <a
            href={`/forum/topic/${name}`}
            className='w-full border flex md:px-4 md:py-8 px-2 py-6 '
        >
            <div className='flex md;w-12 w-10 text-wave-400 justify-center items-center'>
                <Trading />
            </div>
            <div className='flex flex-col ml-3'>
                <h1 className='text-wave-300 md:text-2xl text-xl font-semibold'>
                    {name}
                </h1>
                <h2 className='text-wave-100 md:text-lg text-sm mt-1 font-light'>
                    {description}
                </h2>
            </div>
            {count !== null && (
                <div className='flex ml-auto'>
                    <div className='flex flex-col justify-center'>
                        <span className='text-wave-100 text-xl font-light'>
                            {count}
                        </span>
                        <h2 className='text-wave-300 mt-1'>posts</h2>
                    </div>
                </div>
            )}
        </a>
    )
}

export default CategoryBox
