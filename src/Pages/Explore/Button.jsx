import { Box, styled } from "@mui/material";
import React from "react";
const ActiveButton = styled("button")(({ theme }) => ({
  background: "#6366F1",
  fontFamily: "Manrope",
  fontWeight: 700,
  fontSize: 16,
  padding: "10px 20px",
  borderRadius: 8,
  marginRight: "1%",
  marginBottom: 10,
  marginTop: 10,
  color: "white",
  "&:hover": {
    background: "#8E54E9",
  },
  [theme.breakpoints.only("xs")]: {
    marginRight: "1.5%",
    fontSize: 14,
    padding: "10px 15px",
  },
}));
const Button = styled("button")(({ theme }) => ({
  fontFamily: "Manrope",
  fontWeight: 700,
  fontSize: 16,
  padding: "10px 20px",
  borderRadius: 8,
  marginRight: "1%",
  marginBottom: 10,
  marginTop: 10,
  background: "white",
  color: "#0f172a",
  border: "1px solid #cfd0d1",
  "&:hover": {
    background: "#8E54E9",
    color: "white",
  },
  [theme.breakpoints.only("xs")]: {
    marginRight: "1.5%",
    fontSize: 14,
    padding: "10px 10px",
  },
}));
export const Buttons = () => {
  return (
    <Box sx={{ display: "flex", margin: "2% 8.5%", flexWrap: "wrap" }}>
      <ActiveButton>All</ActiveButton>
      <Button>Art</Button>
      <Button>Music</Button>
      <Button>Domain Names</Button>
      <Button>Virtual Worlds</Button>
      <Button>Trading Cards</Button>
    </Box>
  );
};
