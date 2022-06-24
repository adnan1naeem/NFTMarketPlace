import { styled } from "@mui/material";

export const TextArea = styled("textarea")(({ theme }) => ({
  outline: "1px solid gray",
  minHeight: 130,
  width: "100%",
  fontWeight: 500,
  borderRadius: "8px",
  padding: "10px 10px",
  fontFamily: "Manrope",
  color: "rgba(71,85,105)",
  transition: "box-shadow .5s ease-in-out",
  "&:focus": {
    outline: "1px solid #6764f0",
    transition: "box-shadow .5s ease",
    boxShadow: "0 1rem 3rem rgba(0,0,0,.175)",
  },
}));
