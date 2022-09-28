import React from "react";
import HomePage_Text_Carousel from "../Components/HomePage_Text_Carousel";
import Home_Page from "../Components/Home_Page";
import Navbar from "../Components/Navbar";
import SecondTopMostBar from "../Components/SecondTopMostBar";
import SmallScreenSearchBar from "../Components/SmallScreenSearchBar";
import TopMostWithLogo from "../Components/TopMostWithLogo";
import TopSearchBar from "../Components/TopSearchBar";

const Home = () => {
  return (
    <>
      <TopMostWithLogo />
      <SecondTopMostBar />
      <TopSearchBar />
      <SmallScreenSearchBar/>
      <Navbar />
      <HomePage_Text_Carousel/>
      <Home_Page/>
    </>
  );
};

export default Home;
