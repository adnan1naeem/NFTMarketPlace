import React from 'react'
import Navbar from 'components/Navbar/Navbar'
import { Header } from './Header'
import { Buttons } from './Buttons/Buttons'
import { MarketActivityData } from 'assets/Data'
import ActivityBox from './ActivityBox/activityBox'
const Activity = () => {
  return (
    <div className='flex flex-col items-center'>
      <div className='mx-5 md:mx-10' style={{ maxWidth: '1900px' }}>
        <Navbar />
        <Header />
        <Buttons />
        <div className=' flex w-full justify-center flex-wrap mb-32'>
          {MarketActivityData.map((i) => {
            return (
              <ActivityBox
                id={i.id}
                img={i.img}
                title={i.title}
                activity={i.activity}
                by={i.by}
                iconImg={i.iconImg}
                time={i.time}
                color={i.color}
                iconBg={i.iconBg}
              />
            )
          })}
        </div>
      </div>
    </div>
  )
}
export default Activity
