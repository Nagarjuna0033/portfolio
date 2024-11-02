import React from "react";
import { Grid2, Box } from "@mui/material";
import { motion } from "framer-motion";
import {
  SiVisualstudiocode,
  SiPostman,
  SiSlack,
  SiWindows,
} from "react-icons/si";

export default function Toolstack() {
  const style = {
    border: "2px solid #4876EE",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
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
          { icon: <SiWindows size="3rem" />, label: "Windows" },
          {
            icon: <SiVisualstudiocode size="3rem" />,
            label: "Visual Studio code",
          },
          {
            icon: <SiPostman size="3rem" />,
            label: "Postman",
          },
          { icon: <SiSlack size="3rem" />, label: "Slack" },
        ].map(({ icon, label }, index) => (
          <motion.div
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
