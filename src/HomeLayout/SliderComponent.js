import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box, Card } from "@mui/material";

const images = [
  "https://aenft-html.vercel.app/assets/img/product1.png",
  "https://aenft-html.vercel.app/assets/img/product2.png",
  "https://aenft-html.vercel.app/assets/img/product3.png",
  "https://aenft-html.vercel.app/assets/img/product3.png",
  "https://aenft-html.vercel.app/assets/img/product3.png",
  // Add more image URLs as needed
];

const CardSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: Math.min(images.length, 3), // Adjust the number of slides shown
    slidesToScroll: 1,
    variableWidth: true, // Enable variable width
    autoplay: true, // Enable autoplay
    autoplaySpeed: 3000, // Set autoplay speed in milliseconds
  };

  return (
    <Box
      width="100%"
      overflow={"hidden"}
      sx={{ backgroundColor: "#06182C", paddingTop: "4rem" }}
    >
      <Slider {...settings}>
        {images.map((image, index) => (
          <Card
            key={index}
            style={{
              margin: "0 10px", // Adjust margin as needed for space between cards
              borderRadius: "8px", // Optional: Add border-radius for rounded corners
            }}
          >
            <Box
              style={{
                background:
                  "linear-gradient(108.18deg, #EA4C89 -2.02%, #4D44C6 100%)",
                marginRight: "20px",
                padding: "10px", // Adjust padding as needed
                borderRadius: "10px", // Optional: Add border-radius for rounded corners
              }}
            >
              <img
                src={image}
                alt={`Slide ${index + 1}`}
                style={{
                  maxWidth: "100%",
                  height: "auto",
                }}
              />
            </Box>
          </Card>
        ))}
      </Slider>
    </Box>
  );
};

export default CardSlider;
