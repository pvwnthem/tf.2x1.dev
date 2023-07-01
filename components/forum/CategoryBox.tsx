'use client'
import Trading from '@components/svg/trading';
import React from 'react';

const CategoryBox = ({ name, description }: { name: string, description: string }) => {
  return (
    <a href={`/forum/topic/${name}`} className="w-full border flex px-4 py-8 ">
        <div className='flex w-12 text-wave-400 justify-center items-center'>
            <Trading />
        </div>
        <div className='flex flex-col ml-3'>
            <h1 className='text-wave-300 text-2xl font-semibold'>{name}</h1>
            <h2 className='text-wave-100 text-md mt-1 font-light'>{description}</h2>
        </div>
        
    </a>
  );
};

export default CategoryBox;
