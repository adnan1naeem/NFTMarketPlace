import { Box, styled, Typography } from "@mui/material";
import React from "react";
import heart from "../../assets/Images/Seller LeaderBoard/heart.svg";

const Root = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  marginTop: "1rem",
}));
const Image = styled("img")(({ theme }) => ({
  objectFit: "cover",
  borderRadius: "40px",
  width: "35px",
  height: "35px",
  marginLeft: -7,
  border: "1px solid white",
}));
export const Likes = ({ data, likes, id }) => {
  return (
    <Root ke={id}>
      <Box sx={{ display: "flex" }}>
        {data.map((item) => (
          <Image src={item.img} key={item.id} />
        ))}
      </Box>
      <Box sx={{ display: "flex" }}>
        {" "}
        <Box
          sx={{
            background: "#e0e7ff",
            padding: "5px",
            borderRadius: "30px",
            height: "30px",
            width: "30px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img src={heart} alt="" style={{ width: "15px" }} />
        </Box>
        <Typography
          sx={{
            fontSize: "14px",
            fontFamily: "Manrope",
            fontWeight: 700,
            marginTop: "5px",
            marginLeft: 1,
            color: "#475569",
          }}
        >
          {likes}Likes
        </Typography>
      </Box>
    </Root>
  );
};
