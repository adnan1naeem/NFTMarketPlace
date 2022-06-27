import { Box, styled } from "@mui/material";
import { ManropeText } from "components/UI/ManropeText";
import { NunitoText } from "components/UI/NunitoText";
import callIcon from "../../assets/Images/contact-icon.svg";
import mailIcon from "../../assets/Images/contact-icon2.svg";
import React from "react";
import { Flex } from "components/UI/Flex";
const Wrapper = styled(Box)(({ theme }) => ({
  background: "rgba(241,245,249)",
  borderRadius: "8px",
  padding: "5rem 1rem",
}));
const Heading = styled(NunitoText)(({ theme }) => ({
  fontSize: "1.5rem",
  fontWeight: 700,
  marginBottom: "1rem",
}));
const Text = styled(ManropeText)(({ theme }) => ({
  fontWeight: 400,
  lineHeight: "25px",
  marginBottom: 3,
}));
export const ContactInfo = () => {
  return (
    <Wrapper>
      <Heading>Get in touch</Heading>
      <Text>
        Adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis Etiam
        porta sem ipsum er malesuada magna mollis Nulla vitae elit libero, a
        pharetra augue. ibero, a pharetra augue Donec sed odio dui.
      </Text>
      <NunitoText sx={{ fontWeight: 700, marginBottom: 1 }}>
        Open Hours
      </NunitoText>
      <ManropeText sx={{ fontWeight: 400, marginBottom: 1 }}>
        Monday-Friday: 07AM - 5PM
      </ManropeText>
      <ManropeText sx={{ fontWeight: 400, marginBottom: 1 }}>
        Saturday-Sunday: 09AM - 5PM
      </ManropeText>
      <NunitoText sx={{ fontWeight: 700, marginBottom: 1 }}>
        Here following or contact information
      </NunitoText>
      <Flex sx={{ height: 50 }}>
        <img
          src={callIcon}
          alt=""
          style={{ height: "1.2rem", width: "1.2rem", marginRight: "0.5rem" }}
        />{" "}
        <ManropeText sx={{ fontWeight: 400 }}>+1 (123) 123 4567</ManropeText>
      </Flex>
      <Flex sx={{ height: 30 }}>
        <img
          src={mailIcon}
          alt=""
          style={{ height: "1.2rem", width: "1.2rem", marginRight: "0.5rem" }}
        />{" "}
        <ManropeText sx={{ fontWeight: 400 }}>support@themeix.com</ManropeText>
      </Flex>
    </Wrapper>
  );
};
