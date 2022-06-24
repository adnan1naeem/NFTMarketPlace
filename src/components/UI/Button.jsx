import { Button, styled } from "@mui/material";

export const CustomButton = styled(Button)(({ theme }) => ({
  background: "#6764f0",
  color: "white",
  fontWeight: 600,
  padding: "10px",
  fontFamily: "Nunito",
  marginTop: "2rem",
  "&:hover": {
    background: "#699dff",
  },
}));
