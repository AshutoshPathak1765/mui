import { Box } from "@mui/material";
import React from "react";
import Post from "./Post";

function Feed() {
  return (
    <Box flex={4} p={2}>
      <Post title="John Doe" subheader="2nd October,2023" />
      <Post title="Jonathan Dadia" subheader="2nd October,2023" />
    </Box>
  );
}

export default Feed;
