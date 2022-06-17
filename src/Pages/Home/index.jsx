import Navbar from 'components/Navbar/Navbar';
import NftCollection from 'Pages/Home/NftCollection/nftCollection';
import React from 'react';
import LiveAuctions from './LiveAuctions/LiveAuctions';
import Header from './Header/Header';
const Home = () => {
  return (
    <div>
       <Navbar />
       <Header />
      <NftCollection />
      <LiveAuctions />
    </div>
  );
}
export default Home;