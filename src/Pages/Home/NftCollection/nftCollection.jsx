import NftView from 'components/NftView/NftView';
import {nftCollectionData} from '../../../assets/Data.js'
import React from 'react';
const NftCollection = () => {
  return (
    <div>
      <h1 className="text-4xl text-left font-bold mt-24 ml-10 sm:ml-20">NftCollection</h1>
      <div className="flex items-center justify-center mb-10">
      <div className="flex flex-wrap items-center justify-center" style={{width: '95%'}}>
      {nftCollectionData.map((i)=>{
        return(
          <NftView link={i.nftUrl}/>
          )
      })}

      </div>
      </div>
    </div>
  );
}
export default NftCollection;