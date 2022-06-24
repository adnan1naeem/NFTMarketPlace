import { blogsData } from "assets/Data";
import React from "react";
import { BlogCard } from "./Card";

export const Blogs = () => {
  return <BlogCard data={blogsData} />;
};
