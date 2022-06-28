import {
  Box,
  Button,
  FormGroup,
  styled,
  TextField,
  Typography,
} from '@mui/material'
import React, { useState } from 'react'
import sendicon from '../../assets/Images/newsletter-icon.svg'

const Heading = styled(Typography)(({ theme }) => ({
  fontSize: 20,
  fontFamily: 'Nunito',
  fontWeight: 600,
  marginBottom: 25,
}))

const Text = styled(Typography)(({ theme }) => ({
  fontSize: 16,
  fontFamily: 'Manrope',
  fontWeight: 500,
  color: 'rgba(71,85,105)',
  marginBottom: 20,
  '&:hover': {
    textDecoration: 'underline',
    color: '#4287f5',
    cursor: 'pointer',
  },
}))
export const Subscribe = () => {
  const [email, setEmail] = useState()
  const validateEmail = (value) => {
    const pattern = new RegExp(
      /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
    )

    return pattern.test(value)
  }

  const submitEmail = () => {
    if (!email) {
      alert('Please write your email.')
    } else if (!validateEmail(email)) {
      alert('Please enter your valid email.')
    } else {
      const templateId = 'template_9j8udvl'
      sendFeedback(templateId, { message_html: email, reply_to: email })
    }
  }
  const sendFeedback = (templateId, variables) => {
    window.emailjs
      .send('service_b3eu7hh', templateId, variables)
      .then((res) => {
        alert('Thanks for subscribing!')
        setEmail('')
      })
      .catch((err) => {
        console.error(
          'Oh well, you failed. Here some thoughts on the error that occured:',
          err
        )
        alert('Something went wrong.')
      })
  }
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
      }}
    >
      <Heading>Subscribe Us</Heading>
      <FormGroup row sx={{ marginBottom: '3rem' }}>
        <TextField
          variant='outlined'
          placeholder='Your e-mail address'
          value={email}
          onChange={(e) => {
            setEmail(e.target.value)
          }}
        />
        <Button variant='contained' disableElevation onClick={submitEmail}>
          <img src={sendicon} alt='' />
        </Button>
      </FormGroup>
      <Text>Your privacy protected! We dont disclose Email.</Text>
    </Box>
  )
}
