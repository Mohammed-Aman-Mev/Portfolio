import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Navbar, Hero, About, Tech, Works, Contact } from "./components";
import Stars from "./components/canvas/Stars";

const App = () => {
  return (
    <BrowserRouter>
      <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center w-full">
        <Navbar />
        <Hero />
      </div>
      <About />
      <Tech />
      <Works />
      <Contact />
      <Stars />
    </BrowserRouter>
  );
};

export default App;
