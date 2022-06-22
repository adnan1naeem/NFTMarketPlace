import { Box, styled, Typography } from "@mui/material";
import BidModal from "components/Model/BidModal";
import React from "react";
import { ImHammer2 } from "react-icons/im";
import ethIcon from "../../assets/Images/cryptocurrency-icon.svg";
const Text = styled(Typography)(({ theme }) => ({
  fontFamily: "Nunito",
  color: "#0F172A",
  fontSize: "16px",
  fontWeight: 600,
}));
export const Price = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
      }}
    >
      <Text sx={{ marginBottom: "1rem" }}>Highest Price</Text>
      <Box sx={{ display: "flex", alignItems: "center", marginBottom: "1rem" }}>
        <img src={ethIcon} style={{ width: "2rem", height: "2rem" }} />
        <Text sx={{ fontSize: "1.5rem", fontWeight: 700, marginLeft: 1 }}>
          0.080 ETH
        </Text>
        <Text
          sx={{
            color: "#475569",
            fontSize: 14,
            fontWeight: 400,
            marginLeft: 1,
          }}
        >
          ≈$26.69
        </Text>
      </Box>
      {/* <Box
        sx={{
          background: "#6366F1",
          borderRadius: "8px",
          color: "white",
          display: "flex",
          alignItems: "center",
          fpntFamily: "Manrope",
          marginTop: "1rem",
          padding: "10px 20px",
          zIndex: "5",
          fontWeight: 500,
          cursor: "pointer",
        }}
      >
        <ImHammer2 style={{ marginRight: 8 }} />
        <Typography sx={{ fontSize: "1.25rem" }}>Place a bid</Typography>
      </Box> */}
      <BidModal />
    </Box>
  );
};
