import React from 'react'
import Navbar from 'components/Navbar/Navbar'
import { Header } from './Header/Header'
import BlogHeader from './BlogHeader/BlogHeader'
const BlogDetails = () => {
  return (
    <div className='flex items-center flex-col'>
      <div className='mb-32' style={{ maxWidth: '1900px' }}>
        <Navbar />
        <div className='mt-32 mx-10'>
          <Header />
          <BlogHeader />
        </div>
      </div>
    </div>
  )
}
export default BlogDetails
