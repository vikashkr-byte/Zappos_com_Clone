import { Box, Flex, Grid, Image, Spacer, Text } from "@chakra-ui/react";
import React from "react";






const Product_ComponentTwo = () => {
  return (
    <Grid templateColumns={['repeat(1, 1fr)','repeat(3, 1fr)']} gap={2} >
      <Box p="4" bg="white">
        <Box>
          <Image
            src="https://m.media-amazon.com/images/G/01/2022/womens-shoes/WOMENS-HEELS-PUMPS-AUGUST-PROMO-500X500.jpg"
            alt="zapposOne_"
          />
        </Box>
        <Box pt="10px" textAlign="center" lineHeight="25px" >
            <Text fontSize="19px" fontWeight="500" color="rgb(4,4,2)" >Pumps, Stilettos, and Slingbacks, Oh My!</Text>
            <Text fontSize="15px" mb="10px" >Heels—the perfect excuse to dress up for every occasion!
</Text>
            <Text fontSize="18px" fontWeight="500" textDecoration="underline" _hover={{
                color:"rgb(0,118,189)"
            }} >SHOP HEELS YOU’LL LOVE
            </Text>
        </Box>
      </Box>
    
      <Box p="4" bg="white">
        <Box>
          <Image
            src="https://m.media-amazon.com/images/G/01/2022/homepage9.19/BAGS-HANDBAGS-DESIGNER-FALL-PROMO-AUGUST-500X500.jpg"
            alt="zapposTwo_"
          />
        </Box>
        <Box pt="10px" textAlign="center" lineHeight="25px" >
            <Text fontSize="19px" fontWeight="500" color="rgb(4,4,2)" >The Best in Designer Bags for Fall
</Text>
            <Text fontSize="15px" mb="10px" >Invest in standout designs that add a little oomph to your wardrobe!
</Text>
            <Text fontSize="18px" fontWeight="500" textDecoration="underline" _hover={{
                color:"rgb(0,118,189)"
            }} >Shop Men’s Fall Footwear

            </Text>
    </Box>
      </Box>
   
      <Box p="4" bg="white">
        <Box>
          <Image
            src="https://m.media-amazon.com/images/G/01/2022/homepage9.26/MENS-FALL-BASICS-SEPTEMBER-TRIPTYCH-500x500.jpg"
            alt="zapposThree_"
          />
        </Box>
        <Box pt="10px" textAlign="center" lineHeight="25px" >
            <Text fontSize="19px" fontWeight="500" color="rgb(4,4,2)" >Smart Style: Fall Footwear Basics
</Text>
            <Text fontSize="15px" mb="10px" >Featuring chukkas, sneakers, oxfords, and other must-haves!
</Text>
            <Text fontSize="18px" fontWeight="500" textDecoration="underline"_hover={{
                color:"rgb(0,118,189)"
            }} >SHOP GOODS FOR GOOD</Text>
        </Box>
      </Box>
    </Grid>
  );
};
export default Product_ComponentTwo;
