import {
  Box,
  Button,
  ButtonGroup,
  Divider,
  Flex,
  Grid,
  GridItem,
  Heading,
  Image,
  Spacer,
  Stack,
  Text,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { MdOutlineDeleteForever } from "react-icons/md";
import { Link } from "react-router-dom";
import { AuthContext } from "../AuthContex/AuthContext";
import Footer_HomePage from "../Components/Footer_HomePage";
import HomePage_Text_Carousel from "../Components/HomePage_Text_Carousel";
import LoadingComponent from "../Components/LoadingComponent";
import Navbar from "../Components/Navbar";
import Pagination from "../Components/Pagination";
import SecondTopMostBar from "../Components/SecondTopMostBar";
import SmallScreenSearchBar from "../Components/SmallScreenSearchBar";
import SubTotal from "../Components/SubTotal";
import TopMostWithLogo from "../Components/TopMostWithLogo";
import TopSearchBar from "../Components/TopSearchBar";
const MyCart_Page = () => {
  const [isLoading, setIsLoading] = useState(false);

  const {
    state: { cart },
    dispatch,
  } = useContext(AuthContext);
  console.log("cart:", cart);
  useEffect(() => {
    setIsLoading(true);
    document.title = `My Cart`;
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  }, []);

  return (
    <>
      <TopMostWithLogo />
      <SecondTopMostBar />
      <TopSearchBar />
      <SmallScreenSearchBar />
      <Navbar />
      <HomePage_Text_Carousel />
      <LoadingComponent statusQuo={isLoading} justifySelf={"center"} />
      <Divider />
      <Box p="10px" display="flex" justifyContent={"space-around"} >
        <Box w="60%"  >
          {cart.length == 0 ? (
            <Box
              w="100%"
              h="50vh"
              display={"flex"}
              justifyContent="center"
              alignItems={"center"}
            >
              <Box
                w="40%"
                bgColor="whitesmoke"
                m="auto"
                textAlign={"center"}
                borderRadius={"10px"}
              >
                <Text fontSize={"40px"} fontWeight="700" color="gray">
                  Your cart is empty!
                </Text>
              </Box>
            </Box>
          ) : (
            <Stack spacing="24px">
              {cart.map((item, index) => (
                <Box key={index} borderBottom="2px solid lightgray" p="5px">
                  <Box>
                    <Box
                      display="flex"
                      justifyContent={"space-around"}
                      alignItems="center"
                    >
                      <Image src={item.image} h="70px" />
                      <Text>{item.title}</Text>
                      <Text> $ {item.price}</Text>
                      <MdOutlineDeleteForever
                        color="orange"
                        size="20px"
                        cursor={"pointer"}
                        onClick={() =>
                          dispatch({
                            type: "REMOVE FROM CART",
                            payload: item,
                          })
                        }
                      />
                    </Box>
                  </Box>
                  {/* <Box
              display="flex"
              justifyContent={"space-around"}
              alignItems="center"
            >
              <Button
                onClick={() =>
                  dispatch({ type: "DECREMENT", payload: item })
                }
              >
                -
              </Button>
              <Text>{item.qty}</Text>
              <Button
                onClick={() =>
                  dispatch({ type: "INCREMENT", payload: item })
                }
              >
                +
              </Button>
            </Box> */}
                </Box>
              ))}
            </Stack>
          )}
        </Box>
    <SubTotal cart={cart} />
      </Box>

      <Footer_HomePage />
    </>
  );
};

export default MyCart_Page;
