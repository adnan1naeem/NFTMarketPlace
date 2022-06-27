import { Box } from '@mui/material'
import Navbar from 'components/Navbar/Navbar'
import { Header } from './Header/Header'
import React from 'react'
import { AboutAuthor } from './AboutCreator'
import BlogHeader from './BlogHeader/BlogHeader'
import { CommentsForm } from './CommentsForm'
import { FormHeader } from './CommentsForm/FormHeader'
import { ExistingComments } from './ExistingComments'
export const BlogDetails = () => {
  return (
    <div className='flex flex-col items-center'>
      <div style={{ maxWidth: '1900px' }}>
        <Navbar />
        <Box sx={{ margin: '5% 7%' }}>
          <Header />
          <BlogHeader />
          <AboutAuthor />
          <ExistingComments />
          <FormHeader />
          <CommentsForm />
        </Box>
      </div>
    </div>
  )
}
