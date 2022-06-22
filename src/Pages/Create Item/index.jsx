import { Grid } from "@mui/material";
import React, { useState } from "react";
import { NewItemDetails } from "./Details";
import { CreateItemHeader } from "./Header";
import defaultimg from "../../assets/Images/CreateItem/defaultimg.jpg";
import { Box } from "@mui/system";
import { Flex } from "components/UI/Flex";
import { NunitoText } from "components/UI/NunitoText";
export const CreateItem = () => {
  const [url, setUrl] = useState(defaultimg);

  return (
    <Flex
      sx={{
        margin: "5px 5%",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        marginBottom: "5rem",
      }}
    >
      <CreateItemHeader />
      <Grid container spacing={6}>
        <Grid item xs={12} md={8}>
          <NewItemDetails setUrl={setUrl} />
        </Grid>
        <Grid item xs={12} md={4}>
          <Box
            sx={{
              height: 400,
              width: "100%",
            }}
          >
            <NunitoText sx={{ marginBottom: "1rem", fontWeight: 700 }}>
              Preview
            </NunitoText>
            <img
              src={url}
              alt=""
              style={{
                objectFit: "cover",
                borderRadius: "8px",
                height: "100%",
              }}
            />
          </Box>
        </Grid>
      </Grid>
    </Flex>
  );
};
