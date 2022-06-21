import NftDetails from 'components/NftDetails/NftDetails';
import NftView from 'components/NftView/NftView';
import { nftAuctionData } from 'assets/Data';
import React,{useState} from 'react';
import Timer from 'components/Timer/Timer';
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
      <h1 className="text-4xl text-left 2xl:text-center font-bold mt-10 sm:ml-20 xl:ml-0">Live Auctions</h1>
      <div className="flex items-center justify-center mb-10">
      <div className="flex flex-wrap items-center justify-center">

       {nftAuctionData.map((i)=>{
        return(
          <div className=" pb-5 mt-5 hover:shadow hover:shadow-lg" onMouseOver={()=>handleHover(i.id)} onMouseOut={()=>handleHoverOut(i.id)}>
               <div>
               <NftView link={i.nftUrl}/>
               <div className={`w-44 h-16 rounded-lg border-blue-400 text-blue-400 absolute -mt-24 ml-20 bg-gradient-to-r from-indigo-500 to-purple-500 ${showTimer === i.id ? '' : 'hidden'}`}>
                    <Timer nftNum={i.id}/>
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