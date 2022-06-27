import { Box, Grid, styled, useMediaQuery } from '@mui/material'
import Navbar from 'components/Navbar/Navbar'
import React from 'react'
import { ContactForm } from './ContactForm'
import { ContactInfo } from './ContactInfo'
import { Header } from './Header'
const Wrapper = styled(Box)(({ theme }) => ({
  margin: '1% 7%',
  // [theme.breakpoints.only("xs")]: {
  //   margin: "1% 1%",
  // },
}))
export const ContactUs = () => {
  const isTab = useMediaQuery('(max-width:768px)')
  return (
    <div className='sm:flex sm:flex-col sm:items-center'>
      <div style={{ maxWidth: '1900px' }}>
        <Navbar />
        <Wrapper>
          <Header />
          <Grid container spacing={isTab ? 0 : 4}>
            <Grid item xs={12} md={6}>
              <ContactForm />;
            </Grid>
            <Grid item xs={12} md={6}>
              <ContactInfo />
            </Grid>
          </Grid>
        </Wrapper>
      </div>
    </div>
  )
}
