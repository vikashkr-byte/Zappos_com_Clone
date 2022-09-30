import {
  Box,
  Button,
  ButtonGroup,
  Divider,
  Flex,
  HStack,
  HStack as VStack,
  Image,
  ListItem,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Stack,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";

const Sign_In_modal = ({ isOpen, onClose }) => {
  const navigate=useNavigate()
  const handle_signin=()=>{
navigate("/signin")
  }
  return (
    <Modal
      onClose={onClose}
      // finalFocusRef={btnRef}
      isOpen={isOpen}
      scrollBehavior={"inside"}
      size={"4xl"}
    >
      <ModalOverlay />
      <ModalContent  borderRadius={"none"}>
        <ModalHeader>Sign-in</ModalHeader>
        <Divider borderColor={"gray"} />
        <ModalCloseButton color={"lightgray"} />
        <ModalBody p="15px">
          <VStack>
            <Flex w="100%" h={"300px"} p="2px">
              <HStack w="50%" h={"100%"}>
                <Stack direction="column" w="100%" pl="6%" mt="-65px" gap={3}>
                  <Link to="/signin" >
                  <Button
                    _hover={{
                      backgroundColor: "rgb(0,118,189)",
                      color: "white",
                      borderRadius: "5px",
                    }}
                    width={"92%"}
                    h={"33px"}
                    colorScheme="rgb(0,57,83)"
                    variant="outline"
                    border="2px"
                    borderRadius={"3px"}
                    onClick={handle_signin}
                    >
                    <Image
                      src="https://i.postimg.cc/gjs3hbwV/zappos-shoes-blue-bg-none.png"
                      alt="zapposShoes"
                      h={"80%"}
                      />
                   
                      
                    <Text fontSize={"14px"} fontWeight="700">
                      SIGN IN WITH ZAPPOS
                    </Text>
                   
                  </Button>
                      </Link>
                  <Button
                    _hover={{
                      backgroundColor: "rgb(0,118,189)",
                      color: "white",
                      borderRadius: "5px",
                    }}
                    width={"92%"}
                    h={"33px"}
                    colorScheme="rgb(0,57,83)"
                    variant="outline"
                    border="2px"
                    borderRadius={"3px"}
                  >
                    <Image
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1200px-Amazon_logo.svg.png"
                      alt="amazon"
                      h={"50%"}
                      mt="2px"
                    />
                    <Text fontSize={"14px"} fontWeight="700" ml="9px">
                      SIGN IN WITH AMAZON
                    </Text>
                  </Button>
                  <Button
                    _hover={{
                      backgroundColor: "rgb(0,118,189)",
                      color: "white",
                      borderRadius: "5px",
                    }}
                    width={"92%"}
                    h={"33px"}
                    colorScheme="rgb(0,57,83)"
                    variant="outline"
                    border="2px"
                    borderRadius={"3px"}
                  >
                    <Image
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/1200px-Google_%22G%22_Logo.svg.png"
                      alt="google"
                      h={"55%"}
                    />
                    <Text fontSize={"14px"} fontWeight="700" ml="9px">
                      SIGN IN WITH GOOGLE
                    </Text>
                  </Button>
                  <Flex
                    alignItems={"center"}
                    gap="3"
                    width={"92%"}
                    pl="1px"
                    lineHeight={"0.1"}
                    mb="15px"
                    mr="20px"
                  >
                    <Divider
                      border={"1px"}
                      mt="-10px"
                      backgroundColor="lightgray"
                      w={"157px"}
                    />
                    <Text mt="-14px">or</Text>
                    <Divider
                      mt="-10px"
                      border={"1px"}
                      backgroundColor="lightgray"
                      w={"157px"}
                    />
                  </Flex>
                  <Button
                    _hover={{
                      backgroundColor: "rgb(0,118,189)",
                      color: "white",
                      borderRadius: "5px",
                    }}
                    width={"92%"}
                    h={"33px"}
                    colorScheme="rgb(0,57,83)"
                    variant="outline"
                    border="2px"
                    borderRadius={"3px"}
                  >
                    <Text fontSize={"14px"} fontWeight="700">
                      CREATE YOUR ZAPPOS ACCOUNT
                    </Text>
                  </Button>
                </Stack>
              </HStack>
              <Divider
                orientation="vertical"
                border={"1px"}
                backgroundColor="lightgray"
                mt="9px"
              />
              <Stack w="50%" h={"100%"} direction="column" pl="30px" pr="10px" 
               >
                <Box>
                  <Text fontSize={"17px"} fontWeight="500" >
                    By logging in with Amazon, you may be eligible for
                    additional Prime benefits like FREE Upgraded Shipping. Then,
                    join Zappos VIP for additional Prime-linked VIP perks:
                  </Text>
                </Box>
                <Box>
                  <UnorderedList lineHeight={"30px"} fontWeight="200" >
                    <ListItem>
                      If you are an Amazon Prime Member, sign in with Amazon to
                      qualify for free upgraded shipping!
                    </ListItem>
                    <ListItem>Get FREE Expedited Shipping</ListItem>
                    <ListItem>Earn 2 Points for Every $1 Spent</ListItem>
                    <ListItem>Receive Bonus Points on Select Brands</ListItem>
                    <ListItem>Redeem Points for VIP Codes</ListItem>
                  </UnorderedList>
                </Box>
              </Stack>
            </Flex>
          
          </VStack>
        </ModalBody>
        <ModalFooter>
          <VStack width={"50%"} orientation="vertical">
            <Stack textAlign={"center"} pl="40px">
              <Box>
                <Text fontSize={"13px"}>
                  By signing in, you agree to Zappos
                </Text>
              </Box>
              <Box display={"flex"} gap={2} lineHeight="2px" pb="5px">
                <Text
                  textDecoration={"underline"}
                  fontSize="14px"
                  color="rgb(0,57,83)"
                >
                  Terms and Conditions{" "}
                </Text>
                <Text>and</Text>
                <Text
                  textDecoration={"underline"}
                  fontSize="14px"
                  color="rgb(0,57,83)"
                >
                  Privacy Policy.{" "}
                </Text>
              </Box>
            </Stack>
          </VStack>
          <VStack width={"50%"}></VStack>
        </ModalFooter>
      
      </ModalContent>
    </Modal>
  );
};

export default Sign_In_modal;
