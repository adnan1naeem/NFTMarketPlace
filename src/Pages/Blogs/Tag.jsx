import { Box } from "@mui/material";
import { blogsCategoryData } from "assets/Data";
import Navbar from "components/Navbar/Navbar";
import { NunitoText } from "components/UI/NunitoText";
import { BlogCard } from "Pages/Home/Blogs/Card";
import React from "react";

export const Tag = () => {
  return (
    <Box>
      <Navbar />
      <NunitoText
        sx={{ fontSize: "3.75rem", fontWeight: 700, margin: "5% 7%" }}
      >
        Tag - NFT
      </NunitoText>
      <BlogCard data={blogsCategoryData} />
    </Box>
  );
};
