import { Box, HStack, Image, MenuItem, Text, VStack } from "@chakra-ui/react";
import React from "react";

const MenuDisplay = ({ data_list, data_image }) => {
  console.log("data_list:", data_list);
  console.log("data_image:", data_image);
  return (
    <>
      <HStack direction={"column"}>
        {data_list.map((item) => (
          <VStack>
            <MenuItem fontSize={"19px"} fontWeight={500} _hover={{
                borderBottom:"2px",
                color:"rgb(7,48,73)"
            }}  >{item.heading}</MenuItem>
            {item.listItems.map((listItem) => (
              <MenuItem _hover={{
                borderBottom:"2px",
                color:"rgb(7,48,73)"
            }}>{listItem}</MenuItem>
            ))}
          </VStack>
        ))}
        {/* //   <MenuItem>Create a Copy</MenuItem> */}

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
{/* <Box w="140px">
<Box w="100%">
  <Image w="100%" src={itemImage.image} />
</Box>
<Box
  w="100%"
  h="50px"
  
  
  bgColor="rgb(7,48,73)"
>
  <Text textAlign={"center"} pt="15px" overflow={"hidden"} color={"white"} fontSize={"15px"} fontWeight={500}>
    {itemImage.text_under_image}
  </Text>
</Box>
</Box> */}