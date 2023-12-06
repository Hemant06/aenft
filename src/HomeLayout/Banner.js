import React from "react";
import styled from "@mui/system/styled";
import { Box, Button, Typography, Container, Grid } from "@mui/material";
import Image1 from "../images/hero_img_2.png";
import Image2 from "../images/hero_img_sm.png";

const BannerSectionContainer = styled("div")({
  position: "relative",
  height: "100%",
  overflow: "hidden",
  background: "#556270" /* fallback for old browsers */,
  background:
    "-webkit-linear-gradient(to right, #FF6B6B, #556270)" /* Chrome 10-25, Safari 5.1-6 */,
  background:
    "linear-gradient(to right, #FF6B6B, #556270)" /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */,
  padding: "100px 0px",
});

const ContentContainer = styled(Container)({
  position: "relative",
  zIndex: 1,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  height: "100%",
  color: "#fff",
});

const CenteredImagesContainer = styled(Grid)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
});

const CenteredPhoto = styled("img")({
  paddingBottom: "30px",
});

const MintButtons = styled("div")({
  margin: "30px 20px 0px 0px",
});

const keyframes = {
  "@keyframes rotate": {
    "0%": {
      transform: "rotate(0deg)",
    },
    "100%": {
      transform: "rotate(360deg)",
    },
  },
};

const RotatingPhoto = styled("img")({
  maxWidth: "100%",
  height: "auto",
  position: "absolute",
  right: "initial",
  left: "42%",
  top: "initial",
  bottom: "52%",
  animation: `${keyframes.rotate} 10s linear infinite`,
});
const StyledButton = styled(Button)({
  padding: "13px",
  color: "white",
  backgroundColor: "rgba(0, 82, 255, 0.2)",
  "&:hover": {
    backgroundColor: "#0052FF",
  },
});
const BannerSection = () => {
  return (
    <BannerSectionContainer>
      {/* Content */}
      <ContentContainer>
        <Grid container spacing={3} alignItems="center" justify="center">
          {/* Centered Images */}
          <CenteredImagesContainer item xs={12} sm={6} md={12}>
            {/* Centered Photo */}
            <CenteredPhoto
              src={Image1}
              alt="Centered"
              sx={{ maxWidth: { xs: "300px", lg: "100%" } }}
            />
            {/* Rotating Photo */}
            <Box>
              <RotatingPhoto
                src={Image2}
                alt="Rotating"
                sx={{
                  maxWidth: { sm: "40px", lg: "100%", xs: "100px" },
                  left: { sm: "33%", xs: "33%", lg: "42%" }, // unset left for xs
                  bottom: { sm: "77%", xs: "77%", lg: "52%" }, // set bottom for sm and xs
                  position: "absolute",
                }}
              />
            </Box>
          </CenteredImagesContainer>

          {/* Mint Information */}
          <Grid item xs={12} sm={6} md={12} textAlign={"center"}>
            <Typography
              variant="h2"
              sx={{
                marginBottom: "20px",
                fontSize: { xs: "25px", lg: "22px" },
              }}
            >
              0 / 725 Minted
            </Typography>
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: "30px", lg: "60px" },
              }}
            >
              A Completely New Way to Mint and Earn with Your Own NFTs
            </Typography>
            <Typography variant="h3" sx={{ fontSize: "20px!important" }}>
              Max 3 NFTs Per Wallet. PRICE{" "}
              <span
                style={{
                  color: "#044FEE",
                }}
              >
                0.02
              </span>{" "}
              ETH Mint is Live Until{" "}
              <span
                style={{
                  color: "#044FEE",
                }}
              >
                22 July
              </span>
            </Typography>

            {/* Mint Buttons */}
            <MintButtons>
              <Button
                variant="contained"
                sx={{
                  marginRight: "10px",
                  backgroundColor: "#0052FF",
                  ":hover": {
                    backgroundColor: "#0147D5",
                  },
                }}
              >
                MINT NOW
              </Button>
              <StyledButton variant="outlined" color="primary">
                Join the Waitlist
              </StyledButton>
            </MintButtons>
          </Grid>
        </Grid>
      </ContentContainer>
    </BannerSectionContainer>
  );
};

export default BannerSection;
