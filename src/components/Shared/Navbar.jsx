import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import MenuItem from "@mui/material/MenuItem";
import Drawer from "@mui/material/Drawer";
import MenuIcon from "@mui/icons-material/Menu";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import ToggleColorMode from "./ToggleColorMode";
import { Link, useLocation } from "react-router-dom";
const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  flexShrink: 0,
  backdropFilter: "blur(24px)",
  border: "1px solid",
  borderColor: theme.palette.divider,
  backgroundColor: alpha(theme.palette.background.default, 0.4),
  boxShadow: theme.shadows[1],
  padding: "18px 15px",
}));

const styleLinks = {
  fontSize: "1rem",
  fontFamily: "arial",
};
const LinkStyles = {
  textDecoration: "none",
  color: "white",
};

export default function Navbar({ mode, toggleColorMode }) {
  const [open, setOpen] = React.useState(false);
  const location = useLocation();
  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        boxShadow: 0,
        bgcolor: "transparent",
        backgroundImage: "none",
      }}
    >
      <Container maxWidth="100%" disableGutters>
        <StyledToolbar variant="dense" disableGutters>
          <Box
            sx={{
              flexGrow: 1,
              display: "flex",
              alignItems: "center",
              px: 0,
            }}
          >
            <Box>
              <Link to="/">
                <Button
                  variant="text"
                  sx={{
                    fontFamily: "Arial",
                    fontSize: "1.9rem",
                    color: "#4876EE",
                    fontWeight: "bold",
                  }}
                >
                  Nagarjuna
                </Button>
              </Link>
            </Box>
          </Box>
          <Box sx={{ display: "flex", gap: 5 }}>
            <Box sx={{ display: { xs: "none", md: "flex", gap: 25 } }}>
              <Link to="/portfolio">
                <Button sx={styleLinks}>Home</Button>
              </Link>
              <Link to="/portfolio/About">
                <Button sx={styleLinks}>About</Button>
              </Link>
              <Link to="/portfolio/About">
                <Button sx={styleLinks}>Projects</Button>
              </Link>
              <Link to="/portfolio/Resume">
                <Button sx={styleLinks}>Resume</Button>
              </Link>
              <Button style={{ backgroundColor: "#4876EE" }}>
                <a
                  href="https://github.com/nagarjuna0033/Portfolio"
                  target="_blank"
                  rel="noreferrer"
                  style={{ display: "flex", alignItems: "center" }}
                >
                  <svg
                    stroke="#FFFFFF"
                    fill="none"
                    stroke-width="0"
                    viewBox="0 0 24 24"
                    height="1.5rem"
                    width="1.5rem"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7 5C7 3.89543 7.89543 3 9 3C10.1046 3 11 3.89543 11 5C11 5.74028 10.5978 6.38663 10 6.73244V14.0396H11.7915C12.8961 14.0396 13.7915 13.1441 13.7915 12.0396V10.7838C13.1823 10.4411 12.7708 9.78837 12.7708 9.03955C12.7708 7.93498 13.6662 7.03955 14.7708 7.03955C15.8753 7.03955 16.7708 7.93498 16.7708 9.03955C16.7708 9.77123 16.3778 10.4111 15.7915 10.7598V12.0396C15.7915 14.2487 14.0006 16.0396 11.7915 16.0396H10V17.2676C10.5978 17.6134 11 18.2597 11 19C11 20.1046 10.1046 21 9 21C7.89543 21 7 20.1046 7 19C7 18.2597 7.4022 17.6134 8 17.2676V6.73244C7.4022 6.38663 7 5.74028 7 5Z"
                      fill="#FFFFFF"
                    ></path>
                  </svg>
                  <svg
                    stroke="#FFFFFF"
                    fill="#FFFFFF"
                    stroke-width="0"
                    viewBox="0 0 1024 1024"
                    height="1.5rem"
                    width="1.5rem"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 0 0 .6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0 0 46.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z"></path>
                  </svg>
                </a>
              </Button>
            </Box>
            <ToggleColorMode
              data-screenshot="toggle-mode"
              mode={mode}
              toggleColorMode={toggleColorMode}
            />
          </Box>
          <Box sx={{ display: { sm: "flex", md: "none" } }}>
            <IconButton aria-label="Menu button" onClick={toggleDrawer(true)}>
              <MenuIcon />
            </IconButton>
            <Drawer anchor="top" open={open} onClose={toggleDrawer(false)}>
              <Box sx={{ p: 2, backgroundColor: "background.default" }}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <IconButton onClick={toggleDrawer(false)}>
                    <CloseRoundedIcon />
                  </IconButton>
                </Box>
                <Divider sx={{ my: 3 }} />
                <Link
                  to="/portfolio"
                  style={LinkStyles}
                  onClick={toggleDrawer(false)}
                >
                  <MenuItem
                    sx={
                      location.pathname === "/portfolio"
                        ? { backgroundColor: "#4876EE" }
                        : {}
                    }
                  >
                    Home
                  </MenuItem>
                </Link>
                <Link
                  to="/portfolio/About"
                  style={LinkStyles}
                  onClick={toggleDrawer(false)}
                >
                  <MenuItem
                    sx={
                      location.pathname === "/portfolio/About"
                        ? { backgroundColor: "#4876EE" }
                        : {}
                    }
                  >
                    About
                  </MenuItem>
                </Link>
                <Link
                  to="/portfolio/About"
                  style={LinkStyles}
                  onClick={toggleDrawer(false)}
                >
                  <MenuItem
                    sx={
                      location.pathname === "/portfolio/Projects"
                        ? { backgroundColor: "#4876EE" }
                        : {}
                    }
                  >
                    Projects
                  </MenuItem>
                </Link>
                <Link
                  to="/portfolio/Resume"
                  style={LinkStyles}
                  onClick={toggleDrawer(false)}
                >
                  <MenuItem
                    sx={
                      location.pathname === "/portfolio/Resume"
                        ? { backgroundColor: "#4876EE" }
                        : {}
                    }
                  >
                    Resume
                  </MenuItem>
                </Link>
              </Box>
            </Drawer>
          </Box>
        </StyledToolbar>
      </Container>
    </AppBar>
  );
}
