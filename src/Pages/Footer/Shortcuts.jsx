import { Box, styled, Typography } from "@mui/material";
import React from "react";
const Root = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  flexWrap: "wrap",
}));
const Card = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "flex-start",
  flexDirection: "column",
  flexWrap: "wrap",

  [theme.breakpoints.only("xs")]: {
    flexDirection: "row",
  },
}));
const Heading = styled(Typography)(({ theme }) => ({
  fontSize: 20,
  fontFamily: "Nunito",
  fontWeight: 600,
  marginBottom: 25,
}));
const Text = styled(Typography)(({ theme }) => ({
  fontSize: 16,
  fontFamily: "Nunito",
  fontWeight: 500,
  color: "rgba(71,85,105)",
  marginBottom: 20,
  marginRight: 15,
  "&:hover": {
    textDecoration: "underline",
    color: "#4287f5",
    cursor: "pointer",
  },
}));
export const Shortcuts = ({ data, heading }) => {
  return (
    <Root key={data.id}>
      <Heading>{heading}</Heading>
      <Card>
        {data.map((item) => (
          <Text key={item.id}>{item.text}</Text>
        ))}
      </Card>
    </Root>
  );
};
