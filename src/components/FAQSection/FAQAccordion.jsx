import PropTypes from "prop-types";

import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const FAQAccordion = ({ question, answer }) => {
  return (
    <div>
      <Accordion variant="outlined">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography variant="h4" fontSize={{ xs: 12, md: 20 }}>
            {question}
          </Typography>
        </AccordionSummary>
        <AccordionDetails >
          <Typography variant="body2" fontSize={{ xs: 14, md: 16 }}>
            {answer}
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

FAQAccordion.propTypes = {
  question: PropTypes.string,
  answer: PropTypes.string,
};

export default FAQAccordion;
