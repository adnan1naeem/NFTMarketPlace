import NftView from 'components/NftView/NftView';
import React from 'react';
const NftCollection = () => {
  return (
    <div>
      <h1 className="text-4xl text-left font-bold mt-24 ml-10 sm:ml-20">NftCollection</h1>
      <div className="flex items-center justify-center mb-10">
      <div className="flex flex-wrap items-center justify-center" style={{width: '95%'}}>
          <NftView link="https://html-tokenmart.netlify.app/light/assets/images/product/7.gif"/>
          <NftView link="https://html-tokenmart.netlify.app/light/assets/images/category/2.jpg"/>
          <NftView link="https://html-tokenmart.netlify.app/light/assets/images/category/3.jpg"/>
          <NftView link="https://html-tokenmart.netlify.app/light/assets/images/category/4.jpg"/>
          <NftView link="https://html-tokenmart.netlify.app/light/assets/images/category/5.jpg"/>
          <NftView link="https://html-tokenmart.netlify.app/light/assets/images/category/6.jpg"/>
          <NftView link="https://html-tokenmart.netlify.app/light/assets/images/category/7.jpg"/>
          <NftView link="https://html-tokenmart.netlify.app/light/assets/images/category/8.jpg"/>
      </div>
      </div>
    </div>
  );
}
export default NftCollection;