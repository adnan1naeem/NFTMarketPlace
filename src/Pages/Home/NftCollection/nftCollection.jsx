import NftView from 'components/NftView/NftView'
import { nftCollectionData } from '../../../assets/Data.js'
import React, { useState, useEffect } from 'react'
import Web3Utils from 'web3-utils'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import NftName from 'components/NftName/NftName.jsx'
import {
  SALE_CONTRACT_ABI,
  SALE_CONTRACT_ADDRESS,
} from '../../../Contract/nftCollectionContract.js'
import { ethers } from 'ethers'
const NftCollection = () => {
  const [showTimer, setShowTimer] = useState(0)
  const connection = useSelector((state) => state.connection)
  const [contractNftData, setContractNftData] = useState([])
  const handleHover = (id) => {
    setShowTimer(id)
  }
  const handleHoverOut = (id) => {
    setShowTimer(0)
  }

  const getNfts = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum)
    const signer = provider.getSigner()
    const contract = new ethers.Contract(
      SALE_CONTRACT_ADDRESS,
      SALE_CONTRACT_ABI,
      signer
    )
    let arr = []
    try {
      const size = await contract.getCollectionSize()
      const sizeInNumber = Web3Utils.hexToNumber(size)
      for (let i = 1; i <= sizeInNumber; i++) {
        const details = await contract.getNftInfo(i)
        if (details) {
          arr = [
            ...arr,
            { id: i, items: details[0], nftUrl: details[1], title: details[2] },
          ]
        }
      }
    } catch {
      alert('Transaction failed')
    }

    setContractNftData(arr)
  }

  useEffect(() => {
    if (connection) {
      getNfts()
    }
  }, [connection])

  return (
    <div className='flex flex-col items-center'>
      <div style={{ maxWidth: '1700px' }}>
        {contractNftData.length > 0 ? (
          <div className='flex items-center justify-between 2xl:justify-center w-full'>
            <h1 className='text-4xl text-left 2xl:text-center font-bold mt-24 ml-10 sm:ml-20 2xl:ml-0'>
              NftCollection
            </h1>
            <NavLink to='/explore'>
              <button className='mt-24 mr-10 bg-blue-300 rounded-lg hover:bg-blue-400 px-3 py-2 sm:mr-20 hidden sm:flex 2xl:hidden '>
                <span className='flex items-center justify-center text-white'>
                  {' '}
                  See All
                  <div className='w-5 mt-1 h-3 ml-2'>
                    <img
                      src='https://html-tokenmart.netlify.app/light/assets/images/check-white-icon.svg'
                      style={{ width: '100%', height: '100%' }}
                      alt=''
                    />
                  </div>
                </span>
              </button>
            </NavLink>
          </div>
        ) : (
          ''
        )}
        <div className='flex items-center justify-center mb-10'>
          <div
            className='flex items-center justify-center'
            style={{ width: '95%' }}
          >
            <div className='flex flex-wrap items-center justify-center w-full 2xl:w-4/5'>
              {contractNftData.map((i) => {
                return (
                  <div
                    onMouseOver={() => handleHover(i.id)}
                    onMouseOut={() => handleHoverOut(i.id)}
                  >
                    <NftView link={i.nftUrl} />
                    <div
                      className={`w-44 h-20 rounded-lg border-blue-400 absolute -mt-24 ml-14 bg-white ${
                        showTimer == i.id ? '' : 'hidden'
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
