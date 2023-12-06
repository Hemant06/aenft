import {
  AppBar,
  Box,
  Toolbar,
  styled,
  IconButton,
  Drawer,
  List,
  ListItem,
  Button,
  Container,
} from "@mui/material";
import { NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { BsWallet } from "react-icons/bs";
import { BsSun } from "react-icons/bs";
import React, { useState, useEffect } from "react";
import Image1 from "../images/logo_white.svg";

const Wrapper = styled("div")({
  background: "#06182C",
  height: "100px",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-around",
  padding: "0 20px",
});

const Logo = styled("div")({
  "& img": {
    height: "45px",
  },
  "& a": {
    fontSize: "1.5rem",
    color: "#fff",
    textDecoration: "none",
    fontWeight: "600",
    fontFamily: "Poppins, sans-serif",
    paddingLeft: "1rem",
  },
});

const NavLinks = styled("div")({
  display: "flex",
  alignItems: "center",
  "& a": {
    padding: "15px 20px",
    color: "#fff",
    textDecoration: "none",
    fontWeight: "500",
    fontFamily: "Poppins, sans-serif",
    "&:hover": {
      color: "#0052FF",
    },
  },
  "& Button": {
    "&:hover": {
      backgroundColor: "#0147D5",
      color: "#fff",
    },
  },
});

const Topbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  function handleDrawerToggle() {
    setDrawerOpen((prevOpen) => !prevOpen);
  }
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const checkScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", checkScroll);

    return () => {
      window.removeEventListener("scroll", checkScroll);
    };
  }, []);

  return (
    <Wrapper>
      <Container>
        <AppBar
          sx={{
            background: isScrolled ? "#0A2540" : "transparent",
            boxShadow: isScrolled ? "0px 2px 4px rgba(0, 0, 0, 0.2)" : "none",
          }}
        >
          <Toolbar
            sx={{
              justifyContent: "space-around",
              alignItems: "center",
              height: "104px",
            }}
          >
            <Logo>
              <NavLink to="/">
                <img src={Image1} alt="image not found" />
              </NavLink>
            </Logo>

            {/* Display hamburger icon on small screens */}
            <IconButton
              sx={{
                display: { lg: "none", md: "none", sm: "block", xs: "block" },
              }}
              onClick={handleDrawerToggle}
            >
              <FaBars style={{ color: "#fff" }} />
            </IconButton>

            {/* Navigation links for larger screens */}
            <NavLinks
              sx={{
                display: { lg: "flex", md: "flex", sm: "none", xs: "none" },
              }}
            >
              <NavLink to=""> Home </NavLink>
              <NavLink to="" href="#about-us">
                {" "}
                About{" "}
              </NavLink>
              <NavLink to=""> Roadmap </NavLink>
              <NavLink to=""> Team </NavLink>
              <NavLink to=""> Faq </NavLink>
              <NavLink to=""> Contact </NavLink>
              <NavLink to=""> Pages </NavLink>
            </NavLinks>

            {/* Connect button for larger screens */}
            <NavLinks
              sx={{
                display: { lg: "flex", md: "flex", sm: "flex", xs: "none" },
              }}
            >
              <Box
                sx={{
                  marginRight: "2rem",
                }}
              >
                <BsSun style={{ width: "22px", height: "22px" }} />
              </Box>
              <Button
                sx={{
                  borderRadius: "8px",
                  bgcolor: "#0052FF!important",
                  color: "#fff",
                  padding: "10px 15px",
                  ":hover": {
                    backgroundColor: "#0147D5!important",
                  },
                }}
              >
                <Box sx={{ marginRight: ".5rem" }}>
                  <BsWallet />
                </Box>
                Connect
              </Button>
            </NavLinks>

            {/* Drawer for small screens */}
            <Drawer anchor="top" open={drawerOpen} onClose={handleDrawerToggle}>
              <List>
                <ListItem
                  button
                  component={NavLink}
                  to="/"
                  activeClassName="active"
                >
                  Home
                </ListItem>
                <ListItem button component={NavLink} to="/Benefits">
                  About
                </ListItem>
                <ListItem button component={NavLink} to="/hometouse">
                  Roadmap
                </ListItem>
                <ListItem button component={NavLink} to="/otherproduct">
                  Team
                </ListItem>
                <ListItem button component={NavLink} to="/review">
                  Faq
                </ListItem>
                <ListItem button component={NavLink} to="/review">
                  Contact
                </ListItem>
                <ListItem button component={NavLink} to="/review">
                  Pages
                </ListItem>
                <ListItem>
                  <Button
                    component={NavLink}
                    to="/shopnow"
                    sx={{
                      background: "#12B6B6",
                      color: "#ffff",
                      padding: "11px 27px",
                      fontSize: "16px",
                      fontFamily: "Poppins, sans-serif",
                      borderRadius: "4px",
                      "&:hover": {
                        backgroundColor: "#0B2239",
                        color: "#FFFFFF",
                      },
                    }}
                  >
                    Connect
                  </Button>
                </ListItem>
              </List>
            </Drawer>
          </Toolbar>
        </AppBar>
      </Container>
    </Wrapper>
  );
};

export default Topbar;
