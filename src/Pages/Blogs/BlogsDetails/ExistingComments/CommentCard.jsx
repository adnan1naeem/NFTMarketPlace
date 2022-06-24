import { Box, Grid, styled, Typography } from "@mui/material";
import { Flex } from "components/UI/Flex";
import { ManropeText } from "components/UI/ManropeText";
import React from "react";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
const Thumbnail = styled(Box)(({ theme }) => ({
  borderRadius: "8px",
  marginTop: "2rem",
  display: "flex",
  flexDirection: "column",
  flexWrap: "wrap",
  padding: "1.5rem 3rem 1.5rem 2rem",
  boxShadow: "0 .5rem 1rem rgba(0,0,0,0.15)",
  transition: "box-shadow .5s ease-in-out",
  "&:hover": {
    boxShadow: "0 1rem 3rem rgba(0,0,0,.175)",
    transition: "box-shadow .5s ease",
  },
}));
const Image = styled("img")(({ theme }) => ({
  width: "2.5rem",
  height: "2.5rem",
  objectFit: "cover",
  borderRadius: "40px",
}));
const Text = styled(Typography)(({ theme }) => ({
  fontFamily: "Nunito",
  color: "#0F172A",
  textAlign: "left",
  fontWeight: 700,
  fontSize: "16px",
  transition: "color .5s ease-in-out",
  cursor: "pointer",
  "&:hover": {
    color: "#6764f0",
    transition: "color .5s ease",
  },
}));
export const CommentCard = ({ data }) => {
  return (
    <Grid container md={8} sx={{ marginBottom: "3rem" }}>
      {data.map((item) => (
        <Grid item xs={12}>
          <Thumbnail>
            <ManropeText
              sx={{ size: "16px", fontWeight: 400, marginBottom: 2 }}
            >
              {item.text}
            </ManropeText>
            <Flex sx={{ justifyContent: "space-between" }}>
              <Flex sx={{ cursor: "pointer" }}>
                <Image src={item.img} alt="" />
                <Text sx={{ marginLeft: 1, fontWeight: 700 }}>{item.name}</Text>
              </Flex>
              <Flex sx={{ cursor: "pointer" }}>
                <Text sx={{ color: "#475569", fontWeight: 400 }}>Reply</Text>
                <HiOutlineArrowNarrowRight
                  style={{
                    marginLeft: "0.5rem",
                    pointer: "cursor",
                    color: "#475569",
                  }}
                />
              </Flex>
            </Flex>
          </Thumbnail>
        </Grid>
      ))}
    </Grid>
  );
};
