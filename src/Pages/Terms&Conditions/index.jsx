import Navbar from 'components/Navbar/Navbar'
import React, { useEffect } from 'react'
import { Header } from './Header'
import TacDetails from './TacDetails/TacDetails'
const Tac = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div className='flex flex-col items-center'>
      <div className='mx-10' style={{ maxWidth: '1900px' }}>
        <Navbar />
        <Header />
        <TacDetails />
      </div>
    </div>
  )
}
export default Tac
