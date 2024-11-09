import React from "react";
import { Container, Grid2, Typography, Box } from "@mui/material";
import ProjectCard from "../Projects/ProjectsCard";
import getProjectsList from "./projectsList";
import { motion } from "framer-motion";
const headStyle = {
  fontFamily: "Arial, sans-serif",
};
const textStyle = {
  fontFamily: "Arial, sans-serif",
  fontSize: "1.3rem",
};
function Projects() {
  const projectsList = getProjectsList();
  return (
    <Box sx={{ py: 15 }}>
      <Container>
        <Typography
          variant="h3"
          sx={{
            textAlign: "center",
            fontWeight: "bold",
            mb: 1,
          }}
          style={headStyle}
        >
          My Recent <span style={{ color: "#4876EE" }}>Works</span>
        </Typography>
        <Typography
          variant="body1"
          sx={{
            textAlign: "center",
            mb: 15,
          }}
          style={textStyle}
        >
          Here are a few projects I've worked on recently.
        </Typography>
        <Grid2 container spacing={4} justifyContent="center">
          {projectsList.map((project) => {
            return (
              <motion.div
                className="box"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.1 }}
                transition={{ type: "spring", stiffness: 50, damping: 10 }}
              >
                <Grid2 item xs={12} sm={6} md={4}>
                  <ProjectCard
                    imgPath={project.imgPath}
                    isBlog={project.isBlog}
                    title={project.title}
                    description={project.description}
                    ghLink={project.ghLink}
                    demoLink={project.demoLink}
                  />
                </Grid2>
              </motion.div>
            );
          })}
        </Grid2>
      </Container>
    </Box>
  );
}

export default Projects;
