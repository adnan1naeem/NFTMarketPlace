import { Box } from "@mui/material";
import { LeaderboardData } from "assets/Data";
import Navbar from "components/Navbar/Navbar";

import { LeaderBoardThumbnail } from "Pages/Home/SellerLeaderBoard/Thumbnail";
import React from "react";
import { Header } from "./Header";

export const LeaderBoard = () => {
  return (
    <Box>
      <Navbar />
      <Header />
      <LeaderBoardThumbnail data={LeaderboardData} show={false} />
    </Box>
  );
};
