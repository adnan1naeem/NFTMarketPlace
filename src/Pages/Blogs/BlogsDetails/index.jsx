import { Box } from "@mui/material";
import React from "react";
import { AboutAuthor } from "./AboutCreator";
import { CommentsForm } from "./CommentsForm";
import { FormHeader } from "./CommentsForm/FormHeader";
import { ExistingComments } from "./ExistingComments";
export const BlogDetails = () => {
  return (
    <Box sx={{ margin: "5% 7%" }}>
      <AboutAuthor />
      <ExistingComments />
      <FormHeader />
      <CommentsForm />
    </Box>
  );
};
