import { Box, styled, Typography } from "@mui/material";
import LoadingButton from "components/UI/LoadingButton";
import React from "react";
import { Bid } from "./Bid";
import { Image } from "./Image";
import { Likes } from "./Likes";
const Root = styled(Box)(({ theme }) => ({
  background: "#f5f5f5",
  color: "white",
  borderRadius: 8,
  width: 280,
  padding: "20px 20px",
  overflow: "hidden",
  transition: "0.25s ease-in-out background",
  margin: "1.5%",
  border: "2px solid white",
  "&:hover": {
    backgroundColor: "#d9f5fa",
    cursor: "pointer",
    border: "2px solid #9448f7"
  },
  [theme.breakpoints.only("xs")]: {
    width: "300px",
    margin: "1.5%",
  },
}));

export const Thumbnail = ({ data }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
      }}
    >
      {data.map((item) => (
        <Root>
          <Image src={item.img} id={item.id}/>
          <Likes data={item.imgs} likes={item.likes} id={item.id}/>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              marginTop: 2,
              marginBottom: 3,
            }}
          >
            <Typography
              sx={{ fontSize: 20, fontFamily: "Nunito", color: "#0F172A" }}
            >
              {item.heading}
            </Typography>
          </Box>
          <Bid />
        </Root>
      ))}
    </Box>
  );
};
