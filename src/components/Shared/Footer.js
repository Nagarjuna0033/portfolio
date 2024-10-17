import React from "react";
import { Container, Typography, Stack, Box } from "@mui/material";
import { GitHub, LinkedIn, Twitter } from "@mui/icons-material";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();

  return (
    <Container
      sx={{
        maxWidth: "100% !important",
        padding: { xs: "2rem", sm: "5rem" },
        paddingBottom: { xs: "2rem", sm: "0rem" },
      }}
      disableGutters
    >
      <Stack
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" }, // Stack vertically on small screens
          alignItems: "center",
          justifyContent: "space-between",
          textAlign: { xs: "center", sm: "left" }, // Center text on small screens
        }}
      >
        <Box>
          <Typography
            component="h7"
            variant="h7"
            fontFamily={"arial"}
            sx={{ fontSize: { xs: "0.8rem", sm: "1rem" } }}
          >
            Designed and Developed by Nagarjuna
          </Typography>
        </Box>
        <Box>
          <Typography
            component="h7"
            variant="h7"
            fontFamily={"arial"}
            sx={{ fontSize: { xs: "0.8rem", sm: "1rem" } }}
          >
            Copyright © {year}
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            gap: 5,
            justifyContent: { xs: "center", sm: "flex-start" },
            marginTop: { xs: "1rem", sm: "0rem" },
          }}
        >
          <Typography>
            <a
              href="https://github.com/Nagarjuna0033"
              target="_blank"
              rel="noopener noreferrer"
              style={{ fontSize: "1.5rem" }} // Responsive icon size
            >
              <GitHub />
            </a>
          </Typography>

          <Typography>
            <a
              href="https://twitter.com/Arjun3104"
              target="_blank"
              rel="noopener noreferrer"
              style={{ fontSize: "1.5rem" }} // Responsive icon size
            >
              <Twitter />
            </a>
          </Typography>

          <Typography>
            <a
              href="https://www.linkedin.com/in/nagarjuna3/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ fontSize: "1.5rem" }} // Responsive icon size
            >
              <LinkedIn />
            </a>
          </Typography>
        </Box>
      </Stack>
    </Container>
  );
}

export default Footer;
