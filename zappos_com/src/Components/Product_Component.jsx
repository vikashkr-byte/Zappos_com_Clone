import { Box, Flex, Grid, Image, Spacer, Text } from "@chakra-ui/react";
import React from "react";

const Product_Component = () => {
  return (
    <Grid templateColumns={['repeat(1, 1fr)','repeat(3, 1fr)']} gap={2} >
      <Box p="4" bg="white">
        <Box>
          <Image
            src="https://m.media-amazon.com/images/G/01/zappos/landing/opus/2021/homepage/Zappos_ONE_Retina.png"
            alt="zapposOne"
          />
        </Box>
        <Box pt="10px" textAlign="center" lineHeight="25px" >
            <Text fontSize="19px" fontWeight="500" color="rgb(4,4,2)" >Diversity equity & Inclusion</Text>
            <Text fontSize="15px" mb="10px" >At Zappos, diversity and individuality are central to our core values.</Text>
            <Text fontSize="18px" fontWeight="500" textDecoration="underline" _hover={{
                color:"rgb(0,118,189)"
            }} >LEARN MORE ABOUT ZAPPOS ONE PURPOSE</Text>
        </Box>
      </Box>
    
      <Box p="4" bg="white">
        <Box>
          <Image
            src="https://m.media-amazon.com/images/G/01/2022/homepage2.08/Blank_500_x_500-491.jpg"
            alt="zapposTwo"
          />
        </Box>
        <Box pt="10px" textAlign="center" lineHeight="25px" >
            <Text fontSize="19px" fontWeight="500" color="rgb(4,4,2)" >Zappos for Good</Text>
            <Text fontSize="15px" mb="10px" >Learn how to easily donate or recycle your secondhand items.</Text>
            <Text fontSize="18px" fontWeight="500" textDecoration="underline" _hover={{
                color:"rgb(0,118,189)"
            }} >EXPLORE ZAPPOS FOR GOOD</Text>
    </Box>
      </Box>
   
      <Box p="4" bg="white">
        <Box>
          <Image
            src="https://m.media-amazon.com/images/G/01/zappos/landing/opus/2020/homepage/july/GGPromo.png"
            alt="zapposThree"
          />
        </Box>
        <Box pt="10px" textAlign="center" lineHeight="25px" >
            <Text fontSize="19px" fontWeight="500" color="rgb(4,4,2)" >Goods for Good</Text>
            <Text fontSize="15px" mb="10px" >We're highlighting brands who are making a difference and helping build a better place for us all.</Text>
            <Text fontSize="18px" fontWeight="500" textDecoration="underline"_hover={{
                color:"rgb(0,118,189)"
            }} >SHOP GOODS FOR GOOD</Text>
        </Box>
      </Box>
    </Grid>
  );
};
export default Product_Component;
