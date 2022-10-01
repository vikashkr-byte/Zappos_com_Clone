import React from "react";
import AddBanner from "../Components/AddBanner";
import Footer_HomePage from "../Components/Footer_HomePage";
import HomePage_Text_Carousel from "../Components/HomePage_Text_Carousel";
import Home_Page from "../Components/Home_Page";
import Navbar from "../Components/Navbar";
import ProductCarousel from "../Components/ProductCarousel";
import Product_Component from "../Components/Product_Component";
import Product_Componentthree from "../Components/Product_Componentthree";
import Product_ComponentTwo from "../Components/Product_ComponentTwo";
import Product_lineOne from "../Components/Product_lineOne";
import SecondTopMostBar from "../Components/SecondTopMostBar";
import SmallScreenSearchBar from "../Components/SmallScreenSearchBar";
import TopMostWithLogo from "../Components/TopMostWithLogo";
import TopSearchBar from "../Components/TopSearchBar";
import Allroutes from "../Routes/Allroutes";
import Sign_in_page from "./Sign_in_page";

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
      {/* <Sign_in_page/> */}
      {/* <Product_lineOne/> */}
      <Product_ComponentTwo/>
      <AddBanner/>
      <Product_Componentthree/>
      <ProductCarousel/>
      <Product_Component/>
      <Footer_HomePage/>
    </>
  );
};

export default Home;
