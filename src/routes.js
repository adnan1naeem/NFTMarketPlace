import { CreateItem } from "Pages/Create Item";
import { ExploreItem } from "Pages/EploreItem";
import { Explore } from "Pages/Explore";
import Home from "Pages/Home";
import Wallet from "Pages/Wallet";
import Authors from "Pages/Authors";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LoginPage } from "Pages/Auth/Login/LoginPage";
import { ForgotPasswordPage } from "Pages/Auth/ForgotPassword/ForgotPasswordPage";
import { RegisterPage } from "Pages/Auth/Signup/RegisterPage";

const NFTRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/forgotpassword" element={<ForgotPasswordPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/wallet" element={<Wallet />} />
        <Route path="/exploreitem/:id" element={<ExploreItem />} />
        <Route path="/authors/:id" element={<Authors />} />
        <Route path="/createitem" element={<CreateItem />} />
      </Routes>
    </BrowserRouter>
  );
};
export default NFTRoutes;
