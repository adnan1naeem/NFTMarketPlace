import NftDetails from 'components/NftDetails/NftDetails';
import NftView from 'components/NftView/NftView';
import { nftAuctionData } from 'assets/Data';
import React,{useState} from 'react';
const LiveAuctions = () => {
  
  const [showTimer, setShowTimer] = useState(0);
  const handleHover =(id)=>{
      setShowTimer(id);
  }
  const handleHoverOut =(id)=>{
    setShowTimer(0);
}
 
  return (
    <div className="flex flex-col items-center">
    <div className="" style={{maxWidth: '1700px'}}>
      <h1 className="text-4xl text-left 2xl:text-center font-bold mt-10 sm:ml-2 2xl:ml-0">Live Auctions</h1>
      <div className="flex items-center justify-center mb-10">
      <div className="flex flex-wrap items-center justify-center">

       {nftAuctionData.map((i)=>{
        return(
          <div className=" pb-5 mt-5 hover:shadow hover:shadow-lg" onMouseOver={()=>handleHover(i.id)} onMouseOut={()=>handleHoverOut(i.id)}>
               <div>
               <NftView link={i.nftUrl}/>
               <div className={`w-44 h-16 rounded-lg border-blue-400 text-blue-400 absolute -mt-24 ml-20 bg-gradient-to-r from-indigo-500 to-purple-500 ${showTimer === i.id ? '' : 'hidden'}`}>
                    <div className="flex items-center justify-center text-white pt-1">
                    <h1 className="font-semibold">06</h1>
                    <h1 className="ml-5 font-semibold">13</h1>
                    <h1 className="ml-5 font-semibold">50</h1>
                    <h1 className="ml-5 font-semibold">23</h1>
                    </div>
                    <div className="flex items-center justify-center text-white">
                    <h1>Days</h1>
                    <h1 className="ml-2 font-semibold">Hrs</h1>
                    <h1 className="ml-2 font-semibold">Min</h1>
                    <h1 className="ml-2 font-semibold">Sec</h1>
                    </div>
              </div>
               </div>
               <NftDetails title={i.title} likes={i.likes} priceInEth={i.priceInEth} priceInDoller={i.priceInDoller} bids={i.bids}/>
          </div>
            )
       })}
      </div>
      </div>
    </div>
    </div>
  );
}
export default LiveAuctions;