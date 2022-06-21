import { Box, styled } from "@mui/material";
import steven from "../../assets/Images/Seller LeaderBoard/steven.jpg";
import trinity from "../../assets/Images/Seller LeaderBoard/trinity.jpg";
import React from "react";
import { Heading, Text } from "./ItemDetails";
const Image = styled("img")(({ theme }) => ({
  width: "3rem",
  borderRadius: "40px",
  height: "3rem",
  objectFit: "cover",
  //   marginRight: "30px",
}));
export const CreateDetails = () => {
  return (
    <Box sx={{ display: "flex", marginBottom: "3rem" }}>
      <Box
        sx={{
          display: "flex",
          width: "250px",
          borderRight: "1px solid rgba(203,213,225)",
        }}
      >
        <Image src={steven} />
        <Box sx={{ marginLeft: 1 }}>
          <Text sx={{ fontSize: 14, fontWeight: 400 }}>Creater</Text>
          <Heading sx={{ fontSize: 18, fontWeight: 600 }}>Steven White</Heading>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          width: "250px",
          marginLeft: 5,
        }}
      >
        <Image src={trinity} />
        <Box sx={{ marginLeft: 1 }}>
          <Text sx={{ fontSize: 14, fontWeight: 400 }}>Owner</Text>
          <Heading sx={{ fontSize: 18, fontWeight: 600 }}>
            Dustin Ferguson
          </Heading>
        </Box>
      </Box>
    </Box>
  );
};
