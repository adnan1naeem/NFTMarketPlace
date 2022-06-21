import * as React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import { Button, styled } from "@mui/material";
const CustomButton = styled(Button)(({ theme }) => ({
  background: "#6366F1",
  color: "white",
  padding: 10,
  marginTop: "3rem",
}));
export default function LoadingButton() {
  return (
    <CustomButton>
      Load More
      <CircularProgress size={24} sx={{ color: "white", marginLeft: 2 }} />
    </CustomButton>
  );
}
