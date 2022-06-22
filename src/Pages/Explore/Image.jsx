import { Box, styled, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import { MdStar } from "react-icons/md";
import { ImHammer2 } from "react-icons/im";

import React from "react";
const Img = styled("img")(({ theme }) => ({
  borderRadius: 8,
  width: "100%",
  height: 200,

  "&:hover": {
    transform: "scale(1.05)",
    transition: "transform .5s ease",
  },
}));
export const Image = (props) => {
  return (
    <Box
      sx={{
        display: "flex",
        overflow: "hidden",
        flexDirection: "column",
        borderRadius: "8px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          zIndex: "1",
        }}
      >
        <Box
          sx={{
            background: "#6366F1",
            borderRadius: "8px",
            color: "white",
            display: "flex",
            alignItems: "center",
            fpntFamily: "Manrope",
            fontSize: 14,
            position: "absolute",
            marginRight: 2,
            marginTop: 2,
            padding: "3px 10px",
            zIndex: 5,
          }}
        >
          <MdStar />
          <Typography>Featured</Typography>
        </Box>
        <Img src={props?.src} />
      </Box>

      <Box
        sx={{
          zIndex: "5",
          display: "flex",
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
       <NavLink to={`/exploreitem/${props?.id}`}> <Box
          sx={{
            background: "#6366F1",
            borderRadius: "8px",
            color: "white",
            display: "flex",
            alignItems: "center",
            fpntFamily: "Manrope",
            fontSize: 16,
            padding: "7px 10px",
            marginTop: -3,
            zIndex: "5",
          }}
          
        >
          <ImHammer2 style={{ marginRight: 8 }} />
          <Typography>Place a bid</Typography>
        </Box></NavLink>
      </Box>
    </Box>
  );
};
