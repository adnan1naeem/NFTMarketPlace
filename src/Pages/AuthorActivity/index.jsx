import AuthorDetails from 'components/AuthorDetails/AuthorDetails'
import Navbar from 'components/Navbar/Navbar'
import React, { useEffect, useState } from 'react'
import { Buttons } from './Button'
import './activityCard.css'
import ActivityCard from './ActivityCard'
import { AuthorActivityData } from 'assets/Data'
const AuthorActivity = () => {
  const [zoom, setZoom] = useState(false)
  const handleHover = () => {
    console.log('zoom is ', zoom)
    setZoom(!zoom)
  }
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div className='flex flex-col items-center'>
      <div className='mb-32' style={{ maxWidth: '1900px' }}>
        <Navbar />
        <AuthorDetails />
        <div className='mt-20'>
          <Buttons />
        </div>
        <div className='mt-20 flex justify-center flex-wrap'>
          {AuthorActivityData.map((i) => {
            return (
              <ActivityCard
                id={i.id}
                img={i.img}
                title={i.title}
                activity={i.activity}
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
export default AuthorActivity
