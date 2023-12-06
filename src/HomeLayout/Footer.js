import React from "react";
import { Box, Typography, Container, styled, IconButton } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import Image from "../images/logo_footer_white.svg";

const WrapperClass = styled("div")({
  background: "#06182C",
  padding: "40px 0",
  textAlign: "center",
  "& img": {
    maxWidth: "100%",
    height: "auto",
    marginBottom: "20px",
  },
  "& .SocialIcons": {
    marginTop: "20px",
    "& .Icon": {
      padding: "15px",
      color: "#fff",
      fontSize: "30px",
      margin: "0 10px",
      borderRadius: "20%",
      backgroundColor: "#061C3C", // Set background color
      transition: "background-color 0.3s ease",
      "&:hover": {
        backgroundColor: "#1251F5",
      },
    },
  },

  "& .Copyright": {
    marginTop: "20px",
    color: "#fff",
  },
});

const Footer = () => {
  return (
    <Box>
      <WrapperClass>
        <Container>
          {/* Website Logo */}
          <img src={Image} alt="Website Logo" />

          {/* Social Media Icons */}
          <Box className="SocialIcons">
            <IconButton className="Icon">
              <FacebookIcon />
            </IconButton>
            <IconButton className="Icon">
              <TwitterIcon />
            </IconButton>
            <IconButton className="Icon">
              <InstagramIcon />
            </IconButton>
            <IconButton className="Icon">
              <YouTubeIcon />
            </IconButton>
            <IconButton className="Icon">
              <WhatsAppIcon />
            </IconButton>
          </Box>

          {/* Copyright Notice */}
          <Typography variant="body1" className="Copyright">
            Copyright © 2022. All Rights Reserved by AENFT
          </Typography>
        </Container>
      </WrapperClass>
    </Box>
  );
};

export default Footer;
