import { Box } from "@mui/material";
import React from "react";
import { LeaderBoardThumbnail } from "./Thumbnail";
import { sellerLeaderboardData } from "assets/Data";

export const SellerLeaderBorad = () => {
  return (
    <Box sx={{ overflowX: "auto" }}>
      <LeaderBoardThumbnail data={sellerLeaderboardData} show={true} />
    </Box>
  );
};
