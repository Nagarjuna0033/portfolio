import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
  Box,
} from "@mui/material";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

export default function ProjectCard(props) {
  return (
    <Card
      sx={{
        maxWidth: 350,
        minHeight: 750,
        margin: "auto",
        display: "flex",
        flexDirection: "column",
        border: "1px solid #4876EE",
      }}
    >
      <CardMedia
        component="img"
        height="180"
        image={props.imgPath}
        alt="card-img"
        style={{
          objectFit: "fill",
        }}
      />
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          sx={{
            mt: 1,
            fontFamily: "Arial, sans-serif",
            fontSize: "1.5em",
            lineHeight: "1.6",
          }}
        >
          {props.title}
        </Typography>
        <Typography
          variant="body2"
          sx={{
            mt: 1,
            fontFamily: "Arial, sans-serif",
            fontSize: "1.3em",
            lineHeight: "1.5",
            textAlign: "justify",
          }}
        >
          {props.description}
        </Typography>
      </CardContent>
      <Box
        sx={{
          display: "flex",
          gap: "1rem",
          mt: "auto",
          mb: 2,
          justifyContent: "center",
        }}
      >
        <Button
          variant="contained"
          href={props.ghLink}
          target="_blank"
          color="#4876EE"
          startIcon={<BsGithub />}
          sx={{
            fontSize: { xs: "0.8rem", sm: "1rem" },
            fontFamily: "Arial",
            backgroundColor: "#4876EE",
          }}
        >
          {props.isBlog ? "Blog" : "GitHub"}
        </Button>
        {!props.isBlog && props.demoLink && (
          <Button
            variant="contained"
            href={props.demoLink}
            target="_blank"
            color="#4876EE"
            startIcon={<CgWebsite />}
            sx={{
              fontSize: { xs: "0.8rem", sm: "1rem" },
              fontFamily: "Arial",
              backgroundColor: "#4876EE",
            }}
          >
            Demo
          </Button>
        )}
      </Box>
    </Card>
  );
}
