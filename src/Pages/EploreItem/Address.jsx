import { Box, Grid, styled, Typography } from "@mui/material";
import CountDown from "components/Countdown";
import React from "react";
import { BidsDetails } from "./BidsDetails";
const Wrapper = styled(Box)(({ theme }) => ({
  borderRadius: "8px",
  border: "1px solid rgba(203,213,225)",
  padding: " 2.5rem 1.5rem",
  display: "flex",
  flexDirection: "column",
  flexWrap: "wrap",
}));
const Text = styled(Typography)(({ theme }) => ({
  fontFamily: "Nunito",
  color: "#0F172A",
  textAlign: "left",
  fontWeight: 500,
  fontSize: "16px",
  marginBottom: 3,
}));
export const Address = () => {
  return (
    <Grid container spacing={6}>
      <Grid item xs={12} md={5}>
        <CountDown />
        <Wrapper>
          <Text sx={{ fontWeight: 700 }}>Contract Address</Text>
          <Box sx={{ display: "flex", flexWrap: "wrap" }}>
            <Text sx={{ color: "#6366F1", fontFamily: "Manrope" }}>
              1x1dDB2C0817daF18632662E71fd
            </Text>
            <Text
              sx={{ color: "#6366F1", fontFamily: "Manrope", width: "90%" }}
            >
              D2dbDC0eB3a9Ec
            </Text>
          </Box>
          <Text sx={{ fontWeight: 700 }}>Token ID</Text>
          <Text sx={{ color: "#475569", fontFamily: "Manrope" }}>
            100300041083
          </Text>
          <Text sx={{ fontWeight: 700 }}>Metadata</Text>
          <Text sx={{ color: "#475569", fontFamily: "Manrope" }}>Editable</Text>
        </Wrapper>
      </Grid>
      <Grid item xs={12} md={7}>
        <BidsDetails />
      </Grid>
    </Grid>
  );
};
