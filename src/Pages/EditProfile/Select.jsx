import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { styled } from "@mui/material";
import { Flex } from "components/UI/Flex";

export default function SelectType() {
  const SelectOptions = styled("select")(({ theme }) => ({
    width: "100%",
    height: 50,
    borderRadius: 8,
    outline: "1px solid gray",
    fontFamily: "Manrope",
    color: "rgba(71,85,105)",
    transition: "box-shadow .5s ease-in-out",
    "&:focus": {
      outline: "1px solid #6764f0",
      transition: "box-shadow .5s ease",
      boxShadow: "0 1rem 3rem rgba(0,0,0,.175)",
    },
  }));
  return (
    <Flex sx={{ width: "100%" }}>
      <SelectOptions name="cars" id="cars">
        <option value="volvo">ETH</option>
        <option value="saab">DAR</option>
        <option value="opel">DRL</option>
      </SelectOptions>
    </Flex>
  );
}
