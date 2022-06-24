import React from 'react'
import BlogDescription from './BlogDescription'
import Writers from './Writers'
import SearchCard from './SearchCard'
import Categories from './Categories'
import Tags from './Tags'
import PopularPosts from './PopularPosts'
import SocialMedia from './SocialMedia'
const BlogHeader = () => {
  return (
    <div className='mb-32 mt-32'>
      <div className='w-full flex items-start justify-center'>
        <div className='w-full lg:w-4/6 flex flex-col items-center justify-center'>
          <div className='w-full h-96'>
            <img
              className='rounded-lg object-cover'
              style={{ width: '100%', height: '100%' }}
              src='https://html-tokenmart.netlify.app/light/assets/images/featured-image.jpg'
            />
          </div>
          <div className='w-full'>
            <Writers />
            <BlogDescription />
            <SocialMedia />
          </div>
        </div>
        <div className='hidden lg:flex lg:flex-col items-center lg:w-2/6 lg:justify-center'>
          <SearchCard />
          <Categories />
          <Tags />
          <PopularPosts />
        </div>
      </div>
    </div>
  )
}
export default BlogHeader
