import React from 'react';
import './nftView.css';
const NftView = (props) => {
  return (
    <div className="w-60 mt-10 ml-5 mr-5 h-60 bg-red-300 flex items-center rounded-lg">
          <img className="rounded-lg zoom" src={props.link}  style={{width: '100%', height: '100%'}}/>
          </div>
  );
}
export default NftView;