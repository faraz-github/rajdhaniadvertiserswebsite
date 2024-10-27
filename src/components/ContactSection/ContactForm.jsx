import { useState } from "react";

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
  const { name, email, phone, message } = formData;

  const onChangeHandler = (event) => {
    setFormData((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    console.log({ formData });
    const phoneRegex = /^(?:\+91)?\d{10}$/;
    if (phoneRegex.test(phone)) {
      alert("Phone number is valid!");
    } else {
      alert("Please enter a valid Indian phone number.");
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
            <CustomRedButton buttonTitle="Send Message" />
          </Stack>
        </Stack>
      </form>
    </Stack>
  );
};

export default ContactForm;
