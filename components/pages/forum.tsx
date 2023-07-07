/** @format */

'use client'
import CategoryBox from '@components/forum/CategoryBox'

export default function ForumPage({ session }: { session: any }) {
    return (
        <>
            <div className='w-full h-screen bg-background flex flex-col items-center'>
                <div className='max-w-7xl w-full'>
                    <div className='w-full border flex flex-col'>
                        <CategoryBox
                            name={'trading'}
                            description={'Talk about trading tf2 items'}
                        />
                    </div>
                </div>
            </div>
        </>
    )
}
