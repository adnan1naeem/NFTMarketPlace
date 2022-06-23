import * as React from 'react'
import { styled } from '@mui/material/styles'
import Dialog from '@mui/material/Dialog'
import Typography from '@mui/material/Typography'
import { ImHammer2, ImCross } from 'react-icons/im'
import { Box, Button } from '@mui/material'
import { NunitoText } from 'components/UI/NunitoText'
import { Flex } from 'components/UI/Flex'
import ethIcon from '../../assets/Images/cryptocurrency-icon.svg'
import { ManropeText } from 'components/UI/ManropeText'

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}))
const CustomButton = styled(Button)(({ theme }) => ({
  background: 'rgba(99,102,241)',
  width: '100%',
  height: 60,
  color: 'white',
  fontWeight: 700,
  fontFamily: 'Manrope',
  fontSize: 15,
  borderRadius: '8px',
  '&:hover': {
    background: '#333332',
  },
}))

export default function BidModal() {
  const [open, setOpen] = React.useState(false)

  const handleClickOpen = () => {
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false)
  }

  return (
    <div>
      <Box
        sx={{
          background: '#6366F1',
          borderRadius: '8px',
          color: 'white',
          display: 'flex',
          alignItems: 'center',
          fpntFamily: 'Manrope',
          marginTop: '1rem',
          padding: '5px 20px',
          zIndex: '5',
          fontWeight: 500,
          cursor: 'pointer',
        }}
        onClick={handleClickOpen}
      >
        <ImHammer2 style={{ marginRight: 8 }} />
        <Typography sx={{ fontSize: '1.25rem' }}>Place a bid</Typography>
      </Box>
      <BootstrapDialog
        sx={{ minHeight: '550px' }}
        onClose={handleClose}
        aria-labelledby='customized-dialog-title'
        open={open}
      >
        <Box
          sx={{ minWidth: 500, m: '10px 25px 30px 25px', minHeight: '500px' }}
        >
          <Box
            sx={{
              display: 'flex',
              background: 'white',
              justifyContent: 'flex-end',
              alignItems: 'center',
              //   p: "15px 0px",
              color: 'gray',
            }}
          >
            <ImCross style={{ cursor: 'pointer' }} onClick={handleClose} />
          </Box>
          <Box
            sx={{
              display: 'flex',
              background: 'white',
              justifyContent: 'center',
              alignItems: 'center',
              marginBottom: 1,
            }}
          >
            <NunitoText sx={{ fontSize: 24, fontWeight: '700' }}>
              Your Bid
            </NunitoText>
          </Box>
          <Box
            sx={{
              display: 'flex',
              background: 'white',
              justifyContent: 'space-between',
              alignItems: 'center',
              p: '10px 5px',
            }}
          >
            <NunitoText sx={{ color: '#475569', fontWeight: '700' }}>
              Current Bid
            </NunitoText>
            <NunitoText>0.088 ETH</NunitoText>
          </Box>
          <Box
            sx={{
              display: 'flex',
              background: 'white',
              justifyContent: 'space-between',
              alignItems: 'center',
              p: '10px 5px',
            }}
          >
            <NunitoText sx={{ color: '#475569', fontWeight: '700' }}>
              Minimum markup
            </NunitoText>
            <NunitoText>0.088 ETH</NunitoText>
          </Box>
          <Flex
            sx={{
              flexDirection: 'column',
            }}
          >
            <Flex
              sx={{
                background: 'white',
                width: '100%',
                justifyContent: 'center',
              }}
            >
              <NunitoText sx={{ color: '#475569' }}>Big</NunitoText>
              <NunitoText sx={{ m: '0px 1.5rem', fontSize: '3.75rem' }}>
                0.088 ETH
              </NunitoText>
              <Flex>
                <img
                  src={ethIcon}
                  alt=''
                  style={{ height: '1.75rem', width: '1.75rem' }}
                />
                <NunitoText sx={{ fontSize: '24px', marginLeft: 1 }}>
                  ETH
                </NunitoText>
              </Flex>
            </Flex>
            <Flex>
              <NunitoText>≈$26.69</NunitoText>
            </Flex>
          </Flex>
          <Flex
            sx={{
              background: 'rgba(238,242,255)',
              alignItems: 'flex-start',
              p: '10px 20px',
              borderRadius: '8px',
              marginTop: 3,
            }}
          >
            <img
              src={ethIcon}
              alt=''
              style={{ height: '2rem', width: '2rem' }}
            />
            <Box sx={{ marginLeft: 2 }}>
              <ManropeText>Don't have enough crypto?</ManropeText>
              <NunitoText sx={{ color: '#6366f1' }}>
                Buy Crypto/Deposit!
              </NunitoText>
            </Box>
          </Flex>
          <Box
            sx={{
              display: 'flex',
              background: 'white',
              justifyContent: 'space-between',
              alignItems: 'center',
              p: '10px 3px',
              marginTop: 2,
              marginBottom: 3,
            }}
          >
            <NunitoText sx={{ color: '#475569', fontWeight: '700' }}>
              Current Bid
            </NunitoText>
            <NunitoText>0.088 ETH</NunitoText>
          </Box>
          <CustomButton onClick={handleClose}>Place a Bid</CustomButton>
        </Box>
      </BootstrapDialog>
    </div>
  )
}
