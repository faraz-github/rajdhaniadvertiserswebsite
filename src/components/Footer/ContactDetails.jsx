import { Stack, Typography } from "@mui/material";

const ContactDetails = () => {
  return (
    <Stack spacing={2}>
      <Typography variant="h5" color="primary" gutterBottom>
        Reach Us
      </Typography>
      <Stack spacing={2}>
        <Stack direction={"row"} spacing={1} alignItems={"center"}>
          <img
            src="/images/phone-icon.svg"
            alt="Logo"
            style={{
              maxWidth: 20,
              height: "auto",
            }}
          />
          <Typography variant="body2" color="primary">
            9955995599
          </Typography>
        </Stack>
        <Stack direction={"row"} spacing={1} alignItems={"center"}>
          <img
            src="/images/email-icon.svg"
            alt="Logo"
            style={{
              maxWidth: 20,
              height: "auto",
            }}
          />
          <Typography variant="body2" color="primary">
            info@rajdhaniadvertisers.com
          </Typography>
        </Stack>
        <Stack direction={"row"} spacing={2} alignItems={"center"}>
          <img
            src="/images/whatsapp-icon.svg"
            alt="Logo"
            style={{
              maxWidth: 20,
              height: "auto",
            }}
          />
          <img
            src="/images/instagram-icon.svg"
            alt="Logo"
            style={{
              maxWidth: 20,
              height: "auto",
            }}
          />
          <img
            src="/images/facebook-icon.svg"
            alt="Logo"
            style={{
              maxWidth: 20,
              height: "auto",
            }}
          />
        </Stack>
        <span>
          Website done by:
          <a
            href="https://iamfaraz.dev/"
            target="_blank"
            style={{ color: "#f35e3e" }}
          >
            Faraz Ahmad
          </a>
        </span>
      </Stack>
    </Stack>
  );
};

export default ContactDetails;
