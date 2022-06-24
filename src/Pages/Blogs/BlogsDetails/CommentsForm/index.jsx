import { Grid, styled } from "@mui/material";
import { CustomButton } from "components/UI/Button";
import { Flex } from "components/UI/Flex";
import { Input } from "components/UI/Input";
import { TextArea } from "components/UI/TextArea";
import React from "react";
const Form = styled("form")(({ theme }) => ({}));

export const CommentsForm = () => {
  return (
    <Form>
      <Grid container xs={12} md={8} spacing={3}>
        <Grid item xs={12} sm={6}>
          <Input placeholder="Name..." type="text" />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Input placeholder="Email" type={"email"} />
        </Grid>
        <Grid item xs={12}>
          <Input placeholder="Subject" type="text" />
        </Grid>
        <Grid item xs={12}>
          <TextArea placeholder="Comment" />
        </Grid>
        <Grid item xs={12}>
          <Flex sx={{ alignItems: "flex-start" }}>
            <CustomButton>Add Comment</CustomButton>
          </Flex>
        </Grid>
      </Grid>
    </Form>
  );
};
