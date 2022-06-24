import React from 'react'
import './social.css'
import {
  GrFacebookOption,
  GrTwitter,
  AiOutlineInstagram,
} from 'react-icons/all'
const SocialMedia = () => {
  const goToLink = (link) => {
    window.open(link, '_blank')?.focus()
  }
  return (
    <div className='w-full mt-10 border-t-2 border-b-2 flex flex-col md:flex-row border-gray-400  items-center justify-between'>
      <div className='flex items-center w-full md:w-2/3 flex-wrap'>
        <h1 className='font-semibold'>Tags:</h1>
        <button className='rounded-lg h-10 w-20 font-semibold px-5 font-body py-2 text-sm text-white  bg-white bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-purple-500 hover:to-indigo-500 m-3'>
          Auction
        </button>

        <button className='rounded-lg h-10 w-20 font-semibold px-5 font-body py-2 text-sm text-white  bg-white bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-purple-500 hover:to-indigo-500 m-3'>
          Creator
        </button>

        <button className='rounded-lg h-10 w-28 font-semibold px-5 font-body py-2 text-sm text-white  bg-white bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-purple-500 hover:to-indigo-500 m-3'>
          Marketplace
        </button>
      </div>
      <div className='flex items-center md:justify-center w-full md:w-1/3 flex-wrap'>
        <div
          className='w-10 h-10 mx-3 rounded-full bg-gray-300 flex items-center justify-center hover:bg-indigo-500 social'
          onClick={() => goToLink('https://twitter.com')}
        >
          <GrTwitter className={`cursor-pointer `} />
        </div>
        <div
          className='w-10 h-10 mx-3 rounded-full bg-gray-300 flex items-center justify-center hover:bg-indigo-500 social'
          onClick={() => goToLink('https://facebook.com')}
        >
          <GrFacebookOption className={`cursor-pointer `} />
        </div>
        <div
          className='w-10 h-10 mx-3 rounded-full bg-gray-300 flex items-center justify-center hover:bg-indigo-500 social'
          onClick={() => goToLink('https://instagram.com')}
        >
          <AiOutlineInstagram className={`cursor-pointer `} />
        </div>
      </div>
    </div>
  )
}
export default SocialMedia
