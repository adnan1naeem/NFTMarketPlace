import { styled } from "@mui/material/styles";
import { Typography } from "@mui/material";

const CustomError = styled(Typography)(({ theme }) => ({
  color: "#ee4466",
  fontSize: "14px",
  marginLeft: 10,
  marginTop: 5,
}));

export default function Error(props) {
  const { message } = props;

  return <CustomError>{message}</CustomError>;
}
