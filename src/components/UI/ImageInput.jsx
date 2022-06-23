import ReactFileReader from "react-file-reader";
import { Box, Button, styled } from "@mui/material";
import { AiOutlineCloudUpload } from "react-icons/ai";
import { NunitoText } from "./NunitoText";
const Root = styled(Box)(({ theme }) => ({
  borderRadius: "8px",
  border: "2px dashed rgba(203,213,225)",
  width: "100%",
  height: "13rem",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));
const CustomButton = styled(Button)(({ theme }) => ({
  background: "rgba(203,213,225)",
  color: "#475569",
  fontWeight: 600,
  padding: "10px",
  fontFamily: "Nunito",
  "&:hover": {
    background: "#699dff",
  },
}));
export default function ImageInput({ setUrl }) {
  const handleFiles = (files) => {
    setUrl(files.base64);
  };

  return (
    <Root>
      <ReactFileReader
        fileTypes={[".png", ".jpg", ".png", ".gif", ".webp"]}
        base64={true}
        handleFiles={handleFiles}
      >
        <Box>
          <NunitoText
            sx={{ marginBottom: "10px", color: "#475569", fontWeight: 600 }}
          >
            PNG, JPG, GIF, WEBP or MP4, MAX 300mb.
          </NunitoText>
          <CustomButton endIcon={<AiOutlineCloudUpload />}>
            Choose File
          </CustomButton>{" "}
        </Box>
      </ReactFileReader>
    </Root>
  );
}
