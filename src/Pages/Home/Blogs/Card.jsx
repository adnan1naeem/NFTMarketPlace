import { styled } from "@mui/material";
import React from "react";
import { Box, Typography } from "@mui/material";
import { blogsData } from "assets/Data";
import { FaCalendarAlt, FaRegCommentDots } from "react-icons/fa";
import { BsArrowDownRight } from "react-icons/bs";
const Root = styled(Box)(({ theme }) => ({
  margin: "10px 7%",
  flexWrap: "wrap",
  alignItems: "center",
  display: "flex",
  justifyContent: "center",
  [theme.breakpoints.down("md")]: {
    margin: "0px 0%",
    justifyContent: "center",
  },
}));
const Thumbnail = styled("div")(({ theme }) => ({
  borderRadius: "8px",
  width: "400px",
  height: "580px",
  marginRight: "2rem",
  overflow: "hidden",
  marginTop: "2rem",
  transition: "box-shadow .5s ease-in-out",
  "&:hover": {
    boxShadow: "0 1rem 3rem rgba(0,0,0,.175)",
    cursor: "pointer",
    transition: "box-shadow .5s ease",
  },
  [theme.breakpoints.down("md")]: {
    width: "330px",
    // marginRight: "0rem",
  },
  [theme.breakpoints.down("sm")]: {
    width: "330px",
    marginRight: "0rem",
  },
  [theme.breakpoints.only("xs")]: {
    width: "350px",
    marginRight: "0rem",
  },
}));
const Image = styled("img")(({ theme }) => ({
  width: "100%",
  height: "16rem",
  borderRadius: 8,
  transition: "transform .5s ease-in-out",
  "&:hover": {
    transform: "scale(1.05)",
    transition: "transform .5s ease",
  },
}));
const Heading = styled("p")(({ theme }) => ({
  color: "#0F172A",
  fontSize: "20px",
  fontWeight: 600,
  maxWidth: "80%",
  textAlign: "left",
  fontFamily: "Nunito",
  marginBottom: 9,
}));
export const Flex = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  // flexWrap: "wrap",
}));
export const Text = styled(Typography)(({ theme }) => ({
  color: "#475569",
  fontSize: "16px",
  fontWeight: 500,
  maxWidth: "90%",
  textAlign: "left",
  fontFamily: "Manrope",
  marginBottom: 9,
}));
export const Card = () => {
  return (
    <Root>
      {blogsData.map((item) => (
        <Thumbnail key={item.id}>
          <Box sx={{ height: "20rem" }}>
            <Image src={item.img} />
          </Box>
          <Box padding="0px 20px 10px 20px">
            <Heading>{item.heading}</Heading>
            <Flex sx={{ marginBottom: "25px", marginTop: "15px" }}>
              <Flex>
                <FaCalendarAlt
                  style={{ color: "#6366F1", marginRight: "3px" }}
                />
                {item.date}
              </Flex>
              <Flex>
                <FaRegCommentDots
                  style={{ color: "#6366F1", margin: "0px 5px 0px 25px" }}
                />
                {item.numCmt}
              </Flex>
            </Flex>
            <Text>{item.text}</Text>
            <Flex
              sx={{
                color: "#6366F1",
                "&:hover": { textDecoration: "underline" },
                margin: "20px 0px",
              }}
            >
              <Text sx={{ color: "#6366F1" }}>Read More </Text>
              <BsArrowDownRight
                style={{
                  margin: "0px 0px 10px 5px",
                }}
              />
            </Flex>
          </Box>
        </Thumbnail>
      ))}
    </Root>
  );
};
