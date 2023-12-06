import React from "react";
import {
  //   Accordion,
  //   AccordionDetails,
  //   AccordionSummary,
  Typography,
  Container,
  Box,
  styled,
  Grid,
} from "@mui/material";
import Image1 from "../images/blog1.jpeg";
import Image2 from "../images/blog2.jpeg";
import Image3 from "../images/blog3.jpeg";
import Image4 from "../images/blog4.jpeg";
// import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const WrapperClass = styled("div")({
  paddingBottom: "100px",
  background: "#06182C",
  "& h2": {
    color: "#fff",
    fontSize: "50px",
    fontWeight: "900",
    marginBottom: "40px",
  },
  "& h3": {
    color: "#fff",
    fontSize: "30px",
    fontWeight: "700",
    marginBottom: "20px",
  },
  "& p": {
    color: "#798DA3",
    fontSize: "15px",
    // paddingLeft: "40px",
  },
  "& .Acc_section": {
    background: "#131D3A",
    borderRadius: "20px",
    marginBottom: "16px",
    color: "#fff",
  },
  "& .Blog_section": {
    display: "flex",
    justifyContent: "left",
    flexWrap: "wrap",
  },
  "& .Blog_column": {
    flex: "0 0 23%",
    maxWidth: "23%",
    margin: "1%",
    textAlign: "left",
    // padding: "20px",
    // background: "#1E2835",
    borderRadius: "20px",
    marginBottom: "20px",
  },
  "& .Blog_image": {
    width: "100%",
    height: "auto",
    borderRadius: "10px",
    marginBottom: "10px",
  },
  "& h3": {
    color: "#fff",
    "&:hover": {
      color: "blue!important",
      cursor: "pointer",
    },
  },
});

const BlogSection = () => {
  return (
    <Box>
      <WrapperClass>
        <Container>
          <Typography
            variant="h3"
            sx={{
              fontSize: "22px",
              background:
                "linear-gradient(108.18deg, #ea4c89 -12.02%, #4d44c6 60%)",
              WebkitBackgroundClip: "text",
              color: "transparent!important",
              display: "inline-block",
              // marginLeft: "34rem",
              marginLeft: { xs: "0px", lg: "34rem", md: "0px" },
            }}
          >
            Blog
          </Typography>
          <Typography
            variant="h2"
            sx={{
              fontWeight: "700",
              textAlign: "center",
              fontSize: "36px!important",
            }}
          >
            Recent NFT News
          </Typography>

          <Grid container spacing={3}>
            <Grid item xs={12} md={6} lg={3} sm={12}>
              <Box>
                <img src={Image1} alt="Blog Image 1" className="Blog_image" />
                <Typography
                  variant="h3"
                  sx={{
                    margin: "10px 0px 10px 0px",
                    fontSize: "21px!important",
                  }}
                >
                  How to Mint an NFT?
                </Typography>
                <Typography variant="body1">
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form.
                </Typography>
              </Box>
            </Grid>

            {/* Repeat the structure for other blog columns */}
            {/* You can add more columns based on your requirement */}
            <Grid item xs={12} md={6} lg={3}>
              <Box>
                <img src={Image2} alt="Blog Image 2" className="Blog_image" />
                <Typography
                  variant="h3"
                  sx={{
                    margin: "10px 0px 10px 0px",
                    fontSize: "21px!important",
                  }}
                >
                  What is NFTs minting?
                </Typography>
                <Typography variant="body1">
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form.
                </Typography>
              </Box>
            </Grid>

            <Grid item xs={12} md={6} lg={3}>
              <Box>
                <img src={Image3} alt="Blog Image 3" className="Blog_image" />
                <Typography
                  variant="h3"
                  sx={{
                    margin: "10px 0px 10px 0px",
                    fontSize: "21px!important",
                  }}
                >
                  How can I obtain NFTs?
                </Typography>
                <Typography variant="body1">
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form.
                </Typography>
              </Box>
            </Grid>

            <Grid item xs={12} md={6} lg={3}>
              <Box>
                <img src={Image4} alt="Blog Image 4" className="Blog_image" />
                <Typography
                  variant="h3"
                  sx={{
                    margin: "10px 0px 10px 0px",
                    fontSize: "21px!important",
                  }}
                >
                  Benefit of Minting an NFT
                </Typography>
                <Typography variant="body1">
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </WrapperClass>
    </Box>
  );
};

export default BlogSection;
