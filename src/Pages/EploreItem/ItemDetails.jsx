import { Box, Grid, styled, Typography } from "@mui/material";
import nftImg from "../../assets/Images/ExploreItem/26.jpg";
import React,{useState, useEffect} from "react";
import { CreateDetails } from "./CreateDetails";
import { Price } from "./Price";
import { useParams } from 'react-router-dom';
import { exploreCardData } from "assets/Data";
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
  const [nftImg, setNftImg] = useState();
  const [nftName, setNftName] = useState();
  const { id } = useParams();
  console.log('id of item details is ', id);
  const getNftDetails = () => {
    for(let i=0; i<exploreCardData.length; i++){
      if(exploreCardData[i]?.id == id ){
        setNftImg(exploreCardData[i].img);
        setNftName(exploreCardData[i].heading);
      }
    }
  }
  useEffect(() => {
    window.scrollTo(0, 0);
    getNftDetails();
  }, []);
  return (
    <Grid container spacing={6}>
      <Grid item xs={12} md={5}>
        <Image src={nftImg} alt="" />
      </Grid>
      <Grid item xs={12} md={7} paddingBottom="40px">
        <Heading sx={{ marginBottom: "2.5rem" }}>{nftName}</Heading>
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
