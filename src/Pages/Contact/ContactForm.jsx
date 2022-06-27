import { useFormik } from "formik";
import * as yup from "yup";
import { Box, Button } from "@mui/material";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import { styled } from "@mui/material/styles";
import Error from "components/UI/Error";
import FormField from "components/UI/FormikField";
import { Flex } from "components/UI/Flex";
import { TextArea } from "components/UI/TextArea";
import { NunitoText } from "components/UI/NunitoText";

const Form = styled("form")(({ theme }) => ({}));

const initialValues = {
  email: "",
  password: "",
};

//creating the validation schema
const validationSchema = yup.object().shape({
  name: yup
    .string()
    .required("Name is required")
    .min(2, "Name must be at least 2 characters"),
  email: yup.string().email("Invalid email").required("Required"),
});

export const ContactForm = ({ onSubmit }) => {
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });
  const navigate = useNavigate();
  const emailProps = formik.getFieldProps("email");
  const nameProps = formik.getFieldProps("name");
  return (
    <>
      <Flex sx={{ marginBottom: 3 }}>
        <NunitoText sx={{ fontSize: "1.5rem", fontWeight: 700 }}>
          Send Message
        </NunitoText>
      </Flex>
      <Form
        onSubmit={({ values, FormikBag }) => {
          FormikBag.resetForm({});
        }}
      >
        <Flex
          sx={{
            flexDirection: "column",
            alignItems: "flex-start",
            height: 90,
          }}
        >
          <FormField
            label="First Name"
            type="text"
            placeholder="Name..."
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
            height: 90,
          }}
        >
          <FormField
            label="Email"
            type="email"
            placeholder="Email ..."
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
            height: 90,
          }}
        >
          <FormField label="subject" type="etext" placeholder="Subject" />
        </Flex>
        <Flex
          sx={{
            flexDirection: "column",
            alignItems: "flex-start",
          }}
        >
          <TextArea placeholder="Your Message" />
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
              fontWeight: 500,
              fontSize: "16px",
              padding: "10px 30px",
              "&:hover": {
                background: "#699dff",
              },
              "&:disabled": {
                cursor: "not-allowed",
                opacity: "0.5",
                color: "white",
              },
            }}
            endIcon={<HiOutlineArrowNarrowRight />}
          >
            Send Message
          </Button>
        </Box>
      </Form>
    </>
  );
};
