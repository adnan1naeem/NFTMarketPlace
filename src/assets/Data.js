import Honouring from "./Images/Home/Honouring.jpg";
import Mindfullness from "./Images/Home/Mindfullness.jpg";
import joana from "./Images/Seller LeaderBoard/joana.jpg";
import steven from "./Images/Seller LeaderBoard/steven.jpg";
import leah from "./Images/Seller LeaderBoard/leah.jpg";
import melanie from "./Images/Seller LeaderBoard/melanie.jpg";
import trinity from "./Images/Seller LeaderBoard/trinity.jpg";
import item1 from "./Images/Seller LeaderBoard/1.gif";
import item2 from "./Images/Seller LeaderBoard/2.jpg";
import item3 from "./Images/Seller LeaderBoard/3.jpg";
import item4 from "./Images/Seller LeaderBoard/4.jpg";
import item5 from "./Images/Seller LeaderBoard/5.jpg";
import explore2 from "./Images/4.gif";
import explore5 from "./Images/explore/5.gif";
import explore6 from "./Images/explore/6.gif";
import explore7 from "./Images/explore/7.gif";
import explore3 from "./Images/explore/20.jpg";
import explore4 from "./Images/explore/21.jpg";

import Save from "./Images/Home/Save.jpg";
export const nftCollectionData = [
  { id: 1, nftUrl: "https://html-tokenmart.netlify.app/light/assets/images/product/7.gif" },
  { id: 2, nftUrl: "https://html-tokenmart.netlify.app/light/assets/images/category/2.jpg" },
  { id: 3, nftUrl: "https://html-tokenmart.netlify.app/light/assets/images/category/3.jpg" },
  { id: 4, nftUrl: "https://html-tokenmart.netlify.app/light/assets/images/category/4.jpg" },
  { id: 5, nftUrl: "https://html-tokenmart.netlify.app/light/assets/images/category/5.jpg" },
  { id: 6, nftUrl: "https://html-tokenmart.netlify.app/light/assets/images/category/6.jpg" },
  { id: 7, nftUrl: "https://html-tokenmart.netlify.app/light/assets/images/category/7.jpg" },
  { id: 8, nftUrl: "https://html-tokenmart.netlify.app/light/assets/images/category/8.jpg" }
];
export const nftAuctionData = [
  { id: 1, nftUrl: "https://html-tokenmart.netlify.app/light/assets/images/product/28.jpg", title: "Creative Artwork", likes: "88", priceInEth: "0.008", priceInDoller: "26.69", bids: "12" },
  { id: 2, nftUrl: "https://html-tokenmart.netlify.app/light/assets/images/product/1.gif", title: "Pumpkin Month", likes: "10", priceInEth: "0.003", priceInDoller: "13.69", bids: "10" },
  { id: 3, nftUrl: "https://html-tokenmart.netlify.app/light/assets/images/product/2.webp", title: "Pink Love", likes: "17", priceInEth: "0.001", priceInDoller: "9.24", bids: "2" },
  { id: 4, nftUrl: "https://html-tokenmart.netlify.app/light/assets/images/product/3.gif", title: "Token Hero", likes: "88", priceInEth: "0.005", priceInDoller: "16.69", bids: "14" },
];

