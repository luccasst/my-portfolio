import React from "react";
import Navbar from './components/NavBar';
import Home from './components/home';
import About from './components/About';
import Services from "./components/Services";
import Projects from './components/Project';
import Skills from "./components/Skills";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Services />
      <Projects />
      <Skills />
      <Footer />
    </>
  );
};

export default App;
