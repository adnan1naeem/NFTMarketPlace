import React from 'react'
import './activityCard.css'
const ActivityCard = (props) => {
  return (
    <div
      className={`flex w-4/5 sm:w-2/3 rounded-lg items-center mt-10 transition ease-in-out delay-150 hover:shadow hover:shadow-lg ${props.color}`}
    >
      <div className={`w-28 h-28 m-5 rounded-lg flex items-center`}>
        <img
          className={`rounded-lg object-cover zoom`}
          src={props.img}
          style={{ width: '100%', height: '100%' }}
        />
      </div>
      <div
        className={`w-7 h-7 rounded-full hidden md:flex absolute items-center flex justify-center ml-28 -mt-12 ${props.iconBg}`}
      >
        <img
          className=' rounded-full'
          style={{ width: '60%', height: '60%' }}
          src={props.iconImg}
        />
      </div>
      <div className='w-5/6 my-5'>
        <div className='flex flex-col lg:flex-row w-full items-center h-full'>
          <div className='w-full lg:w-5/6'>
            <h1 className='text-left text-2xl font-semibold'>{props.title}</h1>
            <p className='text-left pr-2 text-gray-600'>{props.activity}</p>
            <span className='flex items-center'>
              <div className='w-4 h-4 mt-2'>
                <img
                  style={{ width: '100%', height: '100%' }}
                  src='https://html-tokenmart.netlify.app/light/assets/images/clock-icon.svg'
                />
              </div>
              <p className='text-sm mt-1 ml-2 text-gray-600'>{props.time}</p>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
export default ActivityCard
