import React from "react";
import {
  Typography,
  Container,
  Box,
  styled,
  Button,
  Grid,
} from "@mui/material";
import GroupIcon from "@mui/icons-material/Group";
import HourglassEmptyIcon from "@mui/icons-material/HourglassEmpty";

const WrapperClass = styled("div")({
  paddingBottom: "100px",
  background: "#06192E",
  "& h2": {
    color: "#fff",
    fontSize: "50px",
    fontWeight: "700",
    marginBottom: "20px",
  },
  "& p": {
    color: "#fff",
    fontSize: "15px",
    marginBottom: "20px",
  },
  "& .ButtonsSection": {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  "& .Button": {
    height: "52px",
    fontWeight: "bold",
    borderRadius: "8px",
    marginRight: "10px",
    padding: "0 20px",
  },
  "& .Button:hover": {
    backgroundColor: "#484465",
    color: "#fff",
  },
  "& .Icon": {
    marginRight: "10px",
    fontSize: "30px",
  },
});

const CommunitySection = () => {
  return (
    <Box>
      <WrapperClass>
        <Container
          sx={{
            backgroundColor: "#232146",
            textAlign: "center",
            padding: "100px 60px",
            borderRadius: "20px",
          }}
        >
          <Typography
            variant="h2"
            sx={{
              fontSize: {
                sm: "34px!important",
                lg: "64px!important",
                xs: "34px!important",
              },
              maxWidth: "800px",
              margin: "auto",
              paddingBottom: "1rem",
            }}
          >
            Join our community for First Access
          </Typography>
          <Typography
            variant="body1"
            sx={{ maxWidth: "800px", margin: "auto", paddingBottom: "1.5rem" }}
          >
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form.
          </Typography>

          <Grid container spacing={2} className="ButtonsSection">
            <Grid item xs={12} lg={3}>
              <Button
                className="Button"
                sx={{
                  backgroundColor: "transparent",
                  color: "#fff",
                  border: "1px solid #fff", // Add a white border
                  "&:hover": {
                    backgroundColor: "transparent",
                    color: "#86ff00",
                    border: "1px solid #fff", // Change border color on hover
                  },
                }}
              >
                <GroupIcon className="Icon" />
                Join our community
              </Button>
            </Grid>

            <Grid item xs={12} lg={3}>
              <Button
                sx={{ bgcolor: "#fff", color: "#000" }}
                className="Button"
              >
                <HourglassEmptyIcon className="Icon" />
                Join our waitlist
              </Button>
            </Grid>
          </Grid>
        </Container>
      </WrapperClass>
    </Box>
  );
};

export default CommunitySection;
