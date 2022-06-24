import { blogCommentsData } from "assets/Data";
import React from "react";
import { CommentCard } from "./CommentCard";

export const ExistingComments = () => {
  return <CommentCard data={blogCommentsData} />;
};
