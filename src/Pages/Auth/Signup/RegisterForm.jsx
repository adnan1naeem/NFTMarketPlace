import { useFormik } from "formik";
import * as yup from "yup";
import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  Typography,
} from "@mui/material";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

import { useNavigate } from "react-router-dom";
import { styled } from "@mui/material/styles";
import Error from "components/UI/Error";
import FormField from "components/UI/FormikField";
import { Flex } from "components/UI/Flex";
import { ManropeText } from "components/UI/ManropeText";
import { useState } from "react";
const Label = styled(Typography)(({ theme }) => ({
  fontFamily: "Manrope",
  fontSize: 16,
  color: "#475569",
  marginBottom: "10px",
  fontWeight: 500,
}));
const Form = styled("form")(({ theme }) => ({}));

const initialValues = {
  email: "",
  password: "",
};

//creating the validation schema
const validationSchema = yup.object().shape({
  firstName: yup
    .string()
    .required("First Name is required")
    .min(2, "Name must be at least 2 characters"),
  lastName: yup
    .string()
    .required("Last Name is required")
    .min(2, "Name must be at least 2 characters"),
  email: yup.string().email("Invalid email").required("Required"),
  password: yup
    .string()
    .required("Please enter your password")
    .matches(
      /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
      "Password must contain at least 8 characters, one uppercase, one number and one special case character"
    ),
});

function RegisterForm({ onSubmit }) {
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });
  const navigate = useNavigate();
  const nameProps = formik.getFieldProps("firstName");
  const lastNameProps = formik.getFieldProps("lastName");
  const emailProps = formik.getFieldProps("email");
  const passwordProps = formik.getFieldProps("password");
  const [checked, setChecked] = useState(false);
  return (
    <>
      <Form
        onSubmit={({ values, FormikBag }) => {
          FormikBag.resetForm({});
        }}
      >
        <Flex
          sx={{
            flexDirection: "column",
            alignItems: "flex-start",
            height: 120,
          }}
        >
          <Label>First Name *</Label>

          <FormField
            label="First Name"
            type="text"
            placeholder="Enter Your First Name"
            {...nameProps}
          />
          {formik.touched.email && formik.errors.email ? (
            <Error message={formik.errors.firstName} />
          ) : null}
        </Flex>
        <Flex
          sx={{
            flexDirection: "column",
            alignItems: "flex-start",
            height: 120,
          }}
        >
          <Label>Last Name *</Label>

          <FormField
            label="Last Name"
            type="text"
            placeholder="Enter Your Last Name"
            {...lastNameProps}
          />
          {formik.touched.email && formik.errors.email ? (
            <Error message={formik.errors.lastName} />
          ) : null}
        </Flex>
        <Flex
          sx={{
            flexDirection: "column",
            alignItems: "flex-start",
            height: 120,
          }}
        >
          <Label>Email *</Label>

          <FormField
            label="Email"
            type="email"
            placeholder="Please Enter your email"
            {...emailProps}
          />
          {formik.touched.email && formik.errors.email ? (
            <Error message={formik.errors.email} />
          ) : null}
        </Flex>

        <Flex
          sx={{
            flexDirection: "column",
            alignItems: "flex-start",
            height: 120,
          }}
        >
          <Label>Password *</Label>
          <FormField
            label="Password"
            type="password"
            placeholder="Please Enter your password"
            {...passwordProps}
          />
          {formik.touched.password && formik.errors.password ? (
            <Error message={formik.errors.password} />
          ) : null}
        </Flex>
        <Flex>
          <FormControlLabel
            sx={{ color: "#475569", fontFamily: "Manrope" }}
            control={
              <Checkbox
                name="gilad"
                onChange={(e) => setChecked(e.target.checked)}
              />
            }
            // label="Remember me"
          />
          <ManropeText
            sx={{
              color: "#475569",
              fontWeight: 500,
              cursor: "pointer",
            }}
            onClick={() => navigate("/forgotpassword")}
          >
            I have read and agree to the website{" "}
            <span
              style={{
                "&:hover": {
                  textDecoration: "underline",
                },
              }}
            >
              terms and conditions *
            </span>
          </ManropeText>
        </Flex>
        <Box
          marginTop={"3rem"}
          marginBottom="2rem"
          display={"flex"}
          justifyContent="flex-start"
        >
          <Button
            type="submit"
            valid={formik.isValid}
            dirty={formik.dirty}
            disabled={!formik.isValid || !checked}
            sx={{
              background: "#6764f0",
              color: "white",
              fontFamily: "Manrope",
              fontWeight: 600,
              fontSize: "16px",
              padding: "10px 30px",
              "&:hover": {
                background: "#699dff",
              },
              "&:disabled": {
                cursor: "not-allowed",
                opacity: "0.5",
              },
            }}
            endIcon={<HiOutlineArrowNarrowRight />}
          >
            Sign Up
          </Button>
        </Box>
      </Form>
    </>
  );
}

export default RegisterForm;
