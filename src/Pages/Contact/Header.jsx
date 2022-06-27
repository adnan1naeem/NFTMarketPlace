import { Box, styled, Typography } from "@mui/material";
import React from "react";
const Text = styled(Typography)(({ theme }) => ({
  fontFamily: "Nunito",
  fontSize: "3.75rem",
  fontWeight: 700,
}));
export const Header = () => {
  return (
    <Box sx={{ padding: "7% 0%" }}>
      <Text>Contact</Text>
    </Box>
  );
};
