import React from 'react'
import Navbar from 'components/Navbar/Navbar'
import { Header } from './Header/Header'
import BlogHeader from './BlogHeader/BlogHeader'
const BlogDetails = () => {
  return (
    <div className='mb-32'>
      <Navbar />
      <div className='mt-32 mx-10'>
        <Header />
        <BlogHeader />
      </div>
    </div>
  )
}
export default BlogDetails
