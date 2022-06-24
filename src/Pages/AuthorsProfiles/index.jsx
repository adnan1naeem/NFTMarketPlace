import AuthorDetails from 'components/AuthorDetails/AuthorDetails'
import Navbar from 'components/Navbar/Navbar'
import React, { useEffect, useState } from 'react'
import { Buttons } from './Button'
import LoadingButton from 'components/UI/LoadingButton'
import ProfileCard from './ProfileCard'
import { AuthorsData, AuthorsDataOnLoading } from 'assets/Data'
const AuthorsProfiles = () => {
  const [loading, setLoading] = useState(true)
  const handleLoading = () => {
    setLoading(false)
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
        <div className='mt-20 flex items-center flex-wrap justify-center'>
          {AuthorsData.map((i) => {
            return (
              <ProfileCard
                id={i.id}
                img={i.img}
                name={i.name}
                level={i.level}
                items={i.items}
                up={i.up}
              />
            )
          })}
          {loading ? (
            <div onClick={handleLoading} className='w-full'>
              <LoadingButton />
            </div>
          ) : (
            <>
              {AuthorsDataOnLoading.map((i) => {
                return (
                  <ProfileCard
                    id={i.id}
                    img={i.img}
                    name={i.name}
                    level={i.level}
                    items={i.items}
                    up={i.up}
                  />
                )
              })}
            </>
          )}
        </div>
      </div>
    </div>
  )
}
export default AuthorsProfiles
