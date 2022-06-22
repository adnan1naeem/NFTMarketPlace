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
  "&:hover": {
    backgroundColor: "#b5cef5",
    cursor: "pointer",
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
        <Root key={item.id}>
          <Image src={item.img} />
          <Likes data={item.imgs} likes={item.likes} id={item.id} />
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
