import { Box, styled } from '@mui/material'
import Navbar from 'components/Navbar/Navbar'
import React, { useEffect } from 'react'
import { Address } from './Address'
import { Header } from './Header'
import { ItemDetails } from './ItemDetails'

const Root = styled(Box)(({ theme }) => ({
  margin: '7% 7%',
  [theme.breakpoints.only('md')]: {
    margin: '2% 3%',
  },
}))
export const ExploreItem = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div className='sm:flex sm:flex-col sm:items-center'>
      <div style={{ maxWidth: '1900px' }}>
        <Navbar />
        <Root>
          <Header />
          <ItemDetails />
          <Address />
        </Root>
      </div>
    </div>
  )
}
