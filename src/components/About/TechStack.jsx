import React from "react";
import { Grid2, Box } from "@mui/material";
import { SiKotlin, SiJetpackcompose } from "react-icons/si";
import { motion } from "framer-motion";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiGit,
  DiAndroid,
  DiFirebase,
} from "react-icons/di";

export default function Techstack() {
  const style = {
    border: "2px solid #4876EE",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "200px",
    width: "200px",
    textAlign: "center",
  };
  const textStyle = {
    fontSize: "1.3rem",
    fontFamily: "arial",
  };
  return (
    <Box sx={{ paddingBottom: "50px" }}>
      <Grid2 container spacing={5} justifyContent="center">
        {[
          { icon: <DiAndroid size="3rem" />, label: "Android" },
          { icon: <SiKotlin size="3rem" />, label: "Kotlin" },
          {
            icon: <SiJetpackcompose size="2.5rem" />,
            label: "Jetpack Compose",
          },
          { icon: <DiJavascript1 size="3rem" />, label: "Javascript" },
          { icon: <DiNodejs size="3rem" />, label: "Node JS" },
          { icon: <DiReact size="3rem" />, label: "React" },
          { icon: <DiMongodb size="3rem" />, label: "Mongo DB" },
          { icon: <DiGit size="3rem" />, label: "Git" },
          { icon: <DiFirebase size="3rem" />, label: "Firebase" },
        ].map(({ icon, label }, index) => (
          <motion.div
            className="box"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <Grid2 item xs={4} md={2} key={index} sx={style}>
              {icon}
              <br />
              <span style={textStyle}>{label}</span>
            </Grid2>
          </motion.div>
        ))}
      </Grid2>
    </Box>
  );
}
