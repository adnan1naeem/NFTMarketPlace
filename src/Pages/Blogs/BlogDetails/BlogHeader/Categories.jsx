import React from 'react'
import { blogCategories } from 'assets/Data'
const Categories = () => {
  return (
    <div className='mt-10 w-5/6 border border-2 border-gray-400 rounded-xl hover:shadow hover:shadow-lg '>
      <h1 className='text-3xl font-semibold w-full text-left m-5'>
        Categories
      </h1>
      {blogCategories.map((i) => {
        return (
          <div className='w-4/5 h-12 shadow bg-white hover:shadow-lg my-5 lg:ml-10 lg:flex items-center justify-between px-5 text-gray-600 rounded-lg border border-2 border-gray-400 hover:bg-indigo-500 hover:text-white cursor-pointer'>
            <h1>{i.title}</h1>
            <h1>{i.items}</h1>
          </div>
        )
      })}
    </div>
  )
}
export default Categories
