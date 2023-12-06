import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box, Typography } from "@mui/material";
// import FaceIcon from "@mui/icons-material/Face";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";

const teamMembers = [
  {
    name: "John Doe",
    designation: "Founder",
    socialMedia: {
      twitter: "twitter_url",
      linkedin: "linkedin_url",
      github: "github_url",
    },
  },
  {
    name: "John Doe",
    designation: "Founder",
    socialMedia: {
      twitter: "twitter_url",
      linkedin: "linkedin_url",
      github: "github_url",
    },
  },
  {
    name: "John Doe",
    designation: "Founder",
    socialMedia: {
      twitter: "twitter_url",
      linkedin: "linkedin_url",
      github: "github_url",
    },
  },
  {
    name: "John Doe",
    designation: "Founder",
    socialMedia: {
      twitter: "twitter_url",
      linkedin: "linkedin_url",
      github: "github_url",
    },
  },
  {
    name: "John Doe",
    designation: "Founder",
    socialMedia: {
      twitter: "twitter_url",
      linkedin: "linkedin_url",
      github: "github_url",
    },
  },
  // Add more team members as needed
];

const CardSlider = () => {
  const settings = {
    infinite: true,
    speed: 500,
    variableWidth: true,
    autoplay: true,
    autoplaySpeed: 2000,
    nextArrow: <div style={{ fontSize: "24px", color: "#fff" }}>→</div>,
    prevArrow: <div style={{ fontSize: "24px", color: "#fff" }}>←</div>,
  };

  return (
    <Box
      overflow={"hidden"}
      width="100%"
      textAlign="center"
      backgroundColor="#06182C"
      color="#fff"
      py={6}
    >
      {/* Team Heading */}
      <Typography
        variant="h3"
        sx={{
          fontSize: "22px",
          background:
            "linear-gradient(108.18deg, #ea4c89 -12.02%, #4d44c6 60%)",
          WebkitBackgroundClip: "text",
          color: "transparent",
          display: "inline-block",
        }}
      >
        Team
      </Typography>
      <Typography variant="h2" mt={2}>
        Meet The Team
      </Typography>
      <Slider {...settings} sx={{ marginTop: "20px", width: "100%" }}>
        {teamMembers.map((member, index) => (
          <Box key={index} textAlign="center" padding={"80px"}>
            <Box
              sx={{
                padding: "7rem",
                backgroundImage:
                  "url(https://aenft-html.vercel.app/assets/img/member1.png)",
                backgroundRepeat: "no-repeat",
                backgroundColor: "#5C3E62",
                borderRadius: "100px",
                width: "100px",
              }}
            >
              {/* <FaceIcon
                style={{
                  fontSize: "150px", // Adjusted icon size
                  color: "#fff",
                  marginBottom: "10px",
                }}
              /> */}
            </Box>

            <Typography variant="h4">{member.name}</Typography>
            <Typography variant="subtitle1">{member.designation}</Typography>
            <Box sx={{ marginTop: "10px" }}>
              {/* Social Media Icons */}
              <a
                href={member.socialMedia.twitter}
                target="_blank"
                rel="noopener noreferrer"
              >
                <TwitterIcon
                  sx={{
                    fontSize: "30px",
                    marginRight: "10px",
                    color: "#fff!important",
                    ":hover": {
                      color: "#0052FF!important",
                    },
                  }}
                />
              </a>
              <a
                href={member.socialMedia.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkedInIcon
                  sx={{
                    fontSize: "30px",
                    marginRight: "10px",
                    color: "#fff!important",
                    ":hover": {
                      color: "#0052FF!important",
                    },
                  }}
                />
              </a>
              <a
                href={member.socialMedia.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <WhatsAppIcon
                  sx={{
                    fontSize: "30px",
                    color: "#fff!important",
                    ":hover": {
                      color: "#0052FF!important",
                    },
                  }}
                />
              </a>
            </Box>
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default CardSlider;
