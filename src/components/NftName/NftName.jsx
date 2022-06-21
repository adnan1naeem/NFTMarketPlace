
import React from 'react';
const NftName = (props) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-lg font-semibold mt-2">{props.title}</h1>
      <h1>{props.totalItems}</h1>
    </div>
    
  );
}
export default NftName;



