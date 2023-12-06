import React, { useState } from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
  Container,
  Box,
  styled,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const WrapperClass = styled("div")({
  paddingBottom: "100px",
  background: "#06182C",
  "& h2": {
    color: "#fff",
    fontSize: "50px",
    fontWeight: "900",
    marginBottom: "40px",
  },
  "& h4": {
    fontSize: "20px",
    color: "#fff",
    paddingLeft: "40px",
  },
  "& p": {
    color: "#798DA3",
    fontSize: "15px",
    paddingLeft: "40px",
  },
  "& .Acc_section": {
    background: "#131D3A",
    borderRadius: "20px",
    marginBottom: "16px",
    color: "#fff",
  },
  "& .Arrow_Icon svg": {
    color: "#fff",
  },
  "& Button": {
    backgroundColor: "#798DA3",
    height: "52px",
    fontWeight: "bold",
    marginTop: "15px",
    borderRadius: "8px",
    padding: "16px 32px",
  },
  "& Button:hover": {
    backgroundColor: "#86ff00",
    color: "#000",
  },
  "@media screen and (max-width:768px)": {
    "& h2": {
      fontSize: "24px",
    },
  },
});

const StyledTypography = styled(Typography)({
  color: (props) => (props.expanded ? "#fff" : "white"),
});

const Faq = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isExpanded2, setIsExpanded2] = useState(false);
  const [isExpanded3, setIsExpanded3] = useState(false);
  const [isExpanded4, setIsExpanded4] = useState(false);

  return (
    <Box>
      <WrapperClass>
        <Container>
          <Box>
            <Typography
              variant="h3"
              sx={{
                fontSize: "22px!important",
                background:
                  "linear-gradient(108.18deg, #ea4c89 -12.02%, #4d44c6 60%)",
                WebkitBackgroundClip: "text",
                color: "transparent",
                display: "block",
                textAlign: "center",
                margin: "0 auto",
              }}
            >
              FAQ
            </Typography>
            <Typography
              variant="h2"
              sx={{
                marginTop: "10px",
                color: "#fff",
                textAlign: "center",
                fontSize: "36px!important",
              }}
            >
              Still have questions?
            </Typography>
          </Box>
          <Accordion
            className="Acc_section smooth-accordion"
            expanded={isExpanded}
            onChange={() => setIsExpanded(!isExpanded)}
          >
            <AccordionSummary
              className="Arrow_Icon"
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <StyledTypography variant="h4" expanded={isExpanded}>
                How to Mint an NFT?
              </StyledTypography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="body1">
                There are many variations of pass ges of Lorem Ipsum available,
                but the majority have suffered alterat ion in some form. There
                are many variations of passages. There are many variations of
                pass ges of Lorem Ipsum available, but the majority have
                suffered alterat ion in some form. There are many variations of
                passages.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion
            className="Acc_section"
            expanded={isExpanded2}
            onChange={() => setIsExpanded2(!isExpanded2)}
          >
            <AccordionSummary
              className="Arrow_Icon"
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <StyledTypography variant="h4" expanded={isExpanded2}>
                What happens once purchase NFT?
              </StyledTypography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="body1">
                There are many variations of pass ges of Lorem Ipsum available,
                but the majority have suffered alterat ion in some form. There
                are many variations of passages. There are many variations of
                pass ges of Lorem Ipsum available, but the majority have
                suffered alterat ion in some form. There are many variations of
                passages.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion
            className="Acc_section"
            expanded={isExpanded3}
            onChange={() => setIsExpanded3(!isExpanded3)}
          >
            <AccordionSummary
              className="Arrow_Icon"
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <StyledTypography variant="h4" expanded={isExpanded3}>
                How can I obtain NFTs?
              </StyledTypography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="body1">
                There are many variations of pass ges of Lorem Ipsum available,
                but the majority have suffered alterat ion in some form. There
                are many variations of passages. There are many variations of
                pass ges of Lorem Ipsum available, but the majority have
                suffered alterat ion in some form. There are many variations of
                passages.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion
            className="Acc_section"
            expanded={isExpanded4}
            onChange={() => setIsExpanded4(!isExpanded4)}
          >
            <AccordionSummary
              className="Arrow_Icon"
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <StyledTypography variant="h4" expanded={isExpanded4}>
                Do NFTs appreciate in value?
              </StyledTypography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="body1">
                There are many variations of pass ges of Lorem Ipsum available,
                but the majority have suffered alterat ion in some form. There
                are many variations of passages. There are many variations of
                pass ges of Lorem Ipsum available, but the majority have
                suffered alterat ion in some form. There are many variations of
                passages.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Container>
      </WrapperClass>
    </Box>
  );
};

export default Faq;
