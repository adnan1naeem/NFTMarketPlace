import { Box } from "@mui/material";
import { communityData, exploreData, navigationData } from "assets/Data";
import React from "react";
import { Shortcuts } from "./Shortcuts";
import { SocialMedia } from "./SocialMedia";
import { Subscribe } from "./Subscribe";

export const Footer = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        margin: "3% 7%",
        flexWrap: "wrap",
      }}
    >
      <SocialMedia />
      <Shortcuts data={navigationData} heading={"Navigation"} />
      <Shortcuts data={exploreData} heading={"Explore"} />
      <Shortcuts data={communityData} heading={"Community"} />
      <Subscribe />
    </Box>
  );
};
