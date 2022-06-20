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
  return (
    <Box sx={{ marginBottom: 5 }}>
      <img src={logo} alt="" style={{ marginBottom: "3rem" }} />
      <Flex>
        <IconBox>
          <FaFacebookF />
        </IconBox>
        <IconBox>
          <FaInstagram />
        </IconBox>
        <IconBox>
          <FaTwitter />
        </IconBox>
        <IconBox>
          <FaLinkedinIn />
        </IconBox>
      </Flex>
    </Box>
  );
};
