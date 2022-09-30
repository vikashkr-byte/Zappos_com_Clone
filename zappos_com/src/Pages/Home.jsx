import React from "react";
import Footer_HomePage from "../Components/Footer_HomePage";
import HomePage_Text_Carousel from "../Components/HomePage_Text_Carousel";
import Home_Page from "../Components/Home_Page";
import Navbar from "../Components/Navbar";
import Product_Component from "../Components/Product_Component";
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
      <Product_Component/>
      <Footer_HomePage/>
    </>
  );
};

export default Home;
