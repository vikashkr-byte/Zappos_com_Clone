import {
  Box,
  Flex,
  Grid,
  GridItem,
  Heading,
  HStack,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import Bannercomponent from "./Bannercomponent";
import Product_lineOne from "./Product_lineOne";

const Shop_popular_categories = [
  {
    Shop_popular_categories_image:
      "https://m.media-amazon.com/images/I/81crO3+x7YL._AC_SX255_.jpg",
    Shop_popular_categories_title: "Sneakers & Athletic Shoes",
  },
  {
    Shop_popular_categories_image:
      "https://m.media-amazon.com/images/I/71AQ9q89+gL._AC_SX255_.jpg",
    Shop_popular_categories_title: "Ankle Booties",
  },
  {
    Shop_popular_categories_image:
      "https://m.media-amazon.com/images/I/71uz3AedwVL._AC_SX255_.jpg",
    Shop_popular_categories_title: "Lifestyle Sneakers",
  },
  {
    Shop_popular_categories_image:
      "https://m.media-amazon.com/images/I/61h70xJXNRL._AC_SX255_.jpg",
    Shop_popular_categories_title: "Sandals On Sale",
  },
  {
    Shop_popular_categories_image:
      "https://m.media-amazon.com/images/I/81W8icKY5PL._AC_SX255_.jpg",
    Shop_popular_categories_title: "Denim",
  },
  {
    Shop_popular_categories_image:
      "https://m.media-amazon.com/images/I/716Hx34WZnL._AC_SX255_.jpg",
    Shop_popular_categories_title: "Loafers",
  },
];

const Home_Page = () => {
  return (
    <>
      <Bannercomponent display={["none","none","none","FLEX"]} />
      <Product_lineOne />
    </>
  );
};

export default Home_Page;
