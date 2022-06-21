import { Box, styled } from "@mui/material";
import { communityData, exploreData, navigationData } from "assets/Data";
import React from "react";
import { Shortcuts } from "./Shortcuts";
import { SocialMedia } from "./SocialMedia";
import { Subscribe } from "./Subscribe";
import footerbg from "../../assets/Images/footer-bg.svg";
const Root = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  padding: "5% 7%",
  flexWrap: "wrap",
  backgroundImage: `url(${footerbg})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  minHeight: 500,
  [theme.breakpoints.only("xs")]: {
    margin: "0%",
  },
}));
export const Footer = () => {
  return (
    <Root>
      <SocialMedia />
      <Shortcuts data={navigationData} heading={"Navigation"} />
      <Shortcuts data={exploreData} heading={"Explore"} />
      <Shortcuts data={communityData} heading={"Community"} />
      <Subscribe />
    </Root>
  );
};
