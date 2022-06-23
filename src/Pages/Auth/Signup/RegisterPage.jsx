import { Box, Grid, Typography } from "@mui/material";
import { styled } from "@mui/system";
import Navbar from "components/Navbar/Navbar";
import React from "react";
import LoginForm from "./RegisterForm";
const Heading = styled(Typography)(({ theme }) => ({
  fontFamily: "Nunito",
  color: "#0F172A",
  fontSize: "60px",
  fontWeight: 700,
  [theme.breakpoints.only("xs")]: {
    fontSize: "40px",
  },
}));
const Text = styled(Typography)(({ theme }) => ({
  fontFamily: "Nunito",
  color: "#0F172A",
  fontSize: "1.875rem",
  fontWeight: 700,
  [theme.breakpoints.only("xs")]: {
    fontSize: "28px",
  },
}));
export const RegisterPage = () => {
  return (
    <>
      <Navbar />
      <Box sx={{ display: "flex", margin: "7% 5%", flexDirection: "column" }}>
        <Grid container>
          <Grid item xs={12} md={8} lg={5}>
            <Box sx={{ display: "flex", margin: "20px 0%" }}>
              <Heading>Create Account</Heading>
            </Box>
            <Box sx={{ display: "flex", padding: "20px 0%" }}>
              <Text>Create Account</Text>
            </Box>
            <Box
              sx={{
                background: "gray",
                height: "1px",
                width: "100%",
                marginBottom: 4,
              }}
            />

            <LoginForm />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};
