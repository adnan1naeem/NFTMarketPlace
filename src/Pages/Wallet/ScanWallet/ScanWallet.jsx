import React from 'react';
import Model from 'components/Model/Model';
const WalletDesc = (props) => {
  return(
    <Model handleClose={props.handleClose}>
    <div className="flex flex-col w-full rounded-lg items-center justify-center h-full">
    <h1 className="text-3xl font-semibold py-1">Connect Wallet</h1>
    <h1>Scan or Code</h1>
    <div className="h-80 w-80 bg-green-300">
       <img src="https://html-tokenmart.netlify.app/light/assets/images/QR-code-Transparent.jpg" style={{width: "100%", height: "100%"}}/>
    </div>
    <button
              className='rounded-lg h-14 w-5/6 font-semibold px-5 font-body py-2 text-lg mb-2 mt-3 text-white bg-white bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-purple-500 hover:to-indigo-500'
            >
              Download
            </button>

  </div>
  </Model>
    )
}
export default WalletDesc;