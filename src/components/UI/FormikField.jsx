import { styled } from "@mui/material/styles";
import { TextField } from "@mui/material";

const Input = styled("input")(({ theme }) => ({
  outline: "1px solid gray",
  width: "100%",
  fontWeight: 500,
  borderRadius: "8px",
  padding: "10px 10px",
  height: 52,
  fontFamily: "Manrope",
  color: "rgba(71,85,105)",
  transition: "box-shadow .5s ease-in-out",
  background: "white",
  "&:focus": {
    outline: "1px solid #6764f0",
    transition: "box-shadow .5s ease",
    boxShadow: "0 1rem 3rem rgba(0,0,0,.175)",
    background: "white",
  },
}));

function FormField({ name, placeholder, ...rest }) {
  return (
    <Input autoComplete="off" name={name} {...rest} placeholder={placeholder} />
  );
}

export default FormField;
