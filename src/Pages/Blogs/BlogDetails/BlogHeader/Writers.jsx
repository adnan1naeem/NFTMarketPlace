import React from 'react'
const Writers = () => {
  return (
    <div className='flex flex-col sm:flex-row flex-wrap justify-between w-full items-center  mt-5'>
      <div className='w-40 flex items-center mt-2'>
        <div className='w-10 h-10 rounded-full '>
          <img
            className='rounded-full object-cover'
            style={{ width: '100%', height: '100%' }}
            src='https://html-tokenmart.netlify.app/light/assets/images/author/3.jpg'
          />
        </div>
        <div className='pl-2'>
          <h1 className='font-semibold'>Adams Smith</h1>
          <h1 className='text-gray-600'>NFT Blogger</h1>
        </div>
      </div>

      <div className='w-40 flex items-center mt-2'>
        <div className='w-10 h-10 rounded-full '>
          <img
            className='rounded-full object-cover'
            style={{ width: '100%', height: '100%' }}
            src='	https://html-tokenmart.netlify.app/light/assets/images/author/4.jpg'
          />
        </div>
        <div className='pl-2'>
          <h1 className='font-semibold'>Jones Jay</h1>
          <h1 className='text-gray-600'>NFT Blogger</h1>
        </div>
      </div>

      <div className='w-40 mt-2 flex items-center justify-end '>
        <div className='text-center sm:text-right'>
          <h1 className='font-semibold'>Published on</h1>
          <h1 className='text-gray-600'>02 Feb 2021</h1>
        </div>
      </div>

      <div className='w-56 mt-2 flex items-center justify-end '>
        <div className='text-center sm:text-right'>
          <h1 className='font-semibold'>Last Updated</h1>
          <h1 className='text-gray-600'>02 Feb 2022 at 1:36 a.m. ET</h1>
        </div>
      </div>
    </div>
  )
}
export default Writers
