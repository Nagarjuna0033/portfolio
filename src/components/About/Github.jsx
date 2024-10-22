import React from "react";
import { Container } from "@mui/material";
import GitHubCalendar from "react-github-calendar";
export default function Github() {
  return (
    <div>
      <Container style={{ justifyContent: "center", paddingBottom: "10px" }}>
        {/* <h1 style={{ paddingBottom: "20px" }}>
          Days I <strong>Code</strong>
        </h1> */}
        <GitHubCalendar username="nagarjuna0033" />
      </Container>
    </div>
  );
}
