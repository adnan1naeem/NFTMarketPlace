import { Box, Grid, Typography } from "@mui/material";
import { styled } from "@mui/system";
import React from "react";
import LoginForm from "./ForgotPasswordForm";
const Heading = styled(Typography)(({ theme }) => ({
  fontFamily: "Nunito",
  color: "#0F172A",
  fontSize: "60px",
  fontWeight: 700,
  [theme.breakpoints.only("xs")]: {
    fontSize: "45px",
  },
}));
export const ForgotPasswordPage = () => {
  return (
    <Box sx={{ display: "flex", margin: "1% 5%", flexDirection: "column" }}>
      <Grid container>
        <Grid item xs={12} md={8} lg={5}>
          <Box sx={{ display: "flex", margin: "20px 0%" }}>
            <Heading>Forget Password</Heading>
          </Box>
          <Box sx={{ display: "flex", padding: "20px 0%" }}>
            <Heading sx={{ fontSize: "1.875rem" }}>Retreive password</Heading>
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
  );
};
