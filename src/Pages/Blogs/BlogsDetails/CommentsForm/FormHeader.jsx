import { Box, Grid, useMediaQuery } from "@mui/material";
import React from "react";
import {
  HiOutlineArrowNarrowLeft,
  HiOutlineArrowNarrowRight,
} from "react-icons/hi";
import { Typography } from "@mui/material";
import { styled } from "@mui/system";
const Heading = styled(Typography)(({ theme }) => ({
  fontFamily: "Nunito",
  color: "#0F172A",
  textAlign: "left",
  fontWeight: 700,
  fontSize: "1.25rem",
  marginBottom: "1rem",
  transition: "color .5s ease-in-out",
  cursor: "pointer",
  "&:hover": {
    color: "#6764f0",
    transition: "color .5s ease",
  },
}));
const Text = styled(Typography)(({ theme }) => ({
  fontFamily: "Nunito",
  color: "#0F172A",
  textAlign: "left",
  fontWeight: 600,
  fontSize: "0.875rem",
  //   transition: "text-decoration .5s ease-in-out",
  transition: "color .5s ease-in-out",
  cursor: "pointer",
  "&:hover": {
    color: "#6764f0",
    transition: "color .5s ease",
    // transition: "text-decoration .5s ease",
    textDecoration: "underline",
  },
}));
const Flex = styled(Box)(({ theme }) => ({
  color: "#475569",
  transition: "color .5s ease-in-out",
  display: "flex",
  alignItems: "center",
  "&:hover": {
    color: "#6764f0",
    transition: "color .5s ease",
  },
}));
const PostFlex = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-end",
  [theme.breakpoints.only("xs")]: {
    alignItems: "flex-start",
  },
}));
export const FormHeader = () => {
  const isMobile = useMediaQuery("(max-width:600px)");
  return (
    <Grid container xs={12} lg={8} spacing={3} sx={{ marginBottom: "3rem" }}>
      <Grid item xs={12} sm={6}>
        <Flex sx={{ flexDirection: "column", alignItems: "flex-start" }}>
          <Heading>Liki Trike – A Compact Trike with the Big Benefits</Heading>
          <Flex>
            <HiOutlineArrowNarrowLeft style={{ marginRight: "0.5rem" }} />
            <Text>Previous Post</Text>
          </Flex>
        </Flex>
      </Grid>
      <Grid item xs={12} sm={6}>
        <PostFlex>
          <Heading sx={{ textAlign: isMobile ? "left" : "right" }}>
            The Revolutionary Functionality of the Doona Car Seat & Stroller
          </Heading>
          <Box>
            <Flex>
              <Text
                sx={{ fontWeight: 600, fontSize: "0.875rem", color: "#475569" }}
              >
                Next Post
              </Text>
              <HiOutlineArrowNarrowRight
                style={{
                  marginLeft: "0.5rem",
                  pointer: "cursor",
                }}
              />
            </Flex>
            <Box />
          </Box>
        </PostFlex>
      </Grid>
    </Grid>
  );
};
