import { Checkbox, FormControlLabel, styled } from "@mui/material";
import { CustomButton } from "components/UI/Button";
import { Flex } from "components/UI/Flex";
import ImageInput from "components/UI/ImageInput";
import { Input } from "components/UI/Input";
import { Label } from "components/UI/Label";
import { TextArea } from "components/UI/TextArea";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import SelectType from "./Select";
const Form = styled("form")(({ theme }) => ({}));
export const EditProfileDetails = () => {
  return (
    <Form>
      <Flex
        sx={{
          flexDirection: "column",
          alignItems: "flex-start",
          marginBottom: 3,
        }}
      >
        <Label>Name</Label>
        <Input placeholder="Add Name" type={"text"} />
      </Flex>
      <Flex
        sx={{
          flexDirection: "column",
          alignItems: "flex-start",
          marginBottom: 3,
        }}
      >
        <Label>Email</Label>
        <Input placeholder="Add Email" type={"email"} />
      </Flex>
      <Flex
        sx={{
          flexDirection: "column",
          alignItems: "flex-start",
          marginBottom: 5,
        }}
      >
        <Label>Bio</Label>
        <TextArea placeholder="Add Bio" />
      </Flex>
      <Flex
        sx={{
          flexDirection: "column",
          alignItems: "flex-start",
          marginBottom: 3,
          width: "100%",
        }}
      >
        <ImageInput />
      </Flex>
      <Flex
        sx={{
          flexDirection: "column",
          alignItems: "flex-start",
          marginBottom: 3,
          width: "100%",
        }}
      >
        <SelectType />
      </Flex>
      <Flex
        sx={{
          flexDirection: "column",
          alignItems: "flex-start",
          marginBottom: 3,
        }}
      >
        <Label>Facebook UserName</Label>
        <Input placeholder="Enter Your facebook account" />
      </Flex>
      <Flex
        sx={{
          flexDirection: "column",
          alignItems: "flex-start",
          marginBottom: 5,
        }}
      >
        <Label>Twitter UserName</Label>
        <Input placeholder="Enter twitter account" />
      </Flex>

      <Flex
        sx={{
          alignItems: "flex-start",
          marginBottom: 3,
        }}
      >
        {" "}
        <CustomButton endIcon={<HiOutlineArrowNarrowRight />}>
          Update Profile
        </CustomButton>
      </Flex>
    </Form>
  );
};
