import Navbar from 'components/Navbar/Navbar'
import NftCollection from 'Pages/Home/NftCollection/nftCollection'
import React, { useEffect } from 'react'
import LiveAuctions from './LiveAuctions/LiveAuctions'
import Header from './Header/Header'
import { Blogs } from './Blogs'
import { SellerLeaderBorad } from './SellerLeaderBoard'
const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div>
      <Navbar />
      <Header />
      <NftCollection />
      <LiveAuctions />
      <SellerLeaderBorad />
      <Blogs />
    </div>
  )
}
export default Home
