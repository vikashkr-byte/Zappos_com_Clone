import { Box, HStack, Image, MenuItem, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const MenuDisplay = ({ data_list, data_image }) => {
  console.log("data_list:", data_list);
  console.log("data_image:", data_image);
  return (
    <>
      <HStack direction={"column"}>
        {data_list.map((item) => (
          <VStack key={item.heading}>
            <MenuItem  fontSize={"19px"} fontWeight={500} _hover={{
                borderBottom:"2px",
                color:"rgb(7,48,73)"
            }}  ><Link to={"/products"} >{item.heading}</Link> </MenuItem>
            {item.listItems.map((listItem) => (
              <MenuItem key={listItem} _hover={{
                borderBottom:"2px",
                color:"rgb(7,48,73)"
            }}><Link to={"/products"} >{listItem}</Link></MenuItem>
            ))}
          </VStack>
        ))}
   

        <VStack direction={"column"}>
          {data_image.map((itemImage) => (
            <MenuItem>
              <Box w="140px">
                
                  <Image w="100%" src={itemImage.image} />
                
                <Box
                  w="100%"
                  h="50px"
                  
                  
                  bgColor="rgb(7,48,73)"
                >
                  <Text textAlign={"center"} pt="15px" overflow={"hidden"} color={"white"} fontSize={"15px"} fontWeight={500}>
                    {itemImage.text_under_image}
                  </Text>
                </Box>
              </Box>
            </MenuItem>
          ))}
        </VStack>
      </HStack>
    </>
  );
};

export default MenuDisplay;
