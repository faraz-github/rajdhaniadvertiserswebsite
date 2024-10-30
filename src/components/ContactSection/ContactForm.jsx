import { useState } from "react";
import axios from "axios";

import { Box, FormLabel, Stack, TextField, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";

import { CustomRedButton } from "../ui/CustomButtons";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const { name, email, phone, message } = formData;

  const onChangeHandler = (event) => {
    setFormData((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    setLoading(true);

    const phoneRegex = /^(?:\+91)?\d{10}$/;
    if (phoneRegex.test(phone)) {
      try {
        const apiKey =
          "ab686dde04985d9263e440295d2b3c6d08331fa8d15cca52d2ca2b1dcd495b8f";
        const response = await axios.post(
          `http://localhost:5000/api/contact-form/rajdhani-advertisers/${apiKey}/create`,
          formData
        );
        console.log("Response:", response.data);
        alert("Contact form submitted successfully!");
        setLoading(false);
      } catch (error) {
        console.error("Error submitting form:", error);
        alert("There was an error submitting the form. Please try again.");
        setLoading(false);
      }
    } else {
      alert("Please enter a valid Indian phone number.");
      setLoading(false);
    }
  };

  return (
    <Stack>
      <Typography
        variant="h3"
        color="primary"
        fontSize={{ sm: 24, xs: 20 }}
        gutterBottom
      >
        Write us here
      </Typography>
      <form onSubmit={onSubmitHandler}>
        <Stack spacing={2}>
          <Box>
            <FormLabel>
              <Typography variant="h5" color={"primary.light"} gutterBottom>
                Name
              </Typography>
            </FormLabel>
            <TextField
              fullWidth
              variant="outlined"
              type="text"
              name="name"
              value={name}
              onChange={onChangeHandler}
              required
              placeholder="Please write your full name"
              sx={{
                borderRadius: (theme) => theme.shape.borderRadius,
                backgroundColor: (theme) => theme.palette.brandOrangeLight,
              }}
            />
          </Box>
          <Grid container spacing={2}>
            <Grid size={{ xs: 12, md: 6 }}>
              <FormLabel>
                <Typography variant="h5" color={"primary.light"} gutterBottom>
                  Email
                </Typography>
              </FormLabel>
              <TextField
                fullWidth
                variant="outlined"
                type="email"
                name="email"
                value={email}
                onChange={onChangeHandler}
                required
                placeholder="Please write your email"
                sx={{
                  borderRadius: (theme) => theme.shape.borderRadius,
                  backgroundColor: (theme) => theme.palette.brandOrangeLight,
                }}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <FormLabel>
                <Typography variant="h5" color={"primary.light"} gutterBottom>
                  Phone
                </Typography>
              </FormLabel>
              <TextField
                fullWidth
                variant="outlined"
                type="tel"
                name="phone"
                value={phone}
                onChange={onChangeHandler}
                required
                placeholder="Please write your phone"
                sx={{
                  borderRadius: (theme) => theme.shape.borderRadius,
                  backgroundColor: (theme) => theme.palette.brandOrangeLight,
                }}
              />
            </Grid>
          </Grid>
          <Box>
            <FormLabel>
              <Typography variant="h5" color={"primary.light"} gutterBottom>
                Message
              </Typography>
            </FormLabel>
            <TextField
              multiline
              minRows={2}
              fullWidth
              variant="outlined"
              type="text"
              name="message"
              value={message}
              onChange={onChangeHandler}
              required
              placeholder="Please write your message"
              sx={{
                borderRadius: (theme) => theme.shape.borderRadius,
                backgroundColor: (theme) => theme.palette.brandOrangeLight,
              }}
            />
          </Box>
          <Stack direction={"row"} justifyContent={"flex-end"}>
            <CustomRedButton buttonTitle="Send Message" disabled={loading} />
          </Stack>
        </Stack>
      </form>
    </Stack>
  );
};

export default ContactForm;
