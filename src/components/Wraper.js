import React, { useEffect, useState } from "react";
import "./assets/css/Wraper.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Pages/Navbar/Navbar";
import Section2 from "./Pages/Herosection/Herosection";
import Footer from "./Pages/Footer/Footer";
// import Section3 from "./Pages/GameWinners/GameWinners";
import AvailableGames from "./games/AvailableGames/AvailableGames";
import GameRateSection from "./Pages/GameRates/GameRateSection";
import StartLine from "./games/StarLine/StartLine";
import FandQSection from "./Pages/FandQSection/FandQSection";
import AndarBahar from "./games/AndarBahar/AndarBaharGames";

const Wraper = () => {


  
  return (
    <>
      <Navbar />
      <Section2 />
      {/* <Section3 /> */}
      <GameRateSection />
      <AvailableGames />
      <StartLine />
      <AndarBahar />
      <FandQSection />
      <Footer />
    </>
  );
};

export default Wraper;
