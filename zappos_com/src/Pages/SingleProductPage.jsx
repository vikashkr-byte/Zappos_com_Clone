import { Box, Button, Center, Flex, Image, Square, Stack, Text, VStack } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Footer_HomePage from "../Components/Footer_HomePage";
import HomePage_Text_Carousel from "../Components/HomePage_Text_Carousel";
import Navbar from "../Components/Navbar";
import SecondTopMostBar from "../Components/SecondTopMostBar";
import SmallScreenSearchBar from "../Components/SmallScreenSearchBar";
import TopMostWithLogo from "../Components/TopMostWithLogo";
import TopSearchBar from "../Components/TopSearchBar";

// const getData = (numid) => {
//   return fetch(`http://localhost:8080/products_data_women/${numid}`).then(
//     (res) => res.json()
//   );
// };

const initialData = {
  name: "",
  price: "",
};
const SingleProductPage = () => {
  const { id } = useParams();
  const [data, setData] = useState(initialData);
  let numid = Number(id);
  console.log("values:", typeof numid);
  const navigate = useNavigate();
  useEffect(() => {
    if (numid <= 40) {
      fetch(`http://localhost:8080/products_data_women/${numid}`)
        .then((res) => res.json())
        .then((res) => {
          console.log("res2:", res);

          setData(res);
        });
    } else if (numid >= 41 && numid <= 70) {
      fetch(`http://localhost:8080/products_data_men/${numid}`)
        .then((res) => res.json())
        .then((res) => {
          console.log("res1:", res);

          setData(res);
        });
    } else {
      navigate("*");
    }
  }, []);

  return (
    <>
      <TopMostWithLogo />
      <SecondTopMostBar />
      <TopSearchBar />
      <SmallScreenSearchBar />
      <Navbar />
      <HomePage_Text_Carousel />
      <Flex color="white" pt="25px">
        <VStack w="auto" pt="5px" ml="20px" mr="10px">
          <Image src={data.image} alt={data.title} _hover={{border:"1px solid black"}} height="100px" />
          <Image src={data.image} alt={data.title} _hover={{border:"1px solid black"}} height="100px" />
          <Image src={data.image} alt={data.title} _hover={{border:"1px solid black"}} height="100px" />
          <Image src={data.image} alt={data.title} _hover={{border:"1px solid black"}} height="100px" />
          <Image src={data.image} alt={data.title} _hover={{border:"1px solid black"}} height="100px" />
        </VStack>
        <Square  size="55%">
        <Image src={data.image} alt={data.title} _hover={{border:"1px solid black"}} height="100%" />
        </Square>
        
         <VStack  px="10px" w="32%" display={["none","none","flex","flex"]}>
            <Flex  direction="column" >
                <Text fontSize={"40px"} fontWeight="500" color="black">{data.title}</Text>
                <Text fontSize={"20px"} fontWeight="500" color="black">{data.description}</Text>
                <Text fontSize={"40px"} fontWeight="500" color="red.400">$ {data.price}</Text>

                <Text w="80px" p="5px" mt="25px" mb="50px" fontSize={"12px"} fontWeight="500" bgColor={"rgb(0,118,189)"} color="white)" >SHIPS FREE</Text>
                <Button onClick={()=>alert("Zappos: Vikash, your order is placed!")} bgColor={"rgb(167,230,136)"} color="rgb(3,93,89)" >Place Order</Button>
            </Flex>
         </VStack>
   
      </Flex>
      <VStack  px="10px" w="32%" display={["flex","none","none","none"]}>
            <Flex  direction="column" >
                <Text fontSize={"40px"} fontWeight="500" color="black">{data.title}</Text>
                <Text fontSize={"20px"} fontWeight="500" color="black">{data.description}</Text>
                <Text fontSize={"40px"} fontWeight="500" color="red.400">$ {data.price}</Text>

                <Text w="80px" p="5px" mt="25px" mb="50px" fontSize={"12px"} fontWeight="500" bgColor={"rgb(0,118,189)"} color="white)" >SHIPS FREE</Text>
                <Button onClick={()=>alert("Zappos: Vikash, your order is placed!")} bgColor={"rgb(167,230,136)"} color="rgb(3,93,89)" >Place Order</Button>
            </Flex>
         </VStack>
      <Footer_HomePage />
    </>
  );
};

export default SingleProductPage;
