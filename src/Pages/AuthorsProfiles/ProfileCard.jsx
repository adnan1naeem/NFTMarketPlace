import React from 'react'
import { NavLink } from 'react-router-dom'
const ProfileCard = (props) => {
  return (
    <div className='w-52 h-60 mt-10 mx-5 transition ease-in-out delay-150  hover:shadow hover:shadow-lg rounded-lg'>
      <div className='flex flex-col justify-center items-center'>
        <div className='w-20 h-20 rounded-full bg-gray-300 mt-5'>
          <img
            className='rounded-full object-cover'
            style={{ width: '100%', height: '100%' }}
            src={props.img}
          />
        </div>
        <div className='w-5 h-5 rounded-full absolute ml-16 mt-14'>
          <img
            className='rounded-full object-cover'
            style={{ width: '100%', height: '100%' }}
            src='https://html-tokenmart.netlify.app/light/assets/images/verified-icon.svg'
          />
        </div>
      </div>
      <div>
        <NavLink to={`/authors/${props?.id}`}>
          {' '}
          <h1
            className='text-lg mt-3 font-semibold hover:text-indigo-600 cursor-pointer'
            style={{ fontFamily: 'Manrope' }}
          >
            {props.name}
          </h1>
        </NavLink>
        <span className='flex items-center justify-center mt-1'>
          <div className='w-4 mr-1 h-4 mt-1'>
            <img
              className=''
              style={{ width: '100%', height: '100%' }}
              src='https://html-tokenmart.netlify.app/light/assets/images/diamond-icon.svg'
            />
          </div>
          <p className='text-sm text-gray-600'> Diamond Seller</p>
        </span>
      </div>
      <div className='w-full h-10 mt-5 mb-10 flex justify-between'>
        {/* left side */}
        <div className='ml-3'>
          <span className='text-gray-600'>Level</span>
          <span className='flex pt-1 ml-1'>
            <div className='w-3 h-3'>
              <img
                src={`https://html-tokenmart.netlify.app/light/assets/images/${
                  props.up ? 'up' : 'down'
                }-icon.svg`}
                style={{ width: '100%', height: '100%' }}
              />
            </div>
            <h1 className='ml-1 -mt-2 text-lg font-semibold'>{props.level}</h1>
          </span>
        </div>
        {/* right side */}
        <div className='mr-3'>
          <span className='text-gray-600'>Items</span>
          <span className='flex pt-1 ml-1'>
            <h1 className='ml-1 -mt-2 text-lg font-semibold'>{props.items}</h1>
          </span>
        </div>
      </div>
    </div>
  )
}
export default ProfileCard
