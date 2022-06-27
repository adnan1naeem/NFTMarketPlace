import React from 'react'
import { tacData } from 'assets/Data'
const TacDetails = () => {
  return (
    <div className='w-full text-left lg:px-32 xl:px-40 my-32'>
      {tacData.map((i) => {
        return (
          <div>
            <h1 className='text-lg md:text-2xl lg:text-3xl my-7 font-semibold'>
              {i.heading}
            </h1>
            <p className='text-gray-600'>{i.detail}</p>
          </div>
        )
      })}
    </div>
  )
}
export default TacDetails
