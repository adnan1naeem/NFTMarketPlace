import {
  Box,
  Button,
  FormGroup,
  styled,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import sendicon from "../../assets/Images/newsletter-icon.svg";
const Heading = styled(Typography)(({ theme }) => ({
  fontSize: 20,
  fontFamily: "Nunito",
  fontWeight: 600,
  marginBottom: 25,
}));

const Text = styled(Typography)(({ theme }) => ({
  fontSize: 16,
  fontFamily: "Manrope",
  fontWeight: 500,
  color: "rgba(71,85,105)",
  marginBottom: 20,
  "&:hover": {
    textDecoration: "underline",
    color: "#4287f5",
    cursor: "pointer",
  },
}));
export const Subscribe = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
      }}
    >
      <Heading>Subscribe Us</Heading>
      <FormGroup row sx={{ marginBottom: "3rem" }}>
        <TextField variant="outlined" placeholder="username" />
        <Button variant="contained" disableElevation>
          <img src={sendicon} alt="" />
        </Button>
      </FormGroup>
      <Text>Your privacy protected! We dont disclose Email.</Text>
    </Box>
  );
};
