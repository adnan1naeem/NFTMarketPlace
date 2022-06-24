import { Box, Grid, styled, Typography, useMediaQuery } from "@mui/material";
import { Flex } from "components/UI/Flex";
import { ManropeText } from "components/UI/ManropeText";
import img from "../../../../assets/Images/Blogs/robert.jpg";
import React from "react";
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
  width: "6rem",
  height: "6rem",
  objectFit: "cover",
  borderRadius: "50px",
}));
const Text = styled(Typography)(({ theme }) => ({
  fontFamily: "Nunito",
  color: "#0F172A",
  textAlign: "left",
  fontWeight: 700,
  fontSize: "20px",
  transition: "color .5s ease-in-out",
  cursor: "pointer",
  "&:hover": {
    color: "#6764f0",
    transition: "color .5s ease",
  },
}));
export const CreatorCard = () => {
  const isMobile = useMediaQuery("(max-width:600px)");
  return (
    <Grid container md={8} sx={{ marginBottom: "3rem" }}>
      <Grid item xs={12}>
        <Thumbnail>
          <Flex
            sx={{
              flexDirection: isMobile ? "column" : "row",
            }}
          >
            <Image
              src={img}
              alt=""
              style={{ marginBottom: isMobile ? 15 : 0 }}
            />
            <Box sx={{ marginLeft: 3 }}>
              <Text>Robert Mill</Text>
              <ManropeText sx={{ fontWeight: 400 }}>
                I was born in Kansas, and like little Ellie, I always dreamed
                that a hurricane would take me ipsum somewhere to another
                country. And once I really ended up in another country - in
                China, to take studying at a business school.
              </ManropeText>
            </Box>
          </Flex>
          {/* <ManropeText
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
            </Flex> */}
        </Thumbnail>
      </Grid>
    </Grid>
  );
};
