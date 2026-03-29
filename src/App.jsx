import { Toolbar } from "@mui/material";
import NavBarr from "./Components/NavBarr";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Hero from "./Sections/Hero";
import Skills from "./Sections/Skills";
import About from "./Sections/About";
import Projects from "./Sections/Projects";
import Contact from "./Sections/Contact";
import Footer from "./Sections/Footer";
import Setting from "./Components/Setting";

function App() {
  const theme = createTheme({
    typography: {
      fontFamily: "'Roboto', sans-serif",
    },
  });
  return (
    <>
      <ThemeProvider theme={theme}>
        <NavBarr />
        <Toolbar />
        <Setting />
        <main className="container">
          <Hero />
          <Skills />
          <About />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </ThemeProvider>
    </>
  );
}
export default App;
