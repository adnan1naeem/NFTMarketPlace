import AuthorDetails from 'components/AuthorDetails/AuthorDetails'
import Navbar from 'components/Navbar/Navbar'
import React, { useEffect } from 'react'
import { Buttons } from './Button'
import LoadingButton from 'components/UI/LoadingButton'
import ProfileCard from './ProfileCard'
import { AuthorsData } from 'assets/Data'
const AuthorsProfiles = () => {
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
        <div className='mt-20 flex items-center flex-wrap justify-center'>
         {AuthorsData.map((i)=>{
          return(
            <ProfileCard id={i.id} img={i.img} name={i.name} level={i.level} items={i.items} up={i.up}/>
            )
         })}
        </div>
        <LoadingButton />
      </div>
    </div>
  )
}
export default AuthorsProfiles
