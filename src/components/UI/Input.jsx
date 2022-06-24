import { styled } from "@mui/material";

export const Input = styled("input")(({ theme }) => ({
  outline: "1px solid gray",
  width: "100%",
  fontWeight: 400,
  borderRadius: "8px",
  padding: "10px 10px",
  fontFamily: "Manrope",
  color: "rgba(71,85,105)",
  height: 50,
  transition: "box-shadow .5s ease-in-out",
  "&:focus": {
    outline: "1px solid #6764f0",
    transition: "box-shadow .5s ease",
    boxShadow: "0 1rem 3rem rgba(0,0,0,.175)",
  },
}));
