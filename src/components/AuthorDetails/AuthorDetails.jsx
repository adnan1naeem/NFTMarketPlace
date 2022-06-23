import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { sellerLeaderboardData } from "assets/Data";
import { AuthorsData } from "assets/Data";
const AuthorDetails = () => {
  const [name, setName] = useState();
  const [pic, setPic] = useState();
  const [level, setLevel] = useState();
  const [items, setItems] = useState();
  const { id } = useParams();
  const findAuthorDetails = () => {
    for (let i = 0; i < AuthorsData.length; i++) {
      if (AuthorsData[i]?.id == id) {
        setName(AuthorsData[i].name);
        setPic(AuthorsData[i].img);
        setLevel(AuthorsData[i].level);
        setItems(AuthorsData[i].items);
      }
    }
  };
  useEffect(() => {
    findAuthorDetails();
  }, []);
  return (
    <div className="mt-20 md:mt-40">
      <div className="flex flex-col justify-center items-center">
        <div className="w-36 h-36 rounded-full bg-gray-300">
          <img
            className="rounded-full object-cover"
            style={{ width: "100%", height: "100%" }}
            src={pic}
          />
        </div>
        <div className="w-7 h-7 rounded-full absolute ml-28 mt-20">
          <img
            className="rounded-full object-cover"
            style={{ width: "100%", height: "100%" }}
            src="https://html-tokenmart.netlify.app/light/assets/images/verified-icon.svg"
          />
        </div>
      </div>
      <div>
        <h1
          className="text-2xl lg:text-4xl mt-5 font-semibold"
          style={{ fontFamily: "Manrope" }}
        >
          {name}
        </h1>
        <span className="flex items-center justify-center mt-3">
          <div className="w-4 mr-1 h-4 mt-1">
            <img
              className=""
              style={{ width: "100%", height: "100%" }}
              src="https://html-tokenmart.netlify.app/light/assets/images/diamond-icon.svg"
            />
          </div>
          <p className="text-lg text-gray-600"> Diamond Seller</p>
        </span>
        <p className="px-10 md:px-40 lg:px-60 pt-5 text-gray-600 lg:text-lg">
          We create high quality, seo friendly and fast loading ghost themes in
          affordable price. Buy ghost theme from us and get 24/7 free customer
          support
        </p>
      </div>
      <div className="flex justify-center">
        <div className="flex justify-center">
          <span className="w-7 h-7 bg-blue-100 rounded-full mt-5 flex items-center justify-center">
            <img
              className=""
              src="https://html-tokenmart.netlify.app/light/assets/images/level-icon.svg"
            />
          </span>
          <span className="mt-5 ml-2 font-semibold">Level {level}s</span>
        </div>
        <div className="flex justify-center">
          <span className="w-7 h-7 bg-blue-100 rounded-full mt-5 ml-7 flex items-center justify-center">
            <img
              className=""
              src="https://html-tokenmart.netlify.app/light/assets/images/heart-icon2.svg"
            />
          </span>
          <span className="mt-5 ml-2 font-semibold">90 Likes</span>
        </div>
        <div className="flex justify-center">
          <span className="w-7 h-7 bg-blue-100 rounded-full mt-5 ml-7 flex items-center justify-center">
            <img
              className=""
              src="https://html-tokenmart.netlify.app/light/assets/images/item-icon.svg"
            />
          </span>
          <span className="mt-5 ml-2 font-semibold">{items} Items</span>
        </div>
      </div>

      <div className="mt-7">
        <button className="rounded-lg h-10 w-44 font-semibold px-2 font-body py-1 text-lg text-white bg-white bg-blue-100 hover:bg-blue-200 mr-1">
          <span className="flex items-center justify-center text-gray-700">
            {" "}
            <div className="w-4 h-4 mr-2">
              <img
                src="https://html-tokenmart.netlify.app/light/assets/images/comment-icon.svg"
                style={{ width: "100%", height: "100%" }}
              />
            </div>
            Send Message
          </span>
        </button>
        <button className="rounded-lg h-10 w-44 font-semibold px-2 font-body py-1 text-lg text-white bg-white bg-blue-100 hover:bg-blue-200 mr-1 ml-5">
          <span className="flex items-center justify-center text-gray-700">
            {" "}
            <div className="w-4 h-4 mr-2">
              <img
                src="https://html-tokenmart.netlify.app/light/assets/images/author-icon.svg"
                style={{ width: "100%", height: "100%" }}
              />
            </div>
            Follow
          </span>
        </button>
      </div>
    </div>
  );
};
export default AuthorDetails;
