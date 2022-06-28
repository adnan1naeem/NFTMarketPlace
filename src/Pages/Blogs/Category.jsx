import { Box } from '@mui/material'
import { blogsCategoryData } from 'assets/Data'
import Navbar from 'components/Navbar/Navbar'
import { NunitoText } from 'components/UI/NunitoText'
import { BlogCard } from 'Pages/Home/Blogs/Card'
import React, { useEffect } from 'react'

export const Category = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div className='sm:flex sm:flex-col sm:items-center'>
      <div style={{ maxWidth: '1900px' }}>
        <Box>
          <Navbar />
          <NunitoText
            sx={{
              fontSize: '3.75rem',
              fontWeight: 700,
              margin: '5% 7%',
              marginTop: '150px',
            }}
          >
            Category - NFT
          </NunitoText>
          <BlogCard data={blogsCategoryData} />
        </Box>
      </div>
    </div>
  )
}
