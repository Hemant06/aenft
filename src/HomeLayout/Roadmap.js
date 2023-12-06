import React from "react";
import { Box, Typography, Grid } from "@mui/material";

const RoadmapSection = () => {
  return (
    <Box
      height={"100%"}
      width="100%"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      textAlign="center"
      backgroundColor="#06182C"
      color="#fff"
      py={6}
    >
      {/* Our Goals */}
      <Typography
        variant="h3"
        sx={{
          fontSize: "18px",
          background:
            "linear-gradient(108.18deg, #ea4c89 -12.02%, #4d44c6 60%)",
          WebkitBackgroundClip: "text",
          color: "transparent",
          display: "inline-block",
        }}
      >
        Our Goals
      </Typography>

      <Typography variant="h2">Roadmap Make Unique</Typography>

      {/* Roadmap Steps */}
      <Grid
        container
        spacing={4}
        mt={4}
        alignItems="center"
        justifyContent="center"
        padding={"0px 150px"}
      >
        {/* Step 1 */}
        <Grid item xs={12} sm={12} lg={3}>
          <Box
            backgroundColor="#0052FF"
            borderRadius="50%"
            maxWidth={"55px"}
            padding="11px 7px"
            textAlign="center"
            position="relative"
          >
            <Typography
              variant="h4"
              sx={{ margin: "0px !important", fontSize: "1.125rem" }}
            >
              1
            </Typography>
            <Box backgroundColor="#fff"></Box>
          </Box>
        </Grid>

        {/* Step 2 */}
        <Grid item xs={12} sm={12} lg={3}>
          <Box
            backgroundColor="#0052FF"
            borderRadius="50%"
            maxWidth={"55px"}
            padding="11px 7px"
            textAlign="center"
            position="relative"
          >
            <Typography
              variant="h4"
              sx={{ margin: "0px !important", fontSize: "1.125rem" }}
            >
              2
            </Typography>
            <Box backgroundColor="#fff"></Box>
          </Box>
        </Grid>

        {/* Step 3 */}
        <Grid item xs={12} sm={12} lg={3}>
          <Box
            backgroundColor="#0052FF"
            borderRadius="50%"
            maxWidth={"55px"}
            padding="11px 7px"
            textAlign="center"
            position="relative"
          >
            <Typography
              variant="h4"
              sx={{ margin: "0px !important", fontSize: "1.125rem" }}
            >
              3
            </Typography>
            <Box backgroundColor="#fff"></Box>
          </Box>
        </Grid>

        {/* Step 4 */}
        <Grid item xs={12} sm={12} lg={3}>
          <Box
            backgroundColor="#0052FF"
            borderRadius="50%"
            maxWidth={"55px"}
            padding="11px 7px"
            textAlign="center"
            position="relative"
          >
            <Typography
              variant="h4"
              sx={{ margin: "0px !important", fontSize: "1.125rem" }}
            >
              4
            </Typography>
          </Box>
        </Grid>
      </Grid>

      {/* Roadmap Boxes */}
      <Grid
        padding={"30px 130px"}
        container
        spacing={4}
        mt={4}
        alignItems="center"
        justifyContent="center"
      >
        {/* Box 1 */}
        <Grid item xs={12} sm={12} lg={3}>
          <Box
            borderRadius="10px"
            p={3}
            textAlign="left"
            sx={{ background: "#1B1E37" }}
          >
            <Typography
              variant="h3"
              sx={{
                fontSize: "18px",
                color: "#CA4A96",
                margin: "0px !important",
                paddingBottom: "1rem",
              }}
            >
              Phase 1
            </Typography>
            <Typography
              variant="h2"
              sx={{ fontSize: "24px", paddingBottom: "1rem" }}
            >
              Launch Collection
            </Typography>
            <Typography variant="body1">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form. There are
              many variations of passages.
            </Typography>
          </Box>
        </Grid>

        {/* Box 2 */}
        <Grid item xs={12} sm={12} lg={3}>
          <Box
            borderRadius="10px"
            p={3}
            textAlign="left"
            sx={{ background: "#1B1E37" }}
          >
            <Typography
              variant="h3"
              sx={{
                fontSize: "18px",
                color: "#CA4A96",
                margin: "0px !important",
                paddingBottom: "1rem",
              }}
            >
              Phase 2
            </Typography>
            <Typography
              variant="h2"
              sx={{ fontSize: "24px", paddingBottom: "1rem" }}
            >
              Second Launch
            </Typography>
            <Typography variant="body1">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form. There are
              many variations of passages.
            </Typography>
          </Box>
        </Grid>

        {/* Box 3 */}
        <Grid item xs={12} sm={12} lg={3}>
          <Box
            sx={{ background: "#1B1E37" }}
            borderRadius="10px"
            p={3}
            textAlign="left"
          >
            <Typography
              variant="h3"
              sx={{
                fontSize: "18px",
                color: "#CA4A96",
                margin: "0px !important",
                paddingBottom: "1rem",
              }}
            >
              Phase 3
            </Typography>
            <Typography
              variant="h2"
              sx={{ fontSize: "24px", paddingBottom: "1rem" }}
            >
              Third Launch
            </Typography>
            <Typography variant="body1">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form. There are
              many variations of passages.
            </Typography>
          </Box>
        </Grid>

        {/* Box 4 */}
        <Grid item xs={12} sm={12} lg={3}>
          <Box
            sx={{ background: "#1B1E37" }}
            borderRadius="10px"
            p={3}
            textAlign="left"
          >
            <Typography
              variant="h3"
              sx={{
                fontSize: "18px",
                color: "#CA4A96",
                margin: "0px !important",
                paddingBottom: "1rem",
              }}
            >
              Phase 4
            </Typography>
            <Typography
              variant="h2"
              sx={{ fontSize: "24px", paddingBottom: "1rem" }}
            >
              Final Launch
            </Typography>
            <Typography variant="body1">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form. There are
              many variations of passages.
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default RoadmapSection;
