import { Checkbox, FormControlLabel, styled } from "@mui/material";
import { CustomButton } from "components/UI/Button";
import { Flex } from "components/UI/Flex";
import ImageInput from "components/UI/ImageInput";
import { Input } from "components/UI/Input";
import { Label } from "components/UI/Label";
import { TextArea } from "components/UI/TextArea";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
const Form = styled("form")(({ theme }) => ({}));
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
