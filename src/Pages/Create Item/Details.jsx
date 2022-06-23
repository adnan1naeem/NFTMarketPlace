import {
  Button,
  Checkbox,
  FormControlLabel,
  styled,
  Typography,
} from "@mui/material";
import { Flex } from "components/UI/Flex";
import ImageInput from "components/UI/ImageInput";
import React, { useState } from "react";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
const Form = styled("form")(({ theme }) => ({}));
const Label = styled(Typography)(({ theme }) => ({
  fontFamily: "Nunito",
  fontSize: 16,
  color: "#475569",
  marginBottom: "10px",
  fontWeight: 700,
}));
const Input = styled("input")(({ theme }) => ({
  outline: "1px solid rgba(71,85,105)",
  width: "100%",
  fontWeight: 500,
  borderRadius: "8px",
  padding: "10px 10px",
  fontFamily: "Manrope",
  color: "rgba(71,85,105)",
  transition: "box-shadow .5s ease-in-out",
  "&:focus": {
    outline: "1px solid #6764f0",
    transition: "box-shadow .5s ease",
    boxShadow: "0 1rem 3rem rgba(0,0,0,.175)",
  },
}));
const TextArea = styled("textarea")(({ theme }) => ({
  outline: "1px solid rgba(71,85,105)",
  minHeight: 130,
  width: "100%",
  fontWeight: 500,
  borderRadius: "8px",
  padding: "10px 10px",
  fontFamily: "Manrope",
  color: "rgba(71,85,105)",
  transition: "box-shadow .5s ease-in-out",
  "&:focus": {
    outline: "1px solid #6764f0",
    transition: "box-shadow .5s ease",
    boxShadow: "0 1rem 3rem rgba(0,0,0,.175)",
  },
}));
const CustomButton = styled(Button)(({ theme }) => ({
  background: "#6764f0",
  color: "white",
  fontWeight: 600,
  padding: "10px",
  fontFamily: "Nunito",
  marginTop: "2rem",
  "&:hover": {
    background: "#699dff",
  },
}));
export const NewItemDetails = ({ setUrl }) => {
  return (
    <Form>
      <Flex
        sx={{
          flexDirection: "column",
          alignItems: "flex-start",
          marginBottom: 3,
        }}
      >
        <Label>Title</Label>
        <Input placeholder="eg: Cybar Boss & Mega Boss #3 " type={"text"} />
      </Flex>
      <Flex
        sx={{
          flexDirection: "column",
          alignItems: "flex-start",
          marginBottom: 5,
        }}
      >
        <Label>Description</Label>
        <TextArea placeholder="eg: Cybar Boss & Mega Boss #3 " />
      </Flex>
      <Flex
        sx={{
          flexDirection: "column",
          alignItems: "flex-start",
          marginBottom: 3,
          width: "100%",
        }}
      >
        <ImageInput setUrl={setUrl} />
      </Flex>
      <Flex
        sx={{
          flexDirection: "column",
          alignItems: "flex-start",
          marginBottom: 3,
        }}
      >
        <Label>Price</Label>
        <Input placeholder="Enter Your Price" />
      </Flex>
      <Flex
        sx={{
          flexDirection: "column",
          alignItems: "flex-start",
          marginBottom: 5,
        }}
      >
        <Label>Offer Price</Label>
        <Input placeholder="Suggested 0, 10%, 20% 30% Maximum is 70% " />
      </Flex>
      <Flex
        sx={{
          alignItems: "flex-start",
          marginBottom: 3,
          flexWrap: "wrap",
        }}
      >
        <FormControlLabel
          sx={{ color: "#475569" }}
          control={<Checkbox name="gilad" />}
          label="Put on Sale"
        />
        <FormControlLabel
          sx={{ color: "#475569" }}
          control={<Checkbox name="gilad" />}
          label="Instant Sale Price"
        />
        <FormControlLabel
          sx={{ color: "#475569" }}
          control={<Checkbox name="gilad" />}
          label="Unlock Purchased"
        />
      </Flex>
      <Flex
        sx={{
          alignItems: "flex-start",
          marginBottom: 3,
        }}
      >
        {" "}
        <CustomButton endIcon={<HiOutlineArrowNarrowRight />}>
          Create Item
        </CustomButton>
      </Flex>
    </Form>
  );
};
