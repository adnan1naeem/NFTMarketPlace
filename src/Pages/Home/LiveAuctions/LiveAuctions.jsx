import NftDetails from 'components/NftDetails/NftDetails';
import NftView from 'components/NftView/NftView';
import React,{useState} from 'react';
const LiveAuctions = () => {
  const [showTimer1, setShowTimer1] = useState(false);
  const [showTimer2, setShowTimer2] = useState(false);
  const [showTimer3, setShowTimer3] = useState(false);
  const [showTimer4, setShowTimer4] = useState(false);
  const handleHover1 =()=>{
    setShowTimer1(!showTimer1);
  }
  const handleHover2 =()=>{
    setShowTimer2(!showTimer2);
  }
  const handleHover3 =()=>{
    setShowTimer3(!showTimer3);
  }
  const handleHover4 =()=>{
    setShowTimer4(!showTimer4);
  }
  return (
    <div>
      <h1 className="text-4xl text-left font-bold mt-10 ml-10 sm:ml-20">Live Auctions</h1>
      <div className="flex items-center justify-center mb-10">
      <div className="flex flex-wrap items-center justify-center" style={{width: '95%'}}>
         <div className=" pb-5 mt-5 hover:shadow hover:shadow-lg" onMouseOver={handleHover1} onMouseOut={handleHover1}>
               <div>
               <NftView link="https://html-tokenmart.netlify.app/light/assets/images/product/28.jpg"/>
               <div className={`w-44 h-16 border-4 rounded-lg border-blue-400 text-blue-400 absolute -mt-24 ml-20 bg-blue-400 ${showTimer1 ? '' : 'hidden'}`}>
                    <div className="flex items-center justify-center text-white">
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
               <NftDetails title="Creative Artwork" likes="88" priceInEth="0.008" priceInDoller="26.69" bids='12'/>
          </div>
          {/* -----------------2nd----------------*/}
          <div className=" pb-5 mt-5 hover:shadow hover:shadow-lg" onMouseOver={handleHover2} onMouseOut={handleHover2}>
               <div>
               <NftView link="https://html-tokenmart.netlify.app/light/assets/images/product/1.gif"/>
               <div className={`w-44 h-16 border-4 rounded-lg border-blue-400 text-blue-400 absolute -mt-24 ml-20 bg-blue-400 ${showTimer2 ? '' : 'hidden'}`}>
                    <div className="flex items-center justify-center text-white">
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
               <NftDetails title="Pumpkin Month" likes="10" priceInEth="0.003" priceInDoller="13.69" bids='12'/>
          </div>
          {/* -----------------3rd----------------*/}
          <div className=" pb-5 mt-5 hover:shadow hover:shadow-lg" onMouseOver={handleHover3} onMouseOut={handleHover3}>
               <div>
               <NftView link="https://html-tokenmart.netlify.app/light/assets/images/product/2.webp"/>
               <div className={`w-44 h-16 border-4 rounded-lg border-blue-400 text-blue-400 absolute -mt-24 ml-20 bg-blue-400 ${showTimer3 ? '' : 'hidden'}`}>
                    <div className="flex items-center justify-center text-white">
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
               <NftDetails title="Pink Love" likes="17" priceInEth="0.001" priceInDoller="9.24" bids='2'/>
          </div>
          {/* -----------------4th----------------*/}
          <div className=" pb-5 mt-5 hover:shadow hover:shadow-lg" onMouseOver={handleHover4} onMouseOut={handleHover4}>
               <div>
               <NftView link="https://html-tokenmart.netlify.app/light/assets/images/product/3.gif"/>
               <div className={`w-44 h-16 border-4 rounded-lg border-blue-400 text-blue-400 absolute -mt-24 ml-20 bg-blue-400 ${showTimer4 ? '' : 'hidden'}`}>
                    <div className="flex items-center justify-center text-white">
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
               <NftDetails title="Token Hero" likes="88" priceInEth="0.005" priceInDoller="16.69" bids='14'/>
          </div>
      </div>
      </div>
    </div>
  );
}
export default LiveAuctions;