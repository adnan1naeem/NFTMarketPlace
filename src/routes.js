import { Explore } from "Pages/Explore";
import Home from "Pages/Home";
import Wallet from "Pages/Wallet";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const NFTRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/wallet" element={<Wallet />} />
      </Routes>
    </BrowserRouter>
  );
};
export default NFTRoutes;
