import { Box, styled, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import arrow from "../../assets/Images/explore/right-arrow.svg";

const Heading = styled(Typography)(({ theme }) => ({
  fontFamily: "Nunito",
  color: "#0F172A",
  fontSize: "60px",
  fontWeight: 700,
  [theme.breakpoints.only("xs")]: {
    fontSize: "45px",
  },
}));
const Text = styled(Typography)(({ theme }) => ({
  fontFamily: "Manrope",
  color: "#475569",
  fontSize: "16px",
  "&:hover": {
    cursor: "pointer",
  },
}));

export const CreateItemHeader = () => {
  const navigate = useNavigate();
  return (
    <>
      <Box sx={{ display: "flex", margin: "20px 0%" }}>
        <Heading>Create Item</Heading>
      </Box>
      <Box sx={{ display: "flex", margin: "3% 0%", alignItems: "center" }}>
        <Text onClick={() => navigate("/")}>Home</Text>
        <img src={arrow} alt="" style={{ margin: "0px 5px" }} />
        <Text onClick={() => navigate("/explore")}>Explore</Text>
        <img src={arrow} alt="" style={{ margin: "0px 5px" }} />
        <Text sx={{ color: "#327bf0" }} onClick={() => navigate("/createitem")}>
          Create Item
        </Text>
      </Box>
    </>
  );
};
