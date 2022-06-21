import { styled, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useNavigate } from "react-router-dom";
import arrow from "../../assets/Images/explore/right-arrow.svg";
import Navbar from "components/Navbar/Navbar";
import WalletDesc from "./WalletDesc/WalletDesc";
import { walletsData } from "assets/Data";
const Heading = styled(Typography)(({ theme }) => ({
  fontFamily: "Nunito",
  color: "#0F172A",
  fontSize: "60px",
}));
const Text = styled(Typography)(({ theme }) => ({
  fontFamily: "Manrope",
  color: "#475569",
  fontSize: "16px",
  "&:hover": {
    cursor: "pointer",
  },
}));
 const Wallet = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center">
    <div style={{ marginBottom: "5rem", maxWidth: '1900px' }}>
      <Navbar />

      <Box sx={{ display: "flex", margin: "8% 8.5%" }}>
        <Heading>Wallet</Heading>
      </Box>
      <Box sx={{ display: "flex", margin: "-8% 8.5%", alignItems: "center" }}>
        <Text onClick={() => navigate("/")}>Home</Text>
        <img src={arrow} alt="" style={{ margin: "0px 5px" }} />
        <Text onClick={() => navigate("/explore")}>Explore</Text>
        {/* <FaGreaterThan style={{ fontweight: 400 }} /> */}
        <img src={arrow} alt="" style={{ margin: "0px 5px" }} />
        <Text sx={{ color: "#327bf0" }}>Wallet</Text>
      </Box>
      <div className="flex flex-col items-center w-full mt-40">
       {walletsData.map((i, index) => {
        return(
          <WalletDesc imgUrl={i.imgUrl} title={i.title} description={i.description}/>
        )
        
       })}
        
      </div>
    </div>
    </div>
    
  );
};
export default Wallet;
