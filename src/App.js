import * as React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Navbar from "./components/Shared/Navbar";
import Footer from "./components/Shared/Footer";
import getMPTheme from "./components/theme/getMPTheme";
import Home from "./components/Home/Home";
import { Routes, Route, Navigate } from "react-router-dom";
import About from "./components/About/About";
// import TemplateFrame from "./components/TemplateFrame";

export default function App() {
  const [mode, setMode] = React.useState("dark"); // default mode is dark
  // const [showCustomTheme, setShowCustomTheme] = React.useState(true); // default theme is custom
  const MPTheme = createTheme(getMPTheme(mode));
  // const defaultTheme = createTheme({ palette: { mode } });

  // This code only runs on the client side, to determine the system color preference
  React.useEffect(() => {
    // Check if there is a preferred mode in localStorage
    const savedMode = localStorage.getItem("themeMode");
    if (savedMode) {
      setMode(savedMode);
    } else {
      // If no preference is found, it uses system preference
      const systemPrefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      setMode(systemPrefersDark ? "dark" : "light");
    }
  }, []);

  const toggleColorMode = () => {
    const newMode = mode === "dark" ? "light" : "dark";
    setMode(newMode);
    localStorage.setItem("themeMode", newMode); // Save the selected mode to localStorage
  };

  // const toggleCustomTheme = () => {
  //   setShowCustomTheme((prev) => !prev);
  // };

  return (
    // <TemplateFrame
    //   toggleCustomTheme={toggleCustomTheme}
    //   showCustomTheme={showCustomTheme}
    //   mode={mode}
    //   toggleColorMode={toggleColorMode}
    // >
    // <ThemeProvider theme={showCustomTheme ? MPTheme : defaultTheme}>
    <ThemeProvider theme={MPTheme}>
      <CssBaseline enableColorScheme />
      <Navbar mode={mode} toggleColorMode={toggleColorMode} />
      <div>
        <Routes>
          <Route path="/" element={<Navigate to="/portfolio" />} />
          <Route path="/portfolio" element={<Home />} />
          <Route path="/portfolio/About" element={<About />} />
        </Routes>
      </div>
      <Footer />
    </ThemeProvider>
    // </TemplateFrame>
  );
}
