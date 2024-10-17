import React from "react";
import { Container, Box, Typography, Avatar } from "@mui/material";
import Tilt from "react-parallax-tilt";
import profile from "../assets/arjun.jpg";

export default function Intro() {
  return (
    <Box
      sx={{
        width: "100%",
        padding: { xs: "2rem", sm: "4rem", md: "5rem" },
        paddingLeft: { xs: "0rem", sm: "3rem", md: "5rem" },
      }}
    >
      <Container
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          alignItems: "center",
          justifyContent: "space-between",
          margin: { xs: "0 0rem", sm: "0 0rem" },
        }}
      >
        <Box
          sx={{
            maxWidth: { xs: "100%", sm: "75%" },
            mb: { xs: 4, sm: 0 },
          }}
        >
          <Typography
            variant="h2"
            sx={{
              fontFamily: "arial",
              fontSize: { xs: "1.5rem", sm: "2.1rem" },
              marginBottom: "1rem",
              textAlign: { xs: "center", sm: "left" },
            }}
          >
            LET ME <span style={{ color: "#4876EE" }}> INTRODUCE </span> MYSELF
          </Typography>
          <br />
          <Typography
            variant="h5"
            sx={{
              fontFamily: "arial",
              fontWeight: "normal",
              fontSize: { xs: "1rem", sm: "1.25rem" },
            }}
          >
            I fell in love with programming and I have at least learnt
            something, I think… 🤷‍♂️
          </Typography>
          <Typography
            variant="h5"
            sx={{
              fontFamily: "arial",
              fontWeight: "normal",
              fontSize: { xs: "1rem", sm: "1.25rem" },
            }}
          >
            <br />I am fluent in classics like
            <i>
              <b style={{ color: "#4876EE" }}> Javascript, Kotlin. </b>
            </i>
          </Typography>
          <br />
          <Typography
            variant="h5"
            sx={{
              fontFamily: "arial",
              fontWeight: "normal",
              fontSize: { xs: "1rem", sm: "1.25rem" },
            }}
          >
            My field of Interest's are building new &nbsp;
            <i>
              <b style={{ color: "#4876EE" }}>Web Technologies and Products</b>{" "}
              and also in areas related to{" "}
              <b style={{ color: "#4876EE" }}>Android.</b>
            </i>
          </Typography>
          <br />
          <Typography
            variant="h5"
            sx={{
              fontFamily: "arial",
              fontWeight: "normal",
              fontSize: { xs: "1rem", sm: "1.25rem" },
            }}
          >
            Whenever possible, I also apply my passion for developing products
            with{" "}
            <b style={{ color: "#4876EE" }}>
              Node.js, Android (Native with Kotlin)
            </b>{" "}
            and
            <i>
              <b style={{ color: "#4876EE" }}>
                {" "}
                Modern Javascript Library and Frameworks
              </b>
            </i>
            &nbsp; like
            <i>
              <b style={{ color: "#4876EE" }}> React.js ...</b>
            </i>
          </Typography>
        </Box>
        <Box>
          <Tilt>
            <Avatar
              alt="Nagarjuna"
              src={profile}
              sx={{ width: { xs: 150, sm: 250 }, height: { xs: 175, sm: 275 } }} // Responsive avatar size
            />
          </Tilt>
        </Box>
      </Container>
    </Box>
  );
}
