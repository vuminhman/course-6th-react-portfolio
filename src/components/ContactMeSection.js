import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import { Box, Button, FormControl, FormErrorMessage, FormLabel, Heading, Input, Select, Textarea, VStack, } from "@chakra-ui/react";
import * as Yup from 'yup';
import FullScreenSection from "./FullScreenSection";
import useSubmit from "../hooks/useSubmit";
import { useAlertContext } from "../context/alertContext";

// Yup schema
const validationSchema = Yup.object({
  firstName: Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  type: Yup.string().required('Type is required'),
  comment: Yup.string().required('Comment is required')
});

const ContactMeSection = () => {
  const { isLoading, response, submit } = useSubmit();
  const { isOpen, onOpen } = useAlertContext();
  const [alertShown, setAlertShown] = useState(false);

  const formik = useFormik({
    initialValues: {
      firstName: 'Sample Name',
      email: 'your.email@example.com',
      type: 'hireMe',
      comment: `Hello [Your Name],

      I hope this message finds you well. My name is [Sample Name], and I came across your work online. I was particularly impressed with [mention a specific project, blog post, or piece of work that caught your eye].
      
      I'm reaching out because I have a freelance project that I believe aligns perfectly with your skillset. The project involves [provide a brief overview of the project, mentioning key tasks or technologies involved].
      
      I would love to discuss this opportunity further. Could we schedule a call sometime this week to discuss the project in more detail?
      
      Looking forward to hearing back from you soon.
      
      Best regards,
      [Sample Name]
      sample.email@example.com
      [Optional: Phone Number]
      
      Feel free to adapt this sample message as needed for your specific situation!`
    },
    onSubmit: async (values) => {
      event.preventDefault();
      const url = 'https://gmail.com'
      const result = await submit(url, values);
      if (result && result.type === 'success') {
        onOpen("Success", `Thanks ${values.firstName}, your message has been sent!`);
        formik.resetForm();
      } else if (result && result.type === 'error') {
        onOpen("Error", "Something went wrong, please try again.");
      }
    },    
    validationSchema,
  });
  
  useEffect(() => {
    if (response && !alertShown) {
      onOpen(response.type, response.message);
      setAlertShown(true);
    }
  }, [response]);

  useEffect(() => {
    if (isOpen) {

    } else {

      setAlertShown(false);
    }
  }, [isOpen]);

  return (
    <FullScreenSection
      isDarkBackground
      backgroundColor="#512DA8"
      py={16}
      spacing={8}
    >
      <VStack w="1024px" p={32} alignItems="flex-start">
        <Heading as="h1" id="contactme-section">
          Contact me
        </Heading>
        <Box p={6} rounded="md" w="100%">
          <form onSubmit={formik.handleSubmit}>
            <VStack spacing={4}>
              <FormControl isInvalid={formik.touched.firstName && formik.errors.firstName}>
                <FormLabel htmlFor="firstName">Name</FormLabel>
                <Input {...formik.getFieldProps('firstName')} />
                <FormErrorMessage>{formik.errors.firstName}</FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={formik.touched.email && formik.errors.email}>
                <FormLabel htmlFor="email">Email Address</FormLabel>
                <Input {...formik.getFieldProps('email')} />
                <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={formik.touched.type && formik.errors.type}>
                <FormLabel htmlFor="type">Type of enquiry</FormLabel>
                <Select {...formik.getFieldProps('type')}>
                  <option value="hireMe">Freelance project proposal</option>
                  <option value="openSource">Open source consultancy session</option>
                  <option value="other">Other</option>
                </Select>
              </FormControl>
              <FormControl isInvalid={formik.touched.comment && formik.errors.comment}>
                <FormLabel htmlFor="comment">Your message</FormLabel>
                <Textarea {...formik.getFieldProps('comment')} height={250} />
                <FormErrorMessage>{formik.errors.comment}</FormErrorMessage>
              </FormControl>
              <Button type="submit" colorScheme="purple" width="full" isLoading={isLoading}>
                Submit
              </Button>
            </VStack>
          </form>
        </Box>
      </VStack>
    </FullScreenSection>
  );
};

export default ContactMeSection;
