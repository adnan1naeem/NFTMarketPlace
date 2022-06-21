import { Box, styled, Typography } from "@mui/material";
import { exploreItemData, exploreItemHistoryData } from "assets/Data";
import ethIcon from "../../assets/Images/cryptocurrency-icon.svg";
import React from "react";
import { useState } from "react";
const Image = styled("img")(({ theme }) => ({
  width: "3rem",
  height: "3rem",
  borderRadius: "40px",
  objectFit: "cover",
}));
export const Text = styled(Typography)(({ theme }) => ({
  fontFamily: "Nunito",
  color: "#475569",
  fontSize: "16px",
  fontWeight: 600,
}));
export const BidsDetails = () => {
  const [bids, setBids] = useState(true);
  const [history, setHistory] = useState(false);
  const [info, setInfo] = useState(false);
  return (
    <Box>
      <Box sx={{ display: "flex" }}>
        <Box
          sx={{ marginRight: 3, cursor: "pointer" }}
          onClick={() => {
            setBids(true);
            setHistory(false);
            setInfo(false);
          }}
        >
          <Typography sx={{ color: "black", fontWeight: 700 }}>
            Bids(6)
          </Typography>
          <Box
            sx={{
              height: "2px",
              background: "#8c66ea",
              marginTop: 1,
              display: bids ? "block" : "none",
            }}
          />
        </Box>
        <Box
          sx={{ marginRight: 3, cursor: "pointer" }}
          onClick={() => {
            setBids(false);
            setHistory(true);
            setInfo(false);
          }}
        >
          <Typography sx={{ color: "black", fontWeight: 700 }}>
            History
          </Typography>
          <Box
            sx={{
              height: "2px",
              background: "#8c66ea",
              marginTop: 1,
              display: history ? "block" : "none",
            }}
          />
        </Box>
        <Box
          sx={{ marginRight: 3, cursor: "pointer" }}
          onClick={() => {
            setBids(false);
            setHistory(false);
            setInfo(true);
          }}
        >
          <Typography sx={{ color: "black", fontWeight: 700 }}>
            Additional info
          </Typography>
          <Box
            sx={{
              height: "2px",
              background: "#8c66ea",
              marginTop: 1,
              display: info ? "block" : "none",
            }}
          />
        </Box>
      </Box>
      {exploreItemData.map((item) => (
        <Box
          key={item.id}
          sx={{
            display: bids ? "flex" : "none",
            borderBottom: "1px solid rgba(203,213,225)",
            paddingBottom: 2,
            paddingTop: 2,
            justifyContent: "space-between",
          }}
        >
          <Box sx={{ display: "flex" }}>
            <Image src={item.img} alt="" />
            <Box
              key={item.id}
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                marginLeft: 2,
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Text sx={{ color: "#0F172A" }}>{item.name}</Text>
                <Text
                  sx={{ fontSize: "14px", marginTop: "4px", marginLeft: 1 }}
                >
                  Placed a bid
                </Text>
              </Box>
              <Text sx={{ fontSize: "14px", fontWeight: 400 }}>
                {item.time}
              </Text>
            </Box>
          </Box>
          <Box
            sx={{ display: "flex", alignItems: "center", marginBottom: "1rem" }}
          >
            <img src={ethIcon} style={{ width: "1.5rem", height: "1.5rem" }} />
            <Text sx={{ fontSize: "16px", fontWeight: 700, marginLeft: 1 }}>
              {item.ammount} ETH
            </Text>
            <Text
              sx={{
                color: "#475569",
                fontSize: 14,
                fontWeight: 400,
                marginLeft: 1,
              }}
            >
              ≈${item.approx}
            </Text>
          </Box>
        </Box>
      ))}
      {exploreItemHistoryData.map((item) => (
        <Box
          key={item.id}
          sx={{
            display: history ? "flex" : "none",
            borderBottom: "1px solid rgba(203,213,225)",
            paddingBottom: 2,
            paddingTop: 2,
            justifyContent: "space-between",
          }}
        >
          <Box sx={{ display: "flex" }}>
            <Image src={item.img} alt="" />
            <Box
              key={item.id}
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                marginLeft: 2,
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Text sx={{ color: "#0F172A" }}>{item.name}</Text>
                <Text
                  sx={{ fontSize: "14px", marginTop: "4px", marginLeft: 1 }}
                >
                  Edited item description
                </Text>
              </Box>
              <Text sx={{ fontSize: "14px", fontWeight: 400 }}>
                {item.time}
              </Text>
            </Box>
          </Box>
        </Box>
      ))}
    </Box>
  );
};
