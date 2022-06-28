import { Box, styled } from "@mui/material";
import { useParams } from "react-router-dom";
import React from "react";
import { NavLink } from "react-router-dom";
const ActiveButton = styled("button")(({ theme }) => ({
  background: "#6366F1",
  fontFamily: "Manrope",
  fontWeight: 700,
  fontSize: 16,
  padding: "10px 20px",
  borderRadius: 8,
  marginRight: "1%",
  marginBottom: 10,
  marginTop: 10,
  color: "white",
  "&:hover": {
    background: "#8E54E9",
  },
  [theme.breakpoints.only("xs")]: {
    marginRight: "1.5%",
    fontSize: 14,
    padding: "10px 15px",
  },
}));
const Button = styled("button")(({ theme }) => ({
  fontFamily: "Manrope",
  fontWeight: 700,
  fontSize: 16,
  padding: "10px 20px",
  borderRadius: 8,
  marginRight: "1%",
  marginBottom: 10,
  marginTop: 10,
  border: "1px solid #cfd0d1",
  "&:hover": {
    background: "#8E54E9",
    color: "white",
  },
  [theme.breakpoints.only("xs")]: {
    marginRight: "1.5%",
    fontSize: 14,
    padding: "10px 10px",
  },
}));
export const Buttons = () => {
  const { id } = useParams();
  return (
    <Box>
      <ActiveButton>Featured (4)</ActiveButton>
      <Button>Published (10)</Button>
      <Button>Pending (12)</Button>
      <NavLink to={`/authoractivity/${id}`}>
        <Button>Activity</Button>
      </NavLink>
      <NavLink to={`/authorsprofiles/${id}`}>
        <Button>Followers (6)</Button>
      </NavLink>
      <NavLink to={"/editprofile"}>
        <Button>Edit Profile</Button>
      </NavLink>
      <Button>Logout</Button>
    </Box>
  );
};
