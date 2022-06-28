import { Grid } from "@mui/material";
import React, { useState } from "react";
import { EditProfileDetails } from "./Details";
import { EditProfileHeader } from "./Header";
import defaultimg from "../../assets/Images/CreateItem/defaultimg.jpg";
import { Box } from "@mui/system";
import { Flex } from "components/UI/Flex";
import { NunitoText } from "components/UI/NunitoText";
import Navbar from "components/Navbar/Navbar";
export const EditProfile = () => {
  return (
    <>
      <Navbar />
      <Flex
        sx={{
          margin: "7% 5%",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "flex-start",
          marginBottom: "5rem",
        }}
      >
        <EditProfileHeader />
        <Grid container>
          <Grid item xs={12} md={8}>
            <EditProfileDetails />
          </Grid>
          <Grid item xs={12} md={4}></Grid>
        </Grid>
      </Flex>
    </>
  );
};
