import React from 'react'
import { blogTags } from 'assets/Data'
const Tags = () => {
  return (
    <div className='mt-10 w-5/6 flex flex-wrap border border-2 border-gray-400 rounded-xl hover:shadow hover:shadow-lg '>
      <h1 className='text-3xl font-semibold w-full text-left m-5'>Tags</h1>
      {blogTags.map((i) => {
        return (
          <div className=' h-12 shadow bg-white hover:shadow-lg my-3 lg:ml-3 lg:flex items-center justify-between px-5 text-gray-600 rounded-lg border border-2 border-gray-400 hover:bg-indigo-500 hover:text-white cursor-pointer'>
            <h1>{i.title}</h1>
          </div>
        )
      })}
    </div>
  )
}
export default Tags
