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

export const EditProfileHeader = () => {
  const navigate = useNavigate();
  return (
    <>
      <Box sx={{ display: "flex", margin: "80px 0%" }}>
        <Heading>Edit Profile</Heading>
      </Box>
    </>
  );
};
