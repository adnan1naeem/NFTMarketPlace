import { Box, Grid, styled, Typography } from "@mui/material";
import nftImg from "../../assets/Images/ExploreItem/26.jpg";
import React from "react";
import { CreateDetails } from "./CreateDetails";
import { Price } from "./Price";
const Image = styled("img")(({ theme }) => ({
  borderRadius: "8px",
  width: "100%",
  maxWidth: "700px",
  [theme.breakpoints.down("md")]: {
    height: 400,
  },
  [theme.breakpoints.down("md")]: {
    height: 300,
  },
}));
export const Heading = styled(Typography)(({ theme }) => ({
  fontFamily: "Nunito",
  color: "#0F172A",
  fontSize: "2.25rem",
  textAlign: "left",
  fontWeight: 700,
}));
export const Text = styled(Typography)(({ theme }) => ({
  fontFamily: "Manrope",
  color: "#475569",
  textAlign: "left",
  fontWeight: 500,
  fontSize: "16px",
  "&:hover": {
    cursor: "pointer",
  },
}));
export const ItemDetails = () => {
  return (
    <Grid container spacing={6}>
      <Grid item xs={12} md={5}>
        <Image src={nftImg} alt="" />
      </Grid>
      <Grid item xs={12} md={7} paddingBottom="40px">
        <Heading sx={{ marginBottom: "2.5rem" }}>Water Color War Paint</Heading>
        <Text sx={{ marginBottom: "1.5rem" }}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum
          obcaecati dignissimos quae quo ad iste ipsum officiis deleniti
          asperiores sit.
        </Text>
        <CreateDetails />
        <Price />
      </Grid>
    </Grid>
  );
};
