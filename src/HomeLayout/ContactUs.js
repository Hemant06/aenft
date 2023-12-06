import React from "react";
import {
  Typography,
  Container,
  Box,
  styled,
  TextField,
  Button,
  Grid,
} from "@mui/material";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";

const WrapperClass = styled("div")({
  paddingBottom: "100px",
  background: "#06182C",
  "& h2": {
    color: "#fff",
    fontSize: "50px",
    fontWeight: "900",
    marginBottom: "20px",
  },
  "& h3": {
    color: "#fff",
    fontSize: "30px",
    fontWeight: "700",
    marginBottom: "10px",
  },
  "& p": {
    color: "#798DA3",
    fontSize: "15px",
    marginBottom: "10px",
  },
  "& .ContactSection": {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginTop: "20px",
  },
  "& .FormSection": {
    width: "48%",
    paddingRight: "20px",
  },
  "& .ContactInfoSection": {
    width: "48%",
    paddingLeft: "20px",
  },
  "& .ContactInfoItem": {
    marginBottom: "20px",
  },
  "& .Icon": {
    marginRight: "10px",
    verticalAlign: "middle",
    color: "#fff",
  },
  "& .SubmitButton": {
    backgroundColor: "#0052FF",
    color: "#fff",
    height: "52px",
    fontWeight: "bold",
    marginTop: "20px",
    borderRadius: "8px",
  },
  "& .SubmitButton:hover": {
    backgroundColor: "#0147D5",
    color: "#fff",
  },
});

const ContactSection = () => {
  return (
    <Box>
      <WrapperClass>
        <Container>
          <Typography
            variant="h2"
            sx={{
              fontWeight: "700",
              fontSize: "22px!important",
              background:
                "linear-gradient(108.18deg, #ea4c89 -12.02%, #4d44c6 60%)",
              WebkitBackgroundClip: "text",
              color: "transparent!important",
              display: "inline-block",
            }}
          >
            Contact Us
          </Typography>
          <Typography variant="h3" sx={{ marginLeft: "0px" }}>
            Get in Touch
          </Typography>
          <Typography variant="body1" sx={{ marginBottom: "20px" }}>
            Feel free to reach out to us for any inquiries or questions.
          </Typography>

          <Box className="ContactSection">
            <Box className="FormSection">
              <Typography variant="h3" sx={{ marginLeft: "0px" }}>
                Contact Form
              </Typography>
              <TextField
                label="Your Name"
                variant="outlined"
                fullWidth
                margin="normal"
              />
              <TextField
                label="Your Email"
                variant="outlined"
                fullWidth
                margin="normal"
              />
              <TextField
                label="Subject"
                variant="outlined"
                fullWidth
                margin="normal"
              />
              <TextField
                label="Message"
                multiline
                rows={4}
                variant="outlined"
                fullWidth
                margin="normal"
              />
              <Button variant="contained" className="SubmitButton">
                Submit Now
              </Button>
            </Box>

            <Box className="ContactInfoSection">
              <Typography variant="h3">Contact Info</Typography>
              <Grid container spacing={2}>
                <Grid item xs={12} className="ContactInfoItem" display={"flex"}>
                  <CallIcon className="Icon" style={{ color: "#0052FF" }} />
                  <Box>
                    <Typography variant="body1">
                      <strong>Call us:</strong>
                    </Typography>
                    <Typography variant="body1">+1234567890</Typography>
                  </Box>
                </Grid>
                <Grid item xs={12} className="ContactInfoItem" display={"flex"}>
                  <EmailIcon className="Icon" style={{ color: "#0052FF" }} />
                  <Box>
                    <Typography variant="body1">
                      <strong>Email:</strong>
                    </Typography>
                    <Typography variant="body1">info@example.com</Typography>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Container>
      </WrapperClass>
    </Box>
  );
};

export default ContactSection;
