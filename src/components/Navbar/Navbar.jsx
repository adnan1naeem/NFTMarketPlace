import React, { useState, useEffect } from 'react'
import { NavLink, useLocation, useNavigate } from 'react-router-dom'
import { images } from 'assets/Images'
import { useDispatch, useSelector } from 'react-redux'
import {
  connectMetaMask,
  checkAlreadyConnectedMetaMask,
} from 'redux/thunk/thunk'
const Navbar = ({ screen }) => {
  // const {props:any}= props`
  const dispatch = useDispatch()
  const location = useLocation()
  const state = useSelector((state) => state)
  const [hidden, setHidden] = useState(true)
  const [showExploreMenu, setShowExploreMenu] = useState(false)
  const [showPageMenu, setShowPageMenu] = useState(false)
  const [showSubAuthorMenu, setShowSubAuthorMenu] = useState(false)
  const [showSubUserMenu, setShowSubUserMenu] = useState(false)
  const [showSubBlogMenu, setShowSubBlogMenu] = useState(false)
  const [scroll, setScroll] = useState(false)
  const openMobileNav = () => {
    setHidden(!hidden)
  }
  const handleExploreHover = () => {
    setShowExploreMenu(!showExploreMenu)
  }
  const handlePageHover = () => {
    setShowPageMenu(!showPageMenu)
  }
  const handleSubAuthorHover = () => {
    setShowSubAuthorMenu(!showSubAuthorMenu)
  }
  const handleSubUserHover = () => {
    setShowSubUserMenu(!showSubUserMenu)
  }
  const handleSubBlogHover = () => {
    setShowSubBlogMenu(!showSubBlogMenu)
  }
  const connectToMetaMask = () => {
    dispatch(connectMetaMask())
  }

  useEffect(() => {
    console.log(
      'connection is :',
      state?.connection,
      ' and balance is ',
      state?.userBalance,
      ' wallet  address is ',
      state?.address
    )
    window.addEventListener('scroll', listenToScroll)
    const interval = setInterval(() => {
      dispatch(checkAlreadyConnectedMetaMask(state?.connection))
    }, 3000)

    return () => {
      clearInterval(interval)
    }
  }, [])
  const listenToScroll = () => {
    let i = 0

    if (window.pageYOffset > 118) {
      i = i + 1
      if (i === 1) {
        setScroll(true)
      }
    } else {
      setScroll(false)
    }
  }

  return (
    <div className='lg:flex lg:justify-center w-full'>
      <nav
        className={` 
         px-5
     flex items-center justify-between lg:justify-start  flex-wrap py-5 md:py-2 z-40 lg:fixed text-white lg:h-20 ${
       scroll ? 'bg-white' : 'bg-transparent'
     }`}
        style={{ maxWidth: '1900px' }}
      >
        {' '}
        <div className='flex flex-shrink-0 w-32 sm:w-48 lg:-mt-20 lg:-ml-2 xl:ml-16'>
          <NavLink to='/'>
            <img
              src='https://d33wubrfki0l68.cloudfront.net/0fcd3a5de968db4747c50586a61bcc126b4890fd/3ca91/assets/images/header-logo.svg'
              alt='website logo'
            />
          </NavLink>
        </div>
        <div className='z-20 block lg:hidden' onClick={openMobileNav}>
          <button className='flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400   hover:border-white '>
            <svg
              className='fill-current h-6 w-6 text-black'
              viewBox='0 0 20 20'
              xmlns='http://www.w3.org/2000/svg'
            >
              <title>Menu</title>
              <path d='M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z' />
            </svg>
          </button>
        </div>
        <div
          className={` ${
            hidden ? 'hidden' : ''
          }  w-full block text-center flex-grow-0 lg:flex lg:items-center lg:w-auto z-20 `}
        >
          <div className=' w-full top-0 left-0 text-lg lg:flex-grow z-40 absolute lg:static bg-white lg:bg-transparent py-10'>
            <img
              src={images.cross}
              width='25px'
              alt=''
              className='absolute top-1 right-1 z-40 lg:hidden'
              onClick={openMobileNav}
            />
            <div className='lg:-mt-7 text-black lg:flex'>
              <div className='flex flex-col lg:flex-row items-center lg:items-start lg:mt-1 justify-center'>
                <NavLink
                  to='/'
                  className={`m-2 block mr-2 xl:mr-4 2xl:mr-9 xl:ml-20 lg:inline-block lg:mt-0 font-body text-base 
          
            `}
                >
                  <span className='flex'>
                    {' '}
                    Home
                    <div className='w-3 h-3 mt-2 ml-2'>
                      <img
                        src={images.arrow}
                        style={{ width: '100%', height: '100%' }}
                      />
                    </div>
                  </span>
                </NavLink>
                <NavLink
                  to=''
                  onMouseOver={handleExploreHover}
                  onMouseOut={handleExploreHover}
                  className={`m-2 mr-2 xl:mr-4 2xl:mr-9 block mt-4 lg:inline-block lg:mt-0 font-body text-base
             
            `}
                >
                  <span className='flex'>
                    {' '}
                    Explore
                    <div className='w-3 h-3 mt-2 ml-2'>
                      <img
                        src={images.arrow}
                        style={{ width: '100%', height: '100%' }}
                      />
                    </div>
                  </span>
                  <div
                    className={`w-32 h-32 bg-white shadow shadow-xl absolute ${
                      showExploreMenu ? 'lg:flex lg:flex-col' : 'hidden'
                    }`}
                  >
                    <div className='w-full h-12 hover:bg-blue-200 flex items-center justify-start pl-2'>
                      <NavLink to='/explore'>
                        {' '}
                        <h1 className='pt-2'>Explore</h1>
                      </NavLink>
                    </div>
                    <div className='w-full h-10 hover:bg-blue-200 flex items-center justify-start pl-2'>
                      <NavLink to={`/exploreitem/${1}`}>
                        <h1 className=''>Item Details</h1>
                      </NavLink>
                    </div>
                    <div className='w-full h-10 hover:bg-blue-200 flex items-center justify-start pl-2'>
                      <NavLink to='/wallet'>
                        {' '}
                        <h1 className=''>Wallet</h1>
                      </NavLink>
                    </div>
                  </div>
                </NavLink>
                <NavLink
                  to=''
                  onMouseOver={handlePageHover}
                  onMouseOut={handlePageHover}
                  className={`m-2 mr-2 xl:mr-4 2xl:mr-9 block mt-4 lg:inline-block lg:mt-0 font-body text-base
            
            `}
                >
                  <span className='flex'>
                    {' '}
                    Pages
                    <div className='w-3 h-3 mt-2 ml-2'>
                      <img
                        src={images.arrow}
                        style={{ width: '100%', height: '100%' }}
                      />
                    </div>
                  </span>
                  <div
                    //h-72 is original but h-24 is temp
                    className={`w-40 h-44 bg-white shadow shadow-xl absolute ${
                      showPageMenu ? 'lg:flex lg:flex-col' : 'hidden'
                    }`}
                  >
                    <div className='w-full h-12 hover:bg-blue-200 flex items-center justify-start pl-2'>
                      <NavLink to='/createitem'>
                        <h1 className='pt-2'>Create Item</h1>
                      </NavLink>
                    </div>
                    <div
                      //h-10 is original but h-12 is temp
                      className='w-full h-10 hover:bg-blue-200 flex items-center justify-start pl-2'
                      onMouseOver={handleSubAuthorHover}
                      onMouseOut={handleSubAuthorHover}
                    >
                      <span className='flex justify-between items-start'>
                        {' '}
                        <h1>Authors</h1>
                        <div
                          className='w-3 h-3 mt-2'
                          style={{ marginLeft: '72px' }}
                        >
                          <img
                            src={images.rightArrow}
                            style={{ width: '100%', height: '100%' }}
                          />
                        </div>
                      </span>
                      <div
                        className={`w-36 h-32 bg-white shadow shadow-4xl absolute z-20 mt-24 ${
                          showSubAuthorMenu ? 'lg:flex lg:flex-col' : 'hidden'
                        }`}
                        style={{ marginLeft: '152px' }}
                      >
                        <div className='w-full h-12 hover:bg-blue-200 flex items-center justify-start pl-2'>
                          <NavLink to={`/authors/${1}`}>
                            {' '}
                            <h1 className='pt-2'>Authors</h1>
                          </NavLink>
                        </div>
                        <div className='w-full h-10 hover:bg-blue-200 flex items-center justify-start pl-2'>
                          <NavLink to={`/authorsprofiles/${1}`}>
                            {' '}
                            <h1 className=''>Authors Profiles</h1>
                          </NavLink>
                        </div>
                        <div className='w-full h-10 hover:bg-blue-200 flex items-center justify-start pl-2'>
                          <NavLink to={`/authoractivity/${1}`}>
                            {' '}
                            <h1 className=''>Authors Activity</h1>
                          </NavLink>
                        </div>
                      </div>
                    </div>

                    <div
                      className='w-full h-10 hover:bg-blue-200 flex items-center justify-start pl-2'
                      onMouseOver={handleSubUserHover}
                      onMouseOut={handleSubUserHover}
                    >
                      <span className='flex justify-between items-start'>
                        {' '}
                        <h1>User</h1>
                        <div className='w-3 h-3 mt-2 ml-24'>
                          <img
                            src={images.rightArrow}
                            style={{ width: '100%', height: '100%' }}
                          />
                        </div>
                      </span>
                      <div
                        className={`w-36 h-32 bg-white shadow shadow-4xl absolute z-20 mt-24 ${
                          showSubUserMenu ? 'lg:flex lg:flex-col' : 'hidden'
                        }`}
                        style={{ marginLeft: '152px' }}
                      >
                        <div className='w-full h-12 hover:bg-blue-200 flex items-center justify-start pl-2'>
                          <NavLink to='/login'>
                            <h1 className='pt-2'>Login</h1>
                          </NavLink>
                        </div>
                        <div className='w-full h-10 hover:bg-blue-200 flex items-center justify-start pl-2'>
                          <NavLink to='/register'>
                            <h1 className=''>Register</h1>
                          </NavLink>
                        </div>
                        <div className='w-full h-10 hover:bg-blue-200 flex items-center justify-start pl-2'>
                          <NavLink to='/forgotpassword'>
                            <h1 className=''>Forget Password</h1>
                          </NavLink>
                        </div>
                      </div>
                    </div>

                    <div
                      className='w-full h-10 hover:bg-blue-200 flex items-center justify-start pl-2'
                      onMouseOver={handleSubBlogHover}
                      onMouseOut={handleSubBlogHover}
                    >
                      <span className='flex justify-between items-start'>
                        {' '}
                        <h1>Blog</h1>
                        <div className='w-3 h-3 mt-2 ml-24'>
                          <img
                            src={images.rightArrow}
                            style={{ width: '100%', height: '100%' }}
                          />
                        </div>
                      </span>
                      <div
                        className={`w-36 h-40 bg-white shadow shadow-4xl absolute z-20 mt-24 ${
                          showSubBlogMenu ? 'lg:flex lg:flex-col' : 'hidden'
                        }`}
                        style={{ marginLeft: '152px' }}
                      >
                        <div className='w-full h-12 hover:bg-blue-200 flex items-center justify-start pl-2'>
                          <NavLink to='/blogdetails'>
                            {' '}
                            <h1 className='pt-2'>Blog Details</h1>{' '}
                          </NavLink>
                        </div>
                        <div className='w-full h-10 hover:bg-blue-200 flex items-center justify-start pl-2'>
                          <h1 className=''>Category</h1>
                        </div>
                        <div className='w-full h-10 hover:bg-blue-200 flex items-center justify-start pl-2'>
                          <h1 className=''>Tag</h1>
                        </div>
                        <div className='w-full h-10 hover:bg-blue-200 flex items-center justify-start pl-2'>
                          <h1 className=''>Blog Grid</h1>
                        </div>
                      </div>
                    </div>

                    {/* these following four closing tags are to be removed before uncomment below content */}
                  </div>
                </NavLink>
              </div>

              {/* {/*
                    
                    <div className="w-full h-10 hover:bg-blue-200 flex items-center justify-start pl-2">
                      <h1 className="">Contact</h1>
                    </div>
                    <div className="w-full h-10 hover:bg-blue-200 flex items-center justify-start pl-2">
                      <h1 className="">Term & Condition</h1>
                    </div>
                    <div className="w-full h-10 hover:bg-blue-200 flex items-center justify-start pl-2">
                      <h1 className="">404</h1>
                    </div>
                  </div>
                </NavLink>

                <NavLink
                  to=""
                  className={`m-2 mr-2 xl:mr-6 2xl:mr-11 block mt-4 lg:inline-block lg:mt-0 font-body text-base
      
            `}
                >
                  <span className="flex">
                    {" "}
                    Activity
                    <div className="w-3 h-3 mt-2 ml-2">
                      <img
                        src={images.arrow}
                        style={{ width: "100%", height: "100%" }}
                      />
                    </div>
                  </span> 
                </NavLink>
              </div>*/}
              <div className='w-60 h-12 shadow bg-white shadow-lg -mt-1 lg:ml-10 hidden lg:flex items-center justify-center rounded-lg'>
                <div className='w-5 h-5'>
                  <img
                    src={images.search}
                    style={{ width: '100%', height: '100%' }}
                  />
                </div>
                <div>
                  <input
                    type='text'
                    placeholder='Search items'
                    className='w-40 h-7 focus:outline-none ml-2 '
                  />
                </div>
              </div>

              <button
                className='rounded h-12 -mt-1 font-semibold px-3 font-body py-2 text-lg md:mb-10 ml-2 text-white lg:mr-0 xl:mr-20 bg-white bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-purple-500 hover:to-indigo-500'
                onClick={connectToMetaMask}
                disabled={state?.connection}
              >
                {!state?.connection ? (
                  <>Connect Wallet</>
                ) : (
                  <span className=''>
                    {' '}
                    {state?.address[0]?.substr(0, 7)}...{' '}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
