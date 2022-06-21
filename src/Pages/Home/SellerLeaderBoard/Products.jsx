import React from "react";
import { Box, styled } from "@mui/material";
const Image = styled("img")(({ theme }) => ({
  borderRadius: "8px",
  width: "5rem",
  marginRight: "20px",
  //   transition: "width 2s",
}));
const Flex = styled(Box)(({ theme }) => ({
  // width: 400,
  display: "flex",
  [theme.breakpoints.only("xs")]: {
    display: "none",
  },
}));
export const Products = ({ items }) => {
  return (
    <Flex>
      <Image src={items.item1} alt="" />
      <Image src={items.item2} alt="" />
      <Image src={items.item3} alt="" />
      <Image src={items.item4} alt="" />
      <Image src={items.item5} alt="" />
    </Flex>
  );
};
