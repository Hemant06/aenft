import React from "react";
import styled from "@mui/system/styled";
import { Box, Grid, Card, CardContent, Typography } from "@mui/material";
import {
  IoGameControllerOutline,
  IoCashOutline,
  IoCubeOutline,
} from "react-icons/io5";

const HoverCard = styled(Card)`
  background-color: #1a1d36;
  color: #fff;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-10px);
  }
`;

const HoverCardContent = styled(CardContent)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CardsSection = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#06182C",
        padding: { xs: "33px", lg: "100px!important" },
        height: "100%", // Adjust the height as needed
      }}
    >
      <Grid container spacing={3} justifyContent="center">
        {/* Card 1 */}
        <Grid item xs={12} sm={12} lg={4}>
          <HoverCard>
            {/* Card Content */}
            <HoverCardContent>
              <IoGameControllerOutline
                size={40}
                style={{ marginBottom: "10px" }}
              />
              <Typography variant="h3" style={{ textAlign: "center" }}>
                Gaming NFTs
              </Typography>
              <Typography variant="body1" style={{ textAlign: "center" }}>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form.
              </Typography>
            </HoverCardContent>
          </HoverCard>
        </Grid>

        {/* Card 2 */}
        <Grid item xs={12} sm={4}>
          <HoverCard>
            {/* Card Content */}
            <HoverCardContent>
              <IoCashOutline size={40} style={{ marginBottom: "10px" }} />
              <Typography variant="h3" style={{ textAlign: "center" }}>
                Play To Earn
              </Typography>
              <Typography variant="body1" style={{ textAlign: "center" }}>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form.
              </Typography>
            </HoverCardContent>
          </HoverCard>
        </Grid>

        {/* Card 3 */}
        <Grid item xs={12} sm={4}>
          <HoverCard>
            {/* Card Content */}
            <HoverCardContent>
              <IoCubeOutline size={40} style={{ marginBottom: "10px" }} />
              <Typography variant="h3" style={{ textAlign: "center" }}>
                Metaverse Ready
              </Typography>
              <Typography variant="body1" style={{ textAlign: "center" }}>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form.
              </Typography>
            </HoverCardContent>
          </HoverCard>
        </Grid>
      </Grid>
    </Box>
  );
};

export default CardsSection;
