import Navbar from 'components/Navbar/Navbar'
import React from 'react'
import { Header } from './Header'
import TacDetails from './TacDetails/TacDetails'
const Tac = () => {
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
