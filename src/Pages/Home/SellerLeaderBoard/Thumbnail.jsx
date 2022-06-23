import React from "react";
import { styled } from "@mui/material";
import { Box } from "@mui/material";
import { BsCaretUpFill } from "react-icons/bs";
import { Flex, Text } from "../Blogs/Card";
import { Stats } from "./Stats";
import { Products } from "./Products";
import { sellerLeaderboardData } from "assets/Data";
import { NavLink } from "react-router-dom";
const Root = styled(Box)(({ theme }) => ({
  margin: "10px 7%",
}));
const Card = styled(Box)(({ theme }) => ({
  borderRadius: "8px",
  // width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginBottom: 30,
  padding: "1% 0%",
  transition: "box-shadow .5s ease-in-out",

  "&:hover": {
    boxShadow: "0 1rem 3rem rgba(0,0,0,.175)",
    transition: "box-shadow .5s ease",
    cursor: "pointer",
  },
}));
const Image = styled("img")(({ theme }) => ({
  width: "5rem",
  borderRadius: "40px",
  height: "5rem",
  objectFit: "cover",
  marginRight: "30px",
}));
export const Thumbnail = () => {
  return (
    <Root>
      {sellerLeaderboardData.map((item) => (
        <NavLink to={`/authors/${item?.id}`}><Card key={item.id}>
          <Flex>
            <Flex
              sx={{
                color: "rgba(15,23,42)",
                fontSize: "18px",
                fontWeight: 600,
                fontFamily: "Manrope",
                margin: "0px 10px",
              }}
            >
              <BsCaretUpFill style={{ color: "green", fontSize: "20px" }} />1
            </Flex>
            <Image src={item.pic} />
            <Text style={{ color: "#0F172A", fontSize: "18px" }}>
              {item.name}
            </Text>
          </Flex>
          <Stats />
          <Products items={item.items} />
        </Card></NavLink>
      ))}
    </Root>
  );
};
