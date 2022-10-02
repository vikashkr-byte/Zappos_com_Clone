import {
  Box,
  Button,
  Center,
  Divider,
  Flex,
  Grid,
  Image,
  Spacer,
  Square,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import ProductsData from "../Components/ProductsData";
import { AiOutlineUser } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";
import { BsCart2 } from "react-icons/bs";

const Products_Page = () => {
  // console.log("ProductsData:", ProductsData[0].category.name);
  // console.log("ProductsData:", ProductsData);
  let cata=ProductsData.filter((item)=>(
    item.category.name==="Clothes"
    
  ))
  
  console.log('cata:', cata)
  return (
    <Stack>
      
      <Flex px="30px" bgColor={"rgb(229,241,248)"}>
        <Box p="1">
          <Text fontSize={"13px"} fontWeight="500">
            ZAPPOS.COM
          </Text>
        </Box>
        <Box p="1">
          <Text fontSize={"13px"} fontWeight="500">
            1.800.927.7670
          </Text>
        </Box>
        <Spacer />
        <Flex alignItems={"center"}>
          <Text display={"flex"} fontWeight="500" fontSize={"13px"} gap={2}>
            MY ACCOUNT <AiOutlineUser ml="15px" size="20px" />
          </Text>
        </Flex>
      </Flex>
      <Flex color="black" h="60px" px="18px">
        <Center>
          <Button
            borderRadius={"none"}
            bgColor="white"
            _focus={{ border: "3px" }}
          >
            WOMEN
          </Button>
          <Button
            borderRadius={"none"}
            bgColor="white"
            _focus={{ border: "3px" }}
          >
            MEN
          </Button>
        </Center>
        <Spacer />
        <Center>
          <Image
            src="https://d24y65w6idg7xf.cloudfront.net/a/images/tsr/tsr-logo-large.svg"
            alt="theStyleRoom"
          />
        </Center>
        <Spacer />
        <Center>
          <Button
            borderRadius={"none"}
            bgColor="white"
            _focus={{ border: "3px" }}
            gap="2"
          >
            MY FAVORITES <AiOutlineHeart size={"20px"} />
          </Button>
          <Button
            borderRadius={"none"}
            bgColor="white"
            _focus={{ border: "3px" }}
            gap="2"
            mr="15px"
          >
            MY CART <BsCart2 size={"17px"} />
          </Button>
        </Center>
      </Flex>
      <Divider />
      <Grid templateColumns='repeat(4, 1fr)' gap={6}>
      {
        ProductsData.filter((item)=>item.category.name==="Clothes").map((item)=>(

          <Image src={item.category.image} alt={item.id} w="300px" />

          
        ))
      }
          </Grid>
      {/* <Flex minWidth="max-content" alignItems="center" gap="2">
        <Box p="2">
          <Heading size="md">Chakra App</Heading>
        </Box>
        <Spacer />
        <ButtonGroup gap="2">
          <Button colorScheme="teal">Sign Up</Button>
          <Button colorScheme="teal">Log in</Button>
        </ButtonGroup>
      </Flex> */}
    </Stack>
  );
};

export default Products_Page;
