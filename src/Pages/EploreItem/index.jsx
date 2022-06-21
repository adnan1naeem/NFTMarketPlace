import { Box, styled } from "@mui/material";
import React from "react";
import { Address } from "./Address";
import { Header } from "./Header";
import { ItemDetails } from "./ItemDetails";
const Root = styled(Box)(({ theme }) => ({
  margin: "3% 7%",
  [theme.breakpoints.only("md")]: {
    margin: "2% 3%",
  },
}));
export const ExploreItem = () => {
  return (
    <Root>
      <Header />
      <ItemDetails />
      <Address />
    </Root>
  );
};
