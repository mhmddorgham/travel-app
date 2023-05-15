import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Destinations from "./components/Destinations";
import Flights from "./components/Flights";
import Selects from "./components/Selects";
import Carousel from "./components/Carousel";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Destinations />
      <Flights />
      <Selects />
      <Carousel />
      <Footer />
    </div>
  );
};

export default App;
