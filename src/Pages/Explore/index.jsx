import { styled, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { exploreCardData } from "assets/Data";
import LoadingButton from "components/UI/LoadingButton";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Buttons } from "./Button";
import { Thumbnail } from "./Thumbnail";
import arrow from "../../assets/Images/explore/right-arrow.svg";
import Navbar from "components/Navbar/Navbar";
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
export const Explore = () => {
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div style={{ marginBottom: "1rem" }}>
      <Navbar />
      <Box sx={{ display: "flex", margin: "5% 8.5%" }}>
        <Heading>Explore</Heading>
      </Box>
      <Box sx={{ display: "flex", margin: "0% 8.5%", alignItems: "center" }}>
        <Text onClick={() => navigate("/")}>Home</Text>
        {/* <FaGreaterThan style={{ fontweight: 400 }} /> */}
        <img src={arrow} alt="" style={{ margin: "0px 5px" }} />
        <Text sx={{ color: "#327bf0" }}>Explore</Text>
      </Box>
      <Buttons />
      <Thumbnail data={exploreCardData} />
      {/* <LoadingButton /> */}
    </div>
  );
};
