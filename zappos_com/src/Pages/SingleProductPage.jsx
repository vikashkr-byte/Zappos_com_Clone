import { AddIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Center,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  FormLabel,
  Image,
  Input,
  Square,
  Stack,
  Text,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import React, { useContext, useEffect, useRef, useState } from "react";
import { MdOutlineDeleteForever } from "react-icons/md";
import { useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../AuthContex/AuthContext";
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
  const { cartItem, setCartItem } = useContext(AuthContext);
  const { id } = useParams();
  const [data, setData] = useState(initialData);
  const [cartArray, setCartArray] = useState([]);
  const [totalCartItem, setTotalCartItem] = useState(0);

  // console.log('cartArray:', cartArray)
  // console.log('cartItem:', cartItem)
  let numid = Number(id);
  // console.log("values:", typeof numid);

  const [quantity, setQuantity] = useState(1);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const firstField = useRef();

  const navigate = useNavigate();

  const {
    state: { cart },
    dispatch,
  } = useContext(AuthContext);

  console.log("cart:", cart);

  useEffect(() => {
    //  let localData= JSON.parse(localStorage.getItem("zappos_cart")) || [];
    //  console.log('localData:', localData)
    if (numid <= 40) {
      fetch(`https://zappos-api.onrender.com/products_data_women/${numid}`)
        .then((res) => res.json())
        .then((res) => {
          console.log("res2:", res);

          setData(res);
        });
    } else if (numid >= 41 && numid <= 70) {
      fetch(`https://zappos-api.onrender.com/products_data_men/${numid}`)
        .then((res) => res.json())
        .then((res) => {
          console.log("res1:", res);

          setData(res);
        });
    } else {
      navigate("*");
    }
  }, []);
  const handleSetcartCount = (cartArray) => {
    setCartItem(cartArray.length);
  };
  const handleAddToCart = (data) => {
    alert("Zappos: Vikash, item added to your cart!");
    // let { category, description, gender, id, image, price, title } = data;
    // let cartitem = {
    //   category: category,
    //   description: description,
    //   gender: gender,
    //   id: id,
    //   image: image,
    //   price: price,
    //   title: title,
    //   quantity: quantity,
    // };
    // setCartArray([...cartArray, cartitem]);

    // console.log("cartArray:", cartArray);
    // localStorage.setItem("zappos_cart", JSON.stringify(cartArray));
    // setCartArray(JSON.parse(localStorage.getItem("zappos_cart")))
    onOpen();
    // setTotalCartItem(cartArray.length);
    // // handleCartCount(totalCartItem)
    // handleSetcartCount(cartArray);
    // console.log("cartItem:", cartItem);
  };

  return (
    <>
      <TopMostWithLogo />
      <SecondTopMostBar />
      <TopSearchBar cartlist={cartArray} />
      <SmallScreenSearchBar />
      <Navbar />
      <HomePage_Text_Carousel />
      <Flex color="white" pt="25px">
        <VStack w="auto" pt="5px" ml="20px" mr="10px">
          <Image
            src={data.image}
            alt={data.title}
            _hover={{ border: "1px solid black" }}
            height="100px"
          />
          <Image
            src={data.image}
            alt={data.title}
            _hover={{ border: "1px solid black" }}
            height="100px"
          />
          <Image
            src={data.image}
            alt={data.title}
            _hover={{ border: "1px solid black" }}
            height="100px"
          />
          <Image
            src={data.image}
            alt={data.title}
            _hover={{ border: "1px solid black" }}
            height="100px"
          />
          <Image
            src={data.image}
            alt={data.title}
            _hover={{ border: "1px solid black" }}
            height="100px"
          />
        </VStack>
        <Square size="55%">
          <Image
            src={data.image}
            alt={data.title}
            _hover={{ border: "1px solid black" }}
            height="100%"
          />
        </Square>

        <VStack px="10px" w="32%" display={["none", "none", "flex", "flex"]}>
          <Flex direction="column">
            <Text fontSize={"40px"} fontWeight="500" color="black">
              {data.title}
            </Text>
            <Text fontSize={"20px"} fontWeight="500" color="black">
              {data.description}
            </Text>
            <Text fontSize={"40px"} fontWeight="500" color="red.400">
              $ {data.price}
            </Text>

            <Text
              w="80px"
              p="5px"
              mt="25px"
              mb="50px"
              fontSize={"12px"}
              fontWeight="500"
              bgColor={"rgb(0,118,189)"}
              color="white)"
            >
              SHIPS FREE
            </Text>
            {cart.some((p) => p.id === numid) ? (
              <Button
                colorScheme={"red"}
                onClick={() => {
                  dispatch({ type: "REMOVE FROM CART", payload: data });
                  alert("Zappos: Vikash, item was removed from your cart!");
                }}
              >
                Remove from cart
              </Button>
            ) : (
              <Button
                onClick={() => {
                  dispatch({ type: "ADD TO CART", payload: data });
                  handleAddToCart();
                }}
                bgColor={"green.100"}
                color="rgb(3,93,89)"
              >
                {"Add to cart"}
              </Button>
            )}
            {/* <Button
              onClick={() => handleAddToCart(data)}
              bgColor={"rgb(167,230,136)"}
              color="rgb(3,93,89)"
            >
              Add to Cart
            </Button> */}
          </Flex>
        </VStack>
      </Flex>

      <Footer_HomePage />

      <Drawer
        isOpen={isOpen}
        placement="right"
        initialFocusRef={firstField}
        onClose={onClose}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader borderBottomWidth="1px">
            {!cartArray ? (
              "YOUR CART IS EMPTY"
            ) : (
              <Box
                display={"flex"}
                w="100%"
                px="20px"
                justifyContent={"center"}
                alignItems="center"
              >
                <Text>{`You have (${cart.length}) in your cart.`}</Text>
              </Box>
            )}
          </DrawerHeader>

          <DrawerBody>
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
                      <Text> ₹ {item.price}</Text>
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
          </DrawerBody>

          <DrawerFooter borderTopWidth="1px">
            <Button variant="outline" mr={3} onClick={onClose}>
              Close
            </Button>
            
            {/* <Button colorScheme="blue">Submit</Button> */}
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default SingleProductPage;
