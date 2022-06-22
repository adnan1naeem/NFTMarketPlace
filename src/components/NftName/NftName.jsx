import React from 'react';
import { NavLink } from "react-router-dom";
const NftName = (props) => {
  return (
    <div className="flex flex-col items-center justify-center">
     <NavLink to="/explore"><h1 className="text-lg font-semibold mt-2 hover:text-indigo-600">{props.title}</h1></NavLink>
      <h1>{props.totalItems}</h1>
    </div>
    
  );
}
export default NftName;



