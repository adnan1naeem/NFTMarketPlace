
import React from 'react';
const NftDetails = (props) => {
  return (
    <div>
     <div className="h-60 w-60 ml-5 mr-5">
               <div className="flex justify-start items-center">
                <h1 className="text-lg font-semibold pt-5">{props.title}</h1>
               <span className="w-7 h-7 bg-blue-100 rounded-full mt-5 ml-7 flex items-center justify-center"><img className="" src="https://html-tokenmart.netlify.app/light/assets/images/heart-icon2.svg"/></span><span className='mt-5 ml-2 font-semibold'>{props.likes}</span>
                </div>
                <div className="flex">
                  <div className="w-10 h-10 bg-gray-400 rounded-full mt-3 ml-3">
                  <img className="rounded-full" style={{width: '100%', height: '100%'}} src="https://html-tokenmart.netlify.app/light/assets/images/author/1.jpg" />
                  </div>
                  
                  <div className="w-10 h-10 bg-gray-700 border border-l-2 rounded-full mt-3 -ml-5">
                  <img className="rounded-full" style={{width: '100%', height: '100%'}} src="https://html-tokenmart.netlify.app/light/assets/images/author/3.jpg" />
                  </div>
                </div>
                <div className="flex">
                <div className="mt-20 w-2/5 h-20 flex flex-col items-start justify-start">
                  <h1 className="ml-2">Current Bid</h1>
                  <h1 className="ml-2 font-semibold">{props.priceInEth} ETH</h1>
                  <h1 className="ml-2">=${props.priceInDoller}</h1>
                </div>
                <div className="mt-20 w-1/2">
                    <div className="w-full h-10 border-4 rounded-lg border-blue-400 hover:bg-blue-400 text-blue-400 hover:text-white">
                    <h1 className="">Place a bid</h1>
                    </div>
                    <h1 className="text-xs">{props.bids} bids total</h1>
                </div>
                </div>
               </div>
    </div>
  );
}
export default NftDetails;