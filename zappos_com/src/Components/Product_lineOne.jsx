import { Box, Grid, GridItem, Image, Text } from '@chakra-ui/react'
import React from 'react'
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
    // {
    //   Shop_popular_categories_image:
    //     "https://m.media-amazon.com/images/I/81W8icKY5PL._AC_SX255_.jpg",
    //   Shop_popular_categories_title: "Denim",
    // },
    {
      Shop_popular_categories_image:
        "https://m.media-amazon.com/images/I/716Hx34WZnL._AC_SX255_.jpg",
      Shop_popular_categories_title: "Loafers",
    },
  ];
  
const Product_lineOne = () => {
  return (
    <>
      <Grid templateColumns={["repeat(2, 1fr)","repeat(3, 1fr)","repeat(6, 1fr)"]} gap={4} h="230px" >
      {
        Shop_popular_categories.map((item)=>(
          
          <GridItem w="100%" h="100%" bg="none">
            <Box>
              <Image h="100%" src={item.Shop_popular_categories_image} alt={item.Shop_popular_categories_title} />
            </Box>
            <Text>{item.Shop_popular_categories_title}</Text>
          </GridItem>
        ))
      }
      
    </Grid>
    </>
  )
}

export default Product_lineOne