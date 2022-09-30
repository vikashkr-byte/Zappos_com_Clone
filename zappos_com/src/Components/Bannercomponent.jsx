import { Box, Image, Text } from '@chakra-ui/react'
import React from 'react'

const Bannercomponent = () => {
  return (
    <Box w="100%">
        <Image
          src="https://m.media-amazon.com/images/G/01/2022/homepage9.26/COOP-FALL-CAMPAGIN-WOMENS-STEVE-MADDEN-HERO-2880x1400.jpg"
          alt="banner"
          width={"100%"}
          position="relative"
        />
        <Box
          width={"280px"}
          h="250px"
          backgroundColor={"white"}
          position="absolute"
          p="20px"
          
          left={"35px"}
          top="300px"
        >
          <Text fontWeight={"500"} fontSize={"20px"} color="rgb(31,31,31)">
            They're Here: Fall Fashion Trends
          </Text>
          <Text lineHeight={"19px"} color="rgb(31,31,31)">
            That fall feeling is coming in hot with chunky knits, sleek
            trousers, and other key pieces for the season!{" "}
          </Text>
          <Box
            border={"3px"}
            backgroundColor="gray.200"
            p="5px"
            borderRadius={"5px"}
            borderColor={"black"}
            mt="17px"
            textAlign={"center"}
          >
            <Text fontWeight={"700"} fontSize={"14px"} color="rgb(31,31,31)">
              SHOP WOMEN's FALL FASHION TRENDS
            </Text>
          </Box>
        </Box>
      </Box>
  )
}

export default Bannercomponent