import { Box } from "@mui/material";
import React from "react";
import Topbar from "./Topbar";
import Banner from "./Banner";
import CardsSection from "./CardsSection";
import AboutUs from "./AboutUs";
import Slider from "./SliderComponent";
import SliderComponent from "./SliderComponent";
import MintingTechniques from "./MintingTechniques";
import Roadmap from "./Roadmap";
import TeamSection from "./TeamSection";
import Faq from "./Faq";
import Blog from "./Blog";
import ContactUs from "./ContactUs";
import JoinCommunity from "./JoinCommunity";
import Footer from "./Footer";

const HomeLayout = () => {
  return (
    <Box>
      <Topbar />
      <Banner />
      <CardsSection />
      <AboutUs />
      <SliderComponent />
      <MintingTechniques />
      <Roadmap />
      <TeamSection />
      <Faq />
      <Blog />
      <ContactUs />
      <JoinCommunity />
      <Footer />
    </Box>
  );
};

export default HomeLayout;
