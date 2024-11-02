import React from "react";
import { Container } from "@mui/material";
import GitHubCalendar from "react-github-calendar";
export default function Github() {
  return (
    <div>
      <Container
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
        sx={{ paddingBottom: { xs: "1.5em" } }}
      >
        <h1 style={{ paddingBottom: "20px", fontFamily: "arial" }}>
          Days I <strong style={{ color: "#4876EE" }}>Code</strong>
        </h1>
        <GitHubCalendar
          username="nagarjuna0033"
          style={{ fontFamily: "arial" }}
        />
      </Container>
    </div>
  );
}
