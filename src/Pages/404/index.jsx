import Navbar from 'components/Navbar/Navbar'
import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
const Error = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div>
      <Navbar />
      <div className='mt-32 md:mt-52 flex flex-col items-center w-full justify-center'>
        <div className='w-20 h-20'>
          <img
            alt='logo'
            src='https://html-tokenmart.netlify.app/light/assets/images/error-logo.png'
            style={{ width: '100%', height: '100%' }}
          />
        </div>
        <h1
          className='text-2xl md:text-5xl xl:text-8xl text-indigo-500 my-7 font-bold'
          style={{ fontFamily: 'Nunito' }}
        >
          404
        </h1>
        <h1 className='text-lg font-semibold'>Error 404 : Page Not Found</h1>
        <NavLink to='/'>
          {' '}
          <button className='rounded-lg h-14 w-40 font-semibold px-5 font-body py-2 text-lg mb-10 text-white bg-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-purple-600 hover:to-indigo-600 mt-10'>
            Back To Home
          </button>
        </NavLink>
      </div>
    </div>
  )
}
export default Error
