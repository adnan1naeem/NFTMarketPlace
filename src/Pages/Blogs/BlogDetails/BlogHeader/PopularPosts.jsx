import React from 'react'
import { blogPopularPosts } from 'assets/Data'
const PopularPosts = () => {
  return (
    <div className='mt-10 w-5/6 flex flex-wrap border border-2 border-gray-400 rounded-xl hover:shadow hover:shadow-lg '>
      <h1 className='text-3xl font-semibold w-full text-left m-5'>
        Popular Posts
      </h1>

      {blogPopularPosts.map((i) => {
        return (
          <div>
            <div
              className={`flex mx-3 rounded-lg items-center`}
              style={{ width: '90%' }}
            >
              <div className={`w-24 h-20 m-1 rounded-lg flex items-center`}>
                <img
                  className={`rounded-lg object-cover`}
                  src={i.img}
                  style={{ width: '100%', height: '100%' }}
                />
              </div>
              <div className='w-full my-5 ml-1'>
                <div className='flex flex-col lg:flex-row w-full items-center h-full'>
                  <div className='w-full'>
                    <h1 className='text-left font-semibold hover:text-indigo-500 cursor-pointer'>
                      {i.title}
                    </h1>
                    <span className='flex items-center'>
                      <div className='w-4 h-4 mt-2'>
                        <img
                          style={{ width: '100%', height: '100%' }}
                          src='https://html-tokenmart.netlify.app/light/assets/images/clock-icon.svg'
                        />
                      </div>
                      <p className='text-sm mt-1 ml-2 text-gray-600'>
                        {i.time}
                      </p>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className='w-full flex items-center justify-center'>
              <div
                className='w-5/6 bg-gray-400 mb-2'
                style={{ height: '1px' }}
              ></div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
export default PopularPosts
