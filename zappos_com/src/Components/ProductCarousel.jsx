


import { Box, Flex, Image, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import { AiOutlineHeart } from "react-icons/ai";
import { Link } from "react-router-dom";



const ProductCarousel_Data = [
  {
 image:"https://m.media-amazon.com/images/I/81NKoInBS7L._AC_SX255_.jpg",
 categories:"Crocs",
 title:"Classic lined Clogs",
 discounted_price:"49.95",
 original_price:"59.95",
 saved_by:"3438"

  },
  {
 image:"https://m.media-amazon.com/images/I/71ZyHfhg4NL._AC_SX255_.jpg",
 categories:"Madden Girl",
 title:"Beella",
 discounted_price:"$34.95",
 original_price:"49.95",
 saved_by:"29"

  },
  {
 image:"https://m.media-amazon.com/images/I/81hRbfDNsFL._AC_SX255_.jpg",
 categories:"Bogs",
 title:"Sauvie Slip-On boots",
 discounted_price:"100.00",
 original_price:"120.00",
 saved_by:"1014"

  },
  {
 image:"https://m.media-amazon.com/images/I/71PNvYvMpGL._AC_SX255_.jpg",
 categories:"addidas running",
 title:"Lite Racer Adapt 3.0",
 discounted_price:"65.95",
 original_price:"100.00",
 saved_by:"424"

  },
  {
 image:"https://m.media-amazon.com/images/I/81cp8xLcHkL._AC_SX255_.jpg",
 categories:"Marrel",
 title:"Moabto Mid-water proof",
 discounted_price:"74.00",
 original_price:"144.00",
 saved_by:"904"

  },
  {
 image:"https://m.media-amazon.com/images/I/81crO3+x7YL._AC_SX255_.jpg",
 categories:"Running",
 title:"Blue Streak",
 discounted_price:"45.99",
 original_price:"66.99",
 saved_by:"606"

  }

];

const ProductCarousel = () => {
  const [numImage, setNumImage] = useState(0);
  // console.log("numImage:", numImage);

  return (
    <Flex
      justifyContent={"space-between"}
      pl="25px"
      pr="25px"
      pt="8px"
      pb="8px"
      textAlign={"center"}
     alignItems={"center"}
    >
      <FaChevronLeft 
        onClick={() =>
          setNumImage(
            numImage === 0 ? ProductCarousel_Data.length - 1 : numImage - 1
          )
        }
        size="23px"
        color="rgb(112,112,112)"
      />
      <Flex>
        <Box  bgColor={"rgb(229,241,248)"} p="15px">
            <Box>
                <Image src={ProductCarousel_Data[numImage].image} alt={ProductCarousel_Data.title} />
            </Box>
            <Box>
                <Text color="hotpink" fontWeight={"500"} display={"flex"}> <AiOutlineHeart mt="15px" /> {ProductCarousel_Data[numImage].saved_by}</Text>
                <Text color="black" fontWeight={"500"}>{ProductCarousel_Data[numImage].categories}</Text>
                <Text color="Blue" fontWeight={"500"}>{ProductCarousel_Data[numImage].title}</Text>
                <Text color="green" fontWeight={"500"} >$ {ProductCarousel_Data[numImage].discounted_price}</Text>
                <Text color="red" fontWeight={"500"}>$ {ProductCarousel_Data[numImage].original_price}</Text>
            </Box>
        </Box>
        {/* <Text fontWeight={500} mr="10px" >
          {ProductCarousel_Data[numImage].boldText
            ? ProductCarousel_Data[numImage].boldText
            :  "" }
        </Text>
        <Text  mr="10px">
          {ProductCarousel_Data[numImage].text
            ? ProductCarousel_Data[numImage].text
            :  "" }
        </Text  >
        <Link to="#"  >
            <Text textDecoration={"underline"} fontWeight={"500"} >

          {ProductCarousel_Data[numImage].linkText
            ? ProductCarousel_Data[numImage].linkText
            :  "" }
            </Text>
        </Link> */}
      </Flex>
      <FaChevronRight
        onClick={() =>
          setNumImage(
            numImage === ProductCarousel_Data.length - 1 ? 0 : numImage + 1
          )
        }
        size="23px"
        color="rgb(112,112,112)"
      />
    </Flex>
  );
};



export default ProductCarousel