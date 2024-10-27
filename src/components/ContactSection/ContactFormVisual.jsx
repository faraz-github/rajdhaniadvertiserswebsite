import { Stack } from "@mui/material";

const ContactFormVisual = () => {
  return (
    <Stack
      sx={{
        backgroundColor: (theme) => theme.palette.brandRed,
        borderRadius: (theme) => theme.shape.borderRadius,
        width: "100%",
      }}
      spacing={5}
      justifyContent={"space-around"}
      alignItems={"center"}
      py={5}
    >
      <img
        src="/images/light-bulb.svg"
        alt="light-bulb"
        style={{
          width: 64,
          height: "auto",
        }}
      />
      <img
        src="/images/question-mark.svg"
        alt="question-mark"
        style={{
          width: 64,
          height: "auto",
        }}
      />
      <img
        src="/images/chat-bubble.svg"
        alt="chat-bubble"
        style={{
          width: 64,
          height: "auto",
        }}
      />
    </Stack>
  );
};

export default ContactFormVisual;
