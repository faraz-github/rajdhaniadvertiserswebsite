import { Box, Container, Typography } from "@mui/material";
import FAQAccordion from "./FAQAccordion";

const FaqSection = () => {
  return (
    <Container sx={{ py: { xs: 5, md: 10 } }}>
      <Typography
        variant="h2"
        color="secondary"
        fontSize={{ xs: 24, md: 32 }}
        textAlign="center"
        gutterBottom
      >
        Frequently Asked Questions
      </Typography>
      <Box mt={5} maxWidth={1000} mx={"auto"}>
        <FAQAccordion
          question={
            "What types of outdoor advertising services do you offer?"
          }
          answer={
            "We offer a range of outdoor advertising services, including hoardings, signage, transit ads, wall ads, and billboards. Our services are designed to maximize your brand's visibility and ensure you effectively connect with your target audience. Whether you’re looking for large-scale campaigns or more localized advertising, we have the right solutions for you."
          }
        />
        <FAQAccordion
          question={
            "What are the benefits of outdoor advertising?"
          }
          answer={
            "Outdoor advertising offers key benefits for your business. It provides high visibility in busy areas, helping build brand awareness and recognition. You can effectively target specific demographics with strategically placed ads. It’s often cost-effective, delivering lower costs per impression. Plus, eye-catching designs create lasting impressions and encourage customer engagement. Overall, outdoor advertising is an effective tool to enhance your marketing strategy and drive growth."
          }
        />
        <FAQAccordion
          question={
            "Can you help with creative design?"
          }
          answer={
            "Yes, we can assist with creative design for outdoor advertisements! While we encourage clients to bring their own designs, our team is happy to provide guidance and suggestions to help enhance your concepts. We understand the unique requirements of outdoor advertising and can offer insights on what works best to capture attention."
          }
        />
      </Box>
    </Container>
  );
};

export default FaqSection;
