import React, { useState, useEffect } from "react";
import { Box, Button, Container } from "@mui/material";
import { Document, Page, pdfjs } from "react-pdf";
import pdf from "../assets/Nagarjuna-Resume.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url
).toString();

export default function Resume() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const scale = width > 500 ? 1.7 : 0.6;
  const pageAspectRatio = 1.75;
  const pageHeight = width > 500 ? scale * (width / pageAspectRatio) : "65vh";

  return (
    <Box sx={{ flexGrow: 1, p: { xs: 1, sm: 2, md: 3 }, marginTop: "5rem" }}>
      <Container maxWidth="lg">
        <Box display="flex" justifyContent="center" mt={3} mb={3}>
          <Button
            variant="contained"
            color="#4876EE"
            href={pdf}
            target="_blank"
            startIcon={<AiOutlineDownload />}
            sx={{
              maxWidth: "250px",
              fontSize: { xs: "0.8rem", sm: "1rem" },
              backgroundColor: "#4876EE",
              fontFamily: "arial",
            }}
          >
            Download CV
          </Button>
        </Box>

        <Box
          display="flex"
          justifyContent="center"
          overflow="hidden"
          width="100%"
          height={pageHeight}
        >
          <Document file={pdf}>
            <Page pageNumber={1} scale={scale} />
          </Document>
        </Box>

        <Box display="flex" justifyContent="center" mt={3}>
          <Button
            variant="contained"
            color="#4876EE"
            href={pdf}
            target="_blank"
            startIcon={<AiOutlineDownload />}
            sx={{
              maxWidth: "250px",
              fontSize: { xs: "0.8rem", sm: "1rem" },
              backgroundColor: "#4876EE",
              fontFamily: "arial",
            }}
          >
            Download CV
          </Button>
        </Box>
      </Container>
    </Box>
  );
}
