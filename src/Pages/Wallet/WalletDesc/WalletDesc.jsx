import React from 'react';
import ScanWallet from '../ScanWallet/ScanWallet';
const WalletDesc = (props) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const handleClose = () => {
    setIsOpen(false);
  }
  return(
    <div className="flex w-5/6 bg-gradient-to-r from-pink-100 to-blue-100 rounded-lg items-center mt-10">
    <div className="w-24 h-24 m-5 rounded-lg">
      <img className="rounded-lg" src={props.imgUrl} style={{width: '100%', height: '100%'}}/>
    </div>
    <div className="w-5/6 my-5">
       <div className="flex flex-col lg:flex-row w-full items-center h-full">
         <div className="w-full lg:w-5/6">
            <h1 className="text-left text-2xl font-semibold">{props.title}</h1>
            <p className="text-left pr-2">{props.description}</p>
         </div>
         <div className="w-full lg:w-1/6 flex items-start lg:items-center justify-start lg:justify-end mt-2 lg:mt-0 lg:ml-10">
         <button
        className='rounded-lg h-14 w-40 font-semibold px-2 font-body py-2 text-lg text-white bg-white bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-purple-500 hover:to-indigo-500 mr-1'
        onClick={() => setIsOpen(true)}
      >
       <span className='flex items-center justify-center'>
              {' '}
              Connect
              <div className='w-5 mt-1 h-3 ml-2'>
                <img
                  src="https://html-tokenmart.netlify.app/light/assets/images/check-white-icon.svg"
                  style={{ width: '100%', height: '100%' }}
                />
              </div>
            </span>
      </button>
         </div>
       </div>
    </div>
    {isOpen ? <ScanWallet handleClose={handleClose}/>: null}
  </div>
    )
}
export default WalletDesc;