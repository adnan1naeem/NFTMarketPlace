import NftView from 'components/NftView/NftView';
import {nftCollectionData} from '../../../assets/Data.js'
import React,{useState} from 'react';
import NftName from 'components/NftName/NftName.jsx';
const NftCollection = () => {
  const [showTimer, setShowTimer] = useState(0);
  const handleHover =(id)=>{
      setShowTimer(id);
  }
  const handleHoverOut =(id)=>{
    setShowTimer(0);
}
  return (
    <div className="flex flex-col items-center">
    <div style={{maxWidth: '1700px'}}>
      <h1 className="text-4xl text-left 2xl:text-center font-bold mt-24 ml-10 sm:ml-20 2xl:ml-0">NftCollection</h1>
      <div className="flex items-center justify-center mb-10" >
      <div className="flex items-center justify-center" style={{width:'95%'}} >
      <div className="flex flex-wrap items-center justify-center w-full 2xl:w-4/5">
      {nftCollectionData.map((i)=>{
        return(
          <div onMouseOver={()=>handleHover(i.id)} onMouseOut={()=>handleHoverOut(i.id)}>
          <NftView link={i.nftUrl}/>
          <div className={`w-44 h-20 rounded-lg border-blue-400 absolute -mt-24 ml-14 bg-white ${showTimer === i.id ? '' : 'hidden'}`}>
                    <NftName title={i.title} totalItems={i.items}/>
              </div>
              </div>
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