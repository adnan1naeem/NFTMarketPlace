import { Box, styled } from "@mui/system";
import React from "react";
import level from "../../../assets/Images/Seller LeaderBoard/level-icon.svg";
import heart from "../../../assets/Images/Seller LeaderBoard/heart.svg";
import items from "../../../assets/Images/Seller LeaderBoard/items.svg";
import { Typography } from "@mui/material";
const Flex = styled(Box)(({ theme }) => ({
  width: 540,
  justifyContent: "center",
  display: "flex",

  [theme.breakpoints.only("xs")]: {
    display: "none",
  },
}));
export const Stats = () => {
  return (
    <Flex>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          marginRight: 3,
        }}
      >
        <Box
          sx={{
            background: "#e0e7ff",
            padding: "5px",
            borderRadius: "30px",
            height: "40px",
            width: "40px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img src={level} alt="" style={{ width: "20px" }} />
        </Box>
        <Typography
          sx={{
            fontSize: "14px",
            fontFamily: "Nunito",
            fontWeight: 700,
            marginTop: 1,
          }}
        >
          8 Level
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          marginRight: 3,
        }}
      >
        <Box
          sx={{
            background: "#e0e7ff",
            padding: "5px",
            borderRadius: "30px",
            height: "40px",
            width: "40px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img src={heart} alt="" style={{ width: "20px" }} />
        </Box>
        <Typography
          sx={{
            fontSize: "14px",
            fontFamily: "Nunito",
            fontWeight: 700,
            marginTop: 1,
          }}
        >
          250 Likes
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          marginRight: 3,
        }}
      >
        <Box
          sx={{
            background: "#e0e7ff",
            padding: "5px",
            borderRadius: "30px",
            height: "40px",
            width: "40px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img src={items} alt="" style={{ width: "20px" }} />
        </Box>
        <Typography
          sx={{
            fontSize: "14px",
            fontFamily: "Nunito",
            fontWeight: 700,
            marginTop: 1,
          }}
        >
          160 Items
        </Typography>
      </Box>
    </Flex>
  );
};