export const blogsData = [
  {
    img: Mindfullness,
    heading: "Mindfulness Activities for Kids & Toddlers with NFT",
    text: "Poverty of in the better in little. Did out held be entered it small...",
    date: "09 Feb 2022",
    numCmt: "30",
    id: "min",
  },
  {
    img: Save,
    heading: "Save Thousands Of Lives Through This NFT",
    text: "Staple was it myself. The both writing and area century...",
    date: "11 Mar 2022",
    numCmt: "87",
    id: "sav",
  },
  {
    img: Honouring,
    heading: "Honoring Black History Month with Toddlers",
    text: "At but physics sofa a explorations are trusted curiously ...",
    date: "31 June 2022",
    numCmt: "60",
    id: "hon",
  },
];
export const sellerLeaderboardData = [
  {
    pic: steven,
    name: "Steven",
    id: "st",
    items: {
      item1: item1,
      item2: item2,
      item3: item3,
      item4: item4,
      item5: item5,
    },
  },
  {
    pic: leah,
    name: "Leah",
    id: "le",
    items: {
      item1: item1,
      item2: item2,
      item3: item3,
      item4: item4,
      item5: item5,
    },
  },
  {
    pic: joana,
    name: "Joana",
    id: "jo",
    items: {
      item1: item1,
      item2: item2,
      item3: item3,
      item4: item4,
      item5: item5,
    },
  },
  {
    pic: melanie,
    name: "Melanie",
    id: "me",
    items: {
      item1: item1,
      item2: item2,
      item3: item3,
      item4: item4,
      item5: item5,
    },
  },
  {
    pic: trinity,
    name: "Trinity",
    id: "tr",
    items: {
      item1: item1,
      item2: item2,
      item3: item3,
      item4: item4,
      item5: item5,
    },
  },
];
export const navigationData = [
  { text: "Home", id: "ho" },
  { text: "Explore", id: "ex" },
  { text: "Wallet", id: "wa" },
  { text: "Author", id: "au" },
  { text: "Terms", id: "te" },
];
export const exploreData = [
  { text: "Explore Artwork", id: "ea" },
  { text: "Single Artwork", id: "sa" },
  { text: "Explore Creators", id: "ec" },
  { text: "Single Creators", id: "sc" },
  { text: "Community", id: "co" },
];
export const communityData = [
  { text: "Item Details", id: "id" },
  { text: "  Item Details v2", id: "id2" },
  { text: "Activity", id: "ac" },
  { text: "Contact", id: "cn" },
];
export const exploreCardData = [
  {
    img: item1,
    imgs: [
      {
        img: steven,
      },
      {
        img: leah,
      },
      {
        img: joana,
      },
    ],
    likes: "90",
    heading: "Creative Oilpaint #07",
    id: "co",
  },
  {
    img: explore2,
    imgs: [
      {
        img: steven,
      },
      {
        img: leah,
      },
      {
        img: joana,
      },
    ],
    likes: "90",
    heading: "Creative Oilpaint #07",
    id: "co",
  },
  {
    img: explore3,
    imgs: [
      {
        img: steven,
      },
      {
        img: leah,
      },
      {
        img: joana,
      },
    ],
    likes: "90",
    heading: "Creative Oilpaint #07",
    id: "co",
  },
  {
    img: explore4,
    imgs: [
      {
        img: steven,
      },
      {
        img: leah,
      },
      {
        img: joana,
      },
    ],
    likes: "90",
    heading: "Creative Oilpaint #07",
    id: "co",
  },
  {
    img: explore5,
    imgs: [
      {
        img: steven,
      },
      {
        img: leah,
      },
      {
        img: joana,
      },
    ],
    likes: "90",
    heading: "Creative Oilpaint #07",
    id: "co",
  },
  {
    img: explore6,
    imgs: [
      {
        img: steven,
      },
      {
        img: leah,
      },
      {
        img: joana,
      },
    ],
    likes: "90",
    heading: "Creative Oilpaint #07",
    id: "co",
  },
  {
    img: explore7,
    imgs: [
      {
        img: steven,
      },
      {
        img: leah,
      },
      {
        img: joana,
      },
    ],
    likes: "90",
    heading: "Creative Oilpaint #07",
    id: "co",
  },
  {
    img: explore4,
    imgs: [
      {
        img: steven,
      },
      {
        img: leah,
      },
      {
        img: joana,
      },
    ],
    likes: "90",
    heading: "Creative Oilpaint #07",
    id: "co",
  },
  {
    img: explore4,
    imgs: [
      {
        img: steven,
      },
      {
        img: leah,
      },
      {
        img: joana,
      },
    ],
    likes: "90",
    heading: "Creative Oilpaint #07",
    id: "co",
  },
  {
    img: explore4,
    imgs: [
      {
        img: steven,
      },
      {
        img: leah,
      },
      {
        img: joana,
      },
    ],
    likes: "90",
    heading: "Creative Oilpaint #07",
    id: "co",
  },
];
