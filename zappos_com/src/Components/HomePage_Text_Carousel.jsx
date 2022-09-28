import { Flex, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const Text_Carousel_HomePage = [
  {
    text: " New fall fashion arrivals from your favorite brands!",
    linkText: "Shop Fall Now",
  },
  {
    boldText: "Virtual Try-On Just Launched:",
    text: " Try on shoes IRL! 👟",
    linkText: "Learn More",
  },
  {
    boldText: "FREE 365 Day Returns and Exchanges!",
  },
  {
    boldText: "Easy Returns:",
    text: " FREE UPS Pickups from your home (no printer required)!",
    linkText: "Learn More",
  },
];

const HomePage_Text_Carousel = () => {
  const [numText, setNumText] = useState(0);
  console.log("numText:", numText);

  return (
    <Flex
      justifyContent={"space-between"}
      pl="25px"
      pr="25px"
      pt="8px"
      pb="8px"
      bgColor={"rgb(229,241,248)"}
    >
      <FaChevronLeft
        onClick={() =>
          setNumText(
            numText === 0 ? Text_Carousel_HomePage.length - 1 : numText - 1
          )
        }
        size="23px"
        color="rgb(112,112,112)"
      />
      <Flex>
        <Text fontWeight={500} mr="10px" >
          {Text_Carousel_HomePage[numText].boldText
            ? Text_Carousel_HomePage[numText].boldText
            :  "" }
        </Text>
        <Text  mr="10px">
          {Text_Carousel_HomePage[numText].text
            ? Text_Carousel_HomePage[numText].text
            :  "" }
        </Text  >
        <Link to="#"  >
            <Text textDecoration={"underline"} fontWeight={"500"} >

          {Text_Carousel_HomePage[numText].linkText
            ? Text_Carousel_HomePage[numText].linkText
            :  "" }
            </Text>
        </Link>
      </Flex>
      <FaChevronRight
        onClick={() =>
          setNumText(
            numText === Text_Carousel_HomePage.length - 1 ? 0 : numText + 1
          )
        }
        size="23px"
        color="rgb(112,112,112)"
      />
    </Flex>
  );
};

export default HomePage_Text_Carousel;
