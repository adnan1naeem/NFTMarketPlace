import NftView from 'components/NftView/NftView'
import { nftCollectionData } from '../../../assets/Data.js'
import React, { useState } from 'react'
import { NavLink} from "react-router-dom";
import NftName from 'components/NftName/NftName.jsx'
const NftCollection = () => {
  const [showTimer, setShowTimer] = useState(0)
  const handleHover = (id) => {
    setShowTimer(id)
  }
  const handleHoverOut = (id) => {
    setShowTimer(0)
  }
  return (
    <div className='flex flex-col items-center'>
      <div style={{ maxWidth: '1700px' }}>
        <div className='flex items-center justify-between 2xl:justify-center w-full'>
          <h1 className='text-4xl text-left 2xl:text-center font-bold mt-24 ml-10 sm:ml-20 2xl:ml-0'>
            NftCollection
          </h1>
          <NavLink to="/explore"><button className='mt-24 mr-10 bg-blue-300 rounded-lg hover:bg-blue-400 px-3 py-2 sm:mr-20 hidden sm:flex 2xl:hidden '>
          <span className='flex items-center justify-center text-white'>
              {' '}
              See All
              <div className='w-5 mt-1 h-3 ml-2'>
                <img
                  src="https://html-tokenmart.netlify.app/light/assets/images/check-white-icon.svg"
                  style={{ width: '100%', height: '100%' }}
                />
              </div>
            </span>
          </button></NavLink>
        </div>
        <div className='flex items-center justify-center mb-10'>
          <div
            className='flex items-center justify-center'
            style={{ width: '95%' }}
          >
            <div className='flex flex-wrap items-center justify-center w-full 2xl:w-4/5'>
              {nftCollectionData.map((i) => {
                return (
                  <div
                    onMouseOver={() => handleHover(i.id)}
                    onMouseOut={() => handleHoverOut(i.id)}
                  >
                    <NftView link={i.nftUrl} />
                    <div
                      className={`w-44 h-20 rounded-lg border-blue-400 absolute -mt-24 ml-14 bg-white ${
                        showTimer === i.id ? '' : 'hidden'
                      }`}
                    >
                      <NftName title={i.title} totalItems={i.items} />
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default NftCollection
