import React from "react";
import { Box, Container } from "@mui/material";
import Type from "../Shared/Type";
import { Stack, Typography } from "@mui/material";
import coding from "../assets/coding.jpeg";

export default function Hero() {
  return (
    <Box
      id="hero"
      sx={(theme) => ({
        width: "100%",
        backgroundRepeat: "no-repeat",
        backgroundImage:
          "radial-gradient(ellipse 80% 50% at 50% -20%, hsl(210, 100%, 90%), transparent)",
        ...theme.applyStyles("dark", {
          backgroundImage:
            "radial-gradient(ellipse 80% 50% at 50% -20%, hsl(210, 100%, 16%), transparent)",
        }),
      })}
    >
      <Container
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          alignItems: "center",
          pt: { xs: 19, sm: 6, md: 25 },
          pb: { xs: 4, sm: 6, md: 15 },
          maxWidth: "100% !important",
          paddingLeft: { xs: "1rem", sm: "3rem", md: "5rem" },
          paddingRight: { xs: "2rem", sm: "3rem", md: "5rem" },
        }}
      >
        <Stack
          spacing={2}
          useFlexGap
          sx={{
            alignItems: "left",
            width: { xs: "100%", sm: "100%", md: "70%" },
          }}
        >
          <Typography
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              fontSize: { xs: "2rem", sm: "1.5rem", md: "2.1rem" },
              fontFamily: "arial",
            }}
          >
            Hi&nbsp;There!&nbsp;👋
          </Typography>
          <Typography
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              fontSize: { xs: "1.9rem", sm: "3rem", md: "2.3rem" },
              fontFamily: "arial",
            }}
          >
            I'M &nbsp;
            <Typography
              component="span"
              variant="h1"
              sx={{
                fontFamily: "arial",
                color: "#4876EE",
                fontSize: { xs: "2.3rem", sm: "3rem", md: "2.5rem" },
              }}
            >
              NAGARJUNA
            </Typography>
          </Typography>
          <Box
            sx={{
              fontSize: { xs: "1.5rem", sm: "2.1rem", md: "2.5rem" },
              fontFamily: "arial",
              color: "#4876EE",
              fontWeight: "550",
            }}
          >
            <Type />
          </Box>
        </Stack>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            pt: { xs: 9, sm: 0, md: 0 },
            height: { xs: "auto", sm: "auto" },
            width: { xs: "100%", sm: "auto" },
          }}
        >
          <img
            src={coding}
            alt="coding"
            style={{
              filter: "hue-rotate(300deg)",
              maxWidth: "100%",
              height: "350px",
              width: "auto",
            }}
          />
        </Box>
      </Container>
    </Box>
  );
}
