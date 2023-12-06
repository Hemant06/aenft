import React from "react";
import { Box, Typography, Grid } from "@mui/material";

const MintingTechniques = () => {
  return (
    <Box
      padding={"30px 50px"}
      width="100%"
      height="100%"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      textAlign="center"
      backgroundColor="#06182C"
      color="#fff"
    >
      <Typography
        variant="h3"
        sx={{
          fontSize: "18px",
          background:
            "linear-gradient(108.18deg, #ea4c89 -12.02%, #4d44c6 60%)",
          WebkitBackgroundClip: "text",
          color: "transparent",
          display: "inline-block",
          marginBottom: "0px !important", // Set margin to 0px
        }}
      >
        Simple Steps
      </Typography>

      <Typography variant="h2" mt={2}>
        Minting Techniques
      </Typography>

      <Grid container spacing={2} mt={4}>
        {/* Box 1 */}
        <Grid item xs={12} sm={12} lg={3}>
          <Box
            borderRadius="10px"
            padding={"26px"}
            width="100%"
            style={{ backgroundColor: "#121E3B" }}
          >
            <Typography
              variant="h4"
              style={{
                borderRadius: "50%",
                border: "4px dotted #0052FF",
                padding: "8px",
                width: "56px",
                height: "60px",
                display: "inline-block",
                color: "#0052FF",
              }}
            >
              1
            </Typography>
            <Typography variant="h3">Connect Your Wallet</Typography>
          </Box>
        </Grid>

        {/* Box 2 */}
        <Grid item xs={12} sm={12} lg={3}>
          <Box
            style={{ backgroundColor: "#121E3B" }}
            borderRadius="10px"
            padding={"26px"}
            width="100%"
          >
            <Typography
              variant="h4"
              style={{
                borderRadius: "50%",
                border: "4px dotted #0052FF",
                padding: "8px",
                width: "56px",
                height: "60px",
                display: "inline-block",
                color: "#0052FF",
              }}
            >
              2
            </Typography>
            <Typography variant="h3">Select Your Quantity</Typography>
          </Box>
        </Grid>

        {/* Box 3 */}
        <Grid item xs={12} sm={12} lg={3}>
          <Box
            style={{ backgroundColor: "#121E3B" }}
            borderRadius="10px"
            padding={"26px"}
            width="100%"
          >
            <Typography
              variant="h4"
              style={{
                borderRadius: "50%",
                border: "4px dotted #0052FF",
                padding: "8px",
                width: "56px",
                height: "60px",
                display: "inline-block",
                color: "#0052FF",
              }}
            >
              3
            </Typography>
            <Typography variant="h3">Transection Confirm</Typography>
          </Box>
        </Grid>

        {/* Box 4 */}
        <Grid item xs={12} sm={12} lg={3}>
          <Box
            style={{ backgroundColor: "#121E3B" }}
            borderRadius="10px"
            padding={"26px"}
            width="100%"
          >
            <Typography
              variant="h4"
              style={{
                borderRadius: "50%",
                border: "4px dotted #0052FF",
                padding: "8px",
                width: "56px",
                height: "60px",
                display: "inline-block",
                color: "#0052FF",
              }}
            >
              4
            </Typography>
            <Typography variant="h3">Recive Your NFTs</Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default MintingTechniques;
