import { Stack } from "@chakra-ui/react";
import React, { useState } from "react";
import HomePage_Text_Carousel from "../Components/HomePage_Text_Carousel";
import Navbar from "../Components/Navbar";
import SecondTopMostBar from "../Components/SecondTopMostBar";
import SmallScreenSearchBar from "../Components/SmallScreenSearchBar";
import TopMostWithLogo from "../Components/TopMostWithLogo";
import TopSearchBar from "../Components/TopSearchBar";

const ProductPageOG = () => {
const [categogo,setCategogo]=useState("Women")

    useEffect(() => {
      document.title=`Products ${categogo}`
    })
    const handleClickWomen=()=>{
        setCategogo("Women")
    }
    const handleClickMen=()=>{
        setCategogo("Men")
    }
  return (
    <>
      <TopMostWithLogo />
      <SecondTopMostBar />
      <TopSearchBar />
      <SmallScreenSearchBar />
      <Navbar />
      <HomePage_Text_Carousel />
    </>
  );
};

export default ProductPageOG;
