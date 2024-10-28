import { useState } from "react";

import {
  Container,
  IconButton,
  Typography,
  useMediaQuery,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

import FeedbackCard from "./FeedbackCard";

const feedbacks = [
  {
    clientName: "Rajeev",
    clientFeedback:
      "Working with Rajdhani Advertisers transformed our marketing strategy. Their innovative outdoor campaigns helped us reach a wider audience, and we saw a significant increase in foot traffic to our stores!",
  },
  {
    clientName: "Arjun Singh",
    clientFeedback:
      "The team at Rajdhani Advertisers really understands how to make an impact in outdoor spaces. Our billboard ads were eye-catching and drove a noticeable uptick in inquiries. Highly recommend!",
  },
  {
    clientName: "Sameer Malik",
    clientFeedback:
      "We've partnered with Rajdhani Advertisers for multiple campaigns, and they've consistently delivered exceptional results. Their creative approach to outdoor advertising sets them apart.",
  },
  {
    clientName: "Ted Josh",
    clientFeedback:
      "Working with Rajdhani Advertisers transformed our marketing strategy. Their innovative outdoor campaigns helped us reach a wider audience, and we saw a significant increase in foot traffic to our stores!",
  },
  {
    clientName: "ACC Cement",
    clientFeedback:
      "The team at Rajdhani Advertisers really understands how to make an impact in outdoor spaces. Our billboard ads were eye-catching and drove a noticeable uptick in inquiries. Highly recommend!",
  },
];

const FeedbackSection = () => {
  const isNotDesktop = useMediaQuery("(max-width:1200px)");
  const [currentFeedbackIndex, setCurrentFeedbackIndex] = useState(1);
  const [currentFeedbackIndexMobile, setCurrentFeedbackIndexMobile] =
    useState(0);

  const handleLeftClick = () => {
    if (currentFeedbackIndex > 1) {
      setCurrentFeedbackIndex(currentFeedbackIndex - 1);
    }
    if (currentFeedbackIndexMobile > 0) {
      setCurrentFeedbackIndexMobile(currentFeedbackIndexMobile - 1);
    }
  };

  const handleRightClick = () => {
    if (currentFeedbackIndex < feedbacks.length - 2) {
      setCurrentFeedbackIndex(currentFeedbackIndex + 1);
    }
    if (currentFeedbackIndexMobile < feedbacks.length - 1) {
      setCurrentFeedbackIndexMobile(currentFeedbackIndexMobile + 1);
    }
  };

  return (
    <Container sx={{ py: { xs: 5, md: 10 } }}>
      <Typography
        variant="h2"
        color="secondary"
        fontSize={{ xs: 24, md: 32 }}
        textAlign="center"
        gutterBottom
      >
        Client Experiences
      </Typography>
      <Grid container mt={5}>
        <Grid
          size={{ xs: 2, md: 1 }}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <IconButton size="large" color="secondary" onClick={handleLeftClick}>
            <ChevronLeftIcon />
          </IconButton>
        </Grid>
        <Grid size={{ xs: 8, md: 10 }}>
          <Grid container spacing={2}>
            <Grid size={{ xs: 0, md: 4 }} display={{ xs: "none", md: "flex" }}>
              <FeedbackCard
                clientName={feedbacks[
                  currentFeedbackIndex - 1
                ]?.clientName.toString()}
                clientFeedback={feedbacks[
                  currentFeedbackIndex - 1
                ]?.clientFeedback.toString()}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
              <FeedbackCard
                clientName={
                  isNotDesktop
                    ? feedbacks[
                        currentFeedbackIndexMobile
                      ]?.clientName.toString()
                    : feedbacks[currentFeedbackIndex]?.clientName.toString()
                }
                clientFeedback={
                  isNotDesktop
                    ? feedbacks[
                        currentFeedbackIndexMobile
                      ]?.clientFeedback.toString()
                    : feedbacks[currentFeedbackIndex]?.clientFeedback.toString()
                }
              />
            </Grid>
            <Grid size={{ xs: 0, md: 4 }} display={{ xs: "none", md: "flex" }}>
              <FeedbackCard
                clientName={feedbacks[
                  currentFeedbackIndex + 1
                ]?.clientName.toString()}
                clientFeedback={feedbacks[
                  currentFeedbackIndex + 1
                ]?.clientFeedback.toString()}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid
          size={{ xs: 2, md: 1 }}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <IconButton size="large" color="secondary" onClick={handleRightClick}>
            <ChevronRightIcon />
          </IconButton>
        </Grid>
      </Grid>
    </Container>
  );
};

export default FeedbackSection;
