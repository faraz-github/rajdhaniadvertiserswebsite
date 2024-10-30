import PropTypes from "prop-types";
import { useState } from "react";

import { Box, FormLabel, Stack, TextField, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";

import CustomModal from "../ui/CustomModal";
import axios from "axios";
import { CustomRedButton } from "../ui/CustomButtons";

const AdNowModal = ({ open, setOpen }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    details: "",
  });

  const [loading, setLoading] = useState(false);
  const { name, email, phone, details } = formData;

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
          `http://localhost:5000/api/booking-form/rajdhani-advertisers/${apiKey}/create`,
          formData
        );
        console.log("Response:", response.data);
        alert("Ad form submitted successfully!");
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
    <CustomModal
      width={{ xs: 375, sm: 500, md: 800 }}
      height={"fit-content"}
      open={open}
      setOpen={setOpen}
    >
      <Box
        sx={{
          maxHeight: "100%",
          overflow: "hidden",
          overflowY: "scroll",
        }}
      >
        <Stack>
          <Typography
            variant="h3"
            color="primary"
            fontSize={{ sm: 24, xs: 20 }}
            gutterBottom
          >
            Ad Today - Be Visible in Outdoors
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
                    <Typography
                      variant="h5"
                      color={"primary.light"}
                      gutterBottom
                    >
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
                      backgroundColor: (theme) =>
                        theme.palette.brandOrangeLight,
                    }}
                  />
                </Grid>
                <Grid size={{ xs: 12, md: 6 }}>
                  <FormLabel>
                    <Typography
                      variant="h5"
                      color={"primary.light"}
                      gutterBottom
                    >
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
                      backgroundColor: (theme) =>
                        theme.palette.brandOrangeLight,
                    }}
                  />
                </Grid>
              </Grid>
              <Box>
                <FormLabel>
                  <Typography variant="h5" color={"primary.light"} gutterBottom>
                    Please tell us about your Outdoor Advertisement Requirement
                  </Typography>
                </FormLabel>
                <TextField
                  multiline
                  minRows={2}
                  fullWidth
                  variant="outlined"
                  type="text"
                  name="details"
                  value={details}
                  onChange={onChangeHandler}
                  required
                  placeholder="Example: I need a billboard in Lucknow for a new product launch targeting young adults. The ad should be vibrant and run for two months."
                  sx={{
                    borderRadius: (theme) => theme.shape.borderRadius,
                    backgroundColor: (theme) => theme.palette.brandOrangeLight,
                  }}
                />
              </Box>
              <Stack direction={"row"} justifyContent={"flex-end"}>
                <CustomRedButton buttonTitle="Get Quote" disabled={loading} />
              </Stack>
            </Stack>
          </form>
        </Stack>
      </Box>
    </CustomModal>
  );
};

AdNowModal.propTypes = {
  open: PropTypes.bool,
  setOpen: PropTypes.func,
};

export default AdNowModal;
