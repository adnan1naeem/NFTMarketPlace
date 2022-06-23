import { Box, styled } from '@mui/material'
import React from 'react'
import { NavLink } from 'react-router-dom'
import { useParams } from 'react-router-dom'
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
  const { id } = useParams()
  return (
    <Box>
      <NavLink to={`/authors/${id}`}>
        <Button>Featured (4)</Button>
      </NavLink>
      <NavLink to={`/authors/${id}`}>
        {' '}
        <Button>Published (10)</Button>
      </NavLink>
      <Button>Pending (12)</Button>
      <NavLink to={`/authoractivity/${id}`}>
        <Button>Activity</Button>
      </NavLink>
      <ActiveButton>Followers (6)</ActiveButton>
      <Button>Edit Profile</Button>
      <Button>Logout</Button>
    </Box>
  )
}
