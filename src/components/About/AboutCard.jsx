import React from "react";
import { Card, CardContent, Typography, Box, Grid2 } from "@mui/material";
import { ImPointRight } from "react-icons/im";
export default function AboutCard() {
  return (
    <Box>
      <Card
        sx={{
          borderRadius: "12px",
          boxShadow: 3,
          maxWidth: "750px",
        }}
      >
        <CardContent>
          <Typography
            variant="body1"
            sx={{
              fontFamily: "Arial, sans-serif",
              fontSize: "1.5em",
              lineHeight: "1.6",
            }}
          >
            Hi Everyone, I am{" "}
            <span style={{ color: "#4876EE", fontWeight: "bold" }}>
              Nagarjuna
            </span>{" "}
            from{" "}
            <span style={{ color: "#4876EE", fontWeight: "bold" }}>
              Andhra pradesh, India.
            </span>
            <br />
            <span>
              I am currently studying B.Tech 3rd year at Rajiv Gandhi University
              of knowledge and Technologies.
            </span>
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </Typography>
          <Grid2 sx={{ paddingLeft: "50px" }}>
            <Typography
              variant="body1"
              sx={{
                fontFamily: "Arial, sans-serif",
                fontSize: "1.3em",
                lineHeight: "1.6",
                marginTop: "1rem",
              }}
            >
              <ImPointRight /> Travelling
            </Typography>
          </Grid2>
        </CardContent>
      </Card>
    </Box>
  );
}
