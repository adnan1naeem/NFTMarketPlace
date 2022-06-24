import AuthorDetails from 'components/AuthorDetails/AuthorDetails'
import Navbar from 'components/Navbar/Navbar'
import React, { useEffect } from 'react'
import { Buttons } from './Button'
import { Thumbnail } from 'Pages/Explore/Thumbnail'
import { exploreCardData } from 'assets/Data'
import LoadingButton from 'components/UI/LoadingButton'
const Authors = () => {
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
        <div className='mt-20'>
          <Thumbnail data={exploreCardData} />
        </div>
      </div>
    </div>
  )
}
export default Authors
