import { Box, styled, Typography } from "@mui/material";
import React from "react";
import ethIcon from "../../assets/Images/cryptocurrency-icon.svg";
const Text = styled(Typography)(({ theme }) => ({
  fontFamily: "Manrope",
  color: "#475569",
  fontSize: "14px",
}));
export const Bid = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Text>Current Bid</Text>
      <Box>
        <Box sx={{ display: "flex" }}>
          <img src={ethIcon} style={{ marginRight: 5 }} />
          <Text sx={{ fontSize: 16, fontWeight: 600, color: "#0F172A" }}>
            1.02 ETH
          </Text>
        </Box>
        <Text>≈$26.69</Text>
      </Box>
    </Box>
  );
};
