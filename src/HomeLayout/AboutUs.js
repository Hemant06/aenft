import React from "react";
import { Grid, Typography, Button, Box } from "@mui/material";
import AboutUsImage from "../images/about_img.svg";

const AboutUs = () => {
  return (
    <Box
      id="about-us"
      style={{
        backgroundColor: "#06182C",
        padding: "10px 100px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100%", // Adjust the height as needed
      }}
    >
      <Grid container spacing={3}>
        {/* Left Column */}
        <Grid item xs={12} sm={6}>
          <Typography
            variant="h3"
            sx={{
              margin: "10px 0px",
              fontSize: "18px",
              background:
                "linear-gradient(108.18deg, #ea4c89 -12.02%, #4d44c6 60%)",
              WebkitBackgroundClip: "text",
              color: "transparent",
              display: "inline-block",
            }}
          >
            SIMPLE STEPS
          </Typography>
          <Typography variant="h2">About Us</Typography>
          <Typography variant="body1">
            As of January 2012, there were more than 21,000 ERC20 token
            contracts. We built this template because the Ethereum ecosystem is
            the most popular platform. Among the most successful ERC20 token
            sales are EOS, Bancor, Qash, and Bankex, raising over $70 million
            each.
          </Typography>
          <Typography variant="body1" style={{ marginTop: "20px" }}>
            As of January 2012, there were more than 21,000 ERC20 token
            contracts. We built this template because the Ethereum ecosystem is
            the most popular platform. Among the most successful ERC20 token
            sales are EOS, Bancor, Qash, and Bankex, raising over $70 million
            each.
          </Typography>
          <Box style={{ display: "flex", marginTop: "20px" }}>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "rgb(12,46,78)",
                marginRight: "10px",
                ":hover": {
                  backgroundColor: "#0052FF",
                },
              }}
            >
              Connect
            </Button>
            <Button
              variant="contained"
              color="primary"
              sx={{
                backgroundColor: "rgb(12,46,78)",
                ":hover": {
                  backgroundColor: "#0052FF",
                },
              }}
            >
              Whitelist Now
            </Button>
          </Box>
        </Grid>

        {/* Right Column */}
        <Grid item xs={12} sm={6}>
          <img
            src={AboutUsImage}
            alt="About Us"
            style={{ width: "100%", height: "auto", borderRadius: "8px" }}
          />
        </Grid>

        <Grid item xs={12} marginTop={3} padding={"20px 20px"}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6} md={3}>
              <Box
                style={{
                  backgroundColor: "#1A1E37",
                  padding: "60px 10px",
                  borderRadius: "8px",
                  textAlign: "center",
                }}
              >
                <Typography variant="h1" style={{ color: "#fff" }}>
                  365
                </Typography>
                <Typography variant="body1" style={{ color: "#fff" }}>
                  Total Items
                </Typography>
              </Box>
            </Grid>

            <Grid item xs={12} sm={6} md={3}>
              <Box
                style={{
                  backgroundColor: "#1A1E37",
                  padding: "60px 10px",
                  borderRadius: "8px",
                  textAlign: "center",
                }}
              >
                <Typography variant="h1" style={{ color: "#fff" }}>
                  1,125
                </Typography>
                <Typography variant="body1" style={{ color: "#fff" }}>
                  Total Owners
                </Typography>
              </Box>
            </Grid>

            <Grid item xs={12} sm={6} md={3}>
              <Box
                style={{
                  backgroundColor: "#1A1E37",
                  padding: "60px 10px",
                  borderRadius: "8px",
                  textAlign: "center",
                }}
              >
                <Typography variant="h1" style={{ color: "#fff" }}>
                  1.72
                </Typography>
                <Typography variant="body1" style={{ color: "#fff" }}>
                  Floor Price
                </Typography>
              </Box>
            </Grid>

            <Grid item xs={12} sm={6} md={3}>
              <Box
                style={{
                  backgroundColor: "#1A1E37",
                  padding: "60px 10px",
                  borderRadius: "8px",
                  textAlign: "center",
                }}
              >
                <Typography variant="h1" style={{ color: "#fff" }}>
                  42.2k
                </Typography>
                <Typography variant="body1" style={{ color: "#fff" }}>
                  Volume Traded
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AboutUs;
