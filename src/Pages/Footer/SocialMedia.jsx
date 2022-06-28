import React from "react";
import { styled } from "@mui/material";
import { Box } from "@mui/system";
import { Flex } from "Pages/Home/Blogs/Card";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import logo from "../../assets/Images/logo.svg";
import { useNavigate } from "react-router";
const IconBox = styled(Box)(({ theme }) => ({
  height: 40,
  width: 40,
  background: "rgba(226,232,240)",
  borderRadius: 40,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  marginRight: 10,
  fontSize: "18px",
  "&:hover": {
    background: "#037ffc",
    cursor: "pointer",
    color: "white",
  },
  [theme.breakpoints.down("md")]: {},
}));
export const SocialMedia = () => {
  const navigate = useNavigate();
  return (
    <Box sx={{ marginBottom: 5 }}>
      <img src={logo} alt="" style={{ marginBottom: "3rem" }} />
      <Flex>
        <IconBox onClick={() => window.open("https://facebook.com")}>
          <FaFacebookF />
        </IconBox>
        <IconBox onClick={() => window.open("https://instagram.com")}>
          <FaInstagram />
        </IconBox>
        <IconBox onClick={() => window.open("https://twitter.com")}>
          <FaTwitter />
        </IconBox>
        <IconBox onClick={() => window.open("https://linkedin.com")}>
          <FaLinkedinIn />
        </IconBox>
      </Flex>
    </Box>
  );
};
