import NftView from 'components/NftView/NftView';
import {nftCollectionData} from '../../../assets/Data.js'
import React from 'react';
const NftCollection = () => {
  return (
    <div className="flex flex-col items-center">
    <div style={{maxWidth: '1700px'}}>
      <h1 className="text-4xl text-left 2xl:text-center font-bold mt-24 ml-10 sm:ml-20 2xl:ml-0">NftCollection</h1>
      <div className="flex items-center justify-center mb-10" >
      <div className="flex items-center justify-center" style={{width:'95%'}} >
      <div className="flex flex-wrap items-center justify-center w-full 2xl:w-4/5">
      {nftCollectionData.map((i)=>{
        return(
          <NftView link={i.nftUrl}/>
          )
      })}

      </div>
      </div>
    </div>
    </div>
     </div>
  );
}
export default NftCollection;