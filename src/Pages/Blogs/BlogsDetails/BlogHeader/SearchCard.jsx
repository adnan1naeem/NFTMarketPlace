import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { images } from 'assets/Images'
const SearchCard = () => {
  const [searchInput, setSearchInput] = useState()
  return (
    <div className='h-40 w-5/6 border border-2 border-gray-400 rounded-xl hover:shadow hover:shadow-lg '>
      <h1 className='text-3xl font-semibold w-full text-left m-5'>Search</h1>
      <div className='w-4/5 h-12 shadow bg-white hover:shadow-lg -mt-1 lg:ml-10 lg:flex items-center justify-center rounded-lg border border-2 border-gray-400'>
        <div>
          <input
            type='text'
            placeholder='Search items'
            className='w-40 h-7 focus:outline-none mr-2 '
            value={searchInput}
            onChange={(e) => {
              setSearchInput(e.target.value)
            }}
          />
        </div>
        <NavLink to={`/search/${searchInput}`}>
          <div className='w-5 h-5'>
            <img
              src={images.search}
              style={{ width: '100%', height: '100%' }}
              alt=''
            />
          </div>
        </NavLink>
      </div>
    </div>
  )
}
export default SearchCard
