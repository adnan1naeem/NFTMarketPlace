import { useFormik } from "formik";
import * as yup from "yup";
import { Box, Button, Typography } from "@mui/material";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

import { useNavigate } from "react-router-dom";
import { styled } from "@mui/material/styles";
import Error from "components/UI/Error";
import FormField from "components/UI/FormikField";
import { Flex } from "components/UI/Flex";
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
};

//creating the validation schema
const validationSchema = yup.object().shape({
  email: yup.string().email("Invalid email").required("Required"),
});

function ForgotPasswordForm({ onSubmit }) {
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });
  const navigate = useNavigate();
  const emailProps = formik.getFieldProps("email");
  const passwordProps = formik.getFieldProps("password");
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
            disabled={!formik.isValid}
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
            Get Code
          </Button>
        </Box>
      </Form>
    </>
  );
}

export default ForgotPasswordForm;
