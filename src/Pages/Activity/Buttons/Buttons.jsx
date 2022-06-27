import { Box, styled } from '@mui/material'
import React, { useEffect } from 'react'

const ActiveButton = styled('button')(({ theme }) => ({
  background: '#6366F1',
  fontFamily: 'Manrope',
  fontWeight: 700,
  fontSize: 16,
  padding: '10px 20px',
  borderRadius: 8,
  marginRight: '1%',
  marginBottom: 10,
  marginTop: 10,
  color: 'white',
  '&:hover': {
    background: '#8E54E9',
  },
  [theme.breakpoints.only('xs')]: {
    marginRight: '1.5%',
    fontSize: 14,
    padding: '10px 15px',
  },
}))
const Button = styled('button')(({ theme }) => ({
  fontFamily: 'Manrope',
  fontWeight: 700,
  fontSize: 16,
  padding: '10px 20px',
  borderRadius: 8,
  marginRight: '1%',
  marginBottom: 10,
  marginTop: 10,
  background: 'white',
  color: '#0f172a',
  border: '1px solid #cfd0d1',
  '&:hover': {
    background: '#8E54E9',
    color: 'white',
  },
  [theme.breakpoints.only('xs')]: {
    marginRight: '1.5%',
    fontSize: 14,
    padding: '10px 10px',
  },
}))
export const Buttons = () => {
  const handleClickBtn = () => {
    window.scrollTo(0, 0)
  }
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <Box
      sx={{
        display: 'flex',
        marginTop: '10%',
        marginBottom: '2%',
        flexWrap: 'wrap',
      }}
    >
      <ActiveButton onClick={handleClickBtn}>All</ActiveButton>
      <Button onClick={handleClickBtn}>Listing</Button>
      <Button onClick={handleClickBtn}>Following</Button>
      <Button onClick={handleClickBtn}>Biding</Button>
      <Button onClick={handleClickBtn}>Unfollow</Button>
      <Button onClick={handleClickBtn}>Sales</Button>
    </Box>
  )
}
