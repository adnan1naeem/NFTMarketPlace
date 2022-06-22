import React from 'react';
import { NavLink } from "react-router-dom";
const Header = () => {

  return (
    <div className="flex flex-col items-center">
    <div className="bg-gradient-to-r from-pink-100 to-purple-100" style={{
      backgroundImage: `url("https://d33wubrfki0l68.cloudfront.net/1de964620f08bbadd8570abd31c23463be7268ed/602f3/light/assets/images/bg-animation.svg") `,
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      maxWidth:'1900px'
    }}>
       <div className=" w-full">
       <h1 className="text-xl lg:text-5xl font-semibold px-20 lg:px-40  xl:px-60 lg:pt-20 pt-10 lg:pt-40 leading-10">Largest online marketplace to buy sell NFT items</h1>
       <h1 className="text-base lg:text-xl px-20 lg:px-40 xl:px-60 mt-7 lg:mt-12">Join the world's biggest NFT marketplace and discover truely rare digital artwork, sound, videos etc</h1>
       <div className="mt-10 lg:mt-20 pb-10 lg:pb-20 flex flex-col md:flex-row items-center w-full justify-center">
      <NavLink to="/explore"> <button
              className='rounded-lg h-14 w-44 font-semibold px-5 font-body py-2 text-lg md:mb-10 text-white md:mr-5 bg-white bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-purple-500 hover:to-indigo-500'
            >
              Explore Now
            </button></NavLink>
            <NavLink to="/createitem">  <button
              className='rounded-lg h-14 w-44 mt-2 md:mt-0 font-semibold px-5 font-body py-2 text-lg md:mb-10 md:ml-2 text-white bg-black  hover:bg-indigo-500'
            >
              Create Product
            </button></NavLink>
       </div>
       </div>
    </div>
     </div>
  );
}
export default Header;
