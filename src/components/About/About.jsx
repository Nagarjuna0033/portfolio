import React from "react";
import { Container, Stack, Grid2, Typography } from "@mui/material";
import Techstack from "./TechStack";
import AboutCard from "./AboutCard";
import Toolstack from "./ToolStack";
import laptop from "../assets/laptop_asset.png";
import Github from "./Github";
export default function About() {
  return (
    <Container
      sx={{
        maxWidth: "100% !important",
        paddingTop: "9rem",
        paddingLeft: { xs: "1rem", md: "5rem !important" },
      }}
    >
      <Stack justifyContent="center">
        <Grid2
          sx={{
            display: "flex",
            justifyContent: "space-between",
            flexDirection: { xs: "column", md: "row" },
            marginBottom: "3.5rem",
          }}
        >
          <Grid2
            md={7}
            xs={12}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              paddingBottom: "50px",
            }}
          >
            <Typography
              sx={{
                fontSize: { xs: "1.5em", md: "2.1em" },
                paddingBottom: "20px",
                fontFamily: "arial",
              }}
            >
              Know Who <strong style={{ color: "#4876EE" }}>I'M</strong>
            </Typography>
            <AboutCard />
          </Grid2>
          <Grid2
            item
            md={5}
            xs={12}
            sx={{
              display: "flex",
              justifyContent: "center",
              paddingTop: { xs: "20px", md: "120px" },
              paddingBottom: "50px",
            }}
          >
            <img
              src={laptop}
              alt="about"
              style={{
                width: "100%",
                height: "auto",
                maxWidth: "550px",
              }}
            />
          </Grid2>
        </Grid2>
        <Grid2
          sx={{
            display: "flex",
            textAlign: "center",
            justifyContent: "space-between",
            flexDirection: { xs: "column", md: "column" },
          }}
        >
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: "1.5em", md: "2.5em" },
              paddingBottom: "2.5rem",
              fontFamily: "arial",
            }}
          >
            Professional <strong className="purple">Skillset </strong>
          </Typography>
          <Techstack />
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: "1.5em", md: "2.5em" },
              paddingBottom: "2.5rem",
              fontFamily: "arial",
            }}
          >
            <strong className="purple">Tools</strong> I use
          </Typography>
          <Toolstack />
          <Github />
        </Grid2>
      </Stack>
    </Container>
  );
}
