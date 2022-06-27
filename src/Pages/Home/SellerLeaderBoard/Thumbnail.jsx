import React from 'react'
import { Grid, styled, useMediaQuery } from '@mui/material'
import { Box } from '@mui/material'
import { BsCaretUpFill } from 'react-icons/bs'
import { Flex, Text } from '../Blogs/Card'
import { Stats } from './Stats'
import { Products } from './Products'
import { NavLink, useNavigate } from 'react-router-dom'
import { NunitoText } from 'components/UI/NunitoText'
import { HiOutlineArrowNarrowRight } from 'react-icons/hi'
import img from '../../../assets/Images/Seller LeaderBoard/sec-icon3.svg'
import diamond from '../../../assets/Images/LeaderBoard/diamond-icon.svg'
const Root = styled(Box)(({ theme }) => ({
  margin: '10px 7%',
  width: '100%',
}))
const Card = styled(Box)(({ theme }) => ({
  borderRadius: '8px',
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: 30,
  padding: '1% 0%',
  transition: 'box-shadow .5s ease-in-out',
  '&:hover': {
    boxShadow: '0 1rem 3rem rgba(0,0,0,.175)',
    transition: 'box-shadow .5s ease',
    cursor: 'pointer',
  },
}))
const Image = styled('img')(({ theme }) => ({
  width: '5rem',
  borderRadius: '40px',
  height: '5rem',
  objectFit: 'cover',
  marginRight: '30px',
  [theme.breakpoints.only('xs')]: {
    width: '4rem',
    height: '4rem',
  },
}))
const ImageIcon = styled('img')(({ theme }) => ({
  borderRadius: '8px',
  width: '1.5rem',
  //   transition: "width 2s",
}))
export const LeaderBoardThumbnail = ({ data, show }) => {
  const navigate = useNavigate()
  const isMobile = useMediaQuery('(max-width:600px)')
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Flex
        sx={{
          justifyContent: 'space-between',
          margin: '2% 7%',
          display: show ? 'flex' : 'none',
          maxWidth: 1280,
          width: '100%',
        }}
      >
        <Flex>
          <Box
            sx={{
              background: '#6764f0',
              borderRadius: '40px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              height: '2.5rem',
              width: '2.5rem',
              marginRight: 2,
            }}
          >
            <ImageIcon src={img} alt='' />
          </Box>
          <NunitoText sx={{ fontSize: isMobile ? '18px' : '2rem' }}>
            Seller Leaderboard
          </NunitoText>
        </Flex>
        <Flex
          sx={{
            background: 'rgba(224,231,255)',
            padding: '5px 10px',
            color: 'rgba(99,102,241)',
            borderRadius: '8px',
            cursor: 'pointer',
          }}
          onClick={() => navigate('/leaderboard')}
        >
          See All
          <HiOutlineArrowNarrowRight />
        </Flex>
      </Flex>

      <Root>
        {data.map((item) => (
          <NavLink to={`/authors/${item?.id}`}>
            <Card key={item.id}>
              <Flex>
                <Flex
                  sx={{
                    color: 'rgba(15,23,42)',
                    fontSize: '18px',
                    fontWeight: 600,
                    fontFamily: 'Manrope',
                    margin: '0px 10px',
                  }}
                >
                  <Box
                    sx={{
                      color: 'rgba(71,85,105)',
                      fontSize: '20px',
                      display: 'flex',
                      alignItems: 'center',
                    }}
                  >
                    <Box sx={{ color: item.color }}>{item.icon}</Box>

                    {item.rank}
                  </Box>
                </Flex>
                <Image src={item.pic} />
                <Box>
                  <Text
                    style={{
                      color: '#0F172A',
                      fontSize: '18px',
                      width: '250px',
                    }}
                  >
                    {item.name}
                  </Text>
                  <Flex
                    sx={{
                      alignItems: 'center',
                      display: show ? 'none' : 'flex',
                    }}
                  >
                    <img
                      src={diamond}
                      alt=''
                      style={{
                        width: '1rem',
                        height: '1rem',
                        marginTop: 1,
                        marginRight: 2,
                      }}
                    />
                    Diamond Seller
                  </Flex>
                </Box>
              </Flex>

              <Stats />

              <Products items={item.items} />
            </Card>
          </NavLink>
        ))}
      </Root>
    </Box>
  )
}
