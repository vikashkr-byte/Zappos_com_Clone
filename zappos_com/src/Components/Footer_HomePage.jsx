import { ChatIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  HStack,
  Input,
  SimpleGrid,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { IoMailOpenOutline } from "react-icons/io5";
// IoMailOpenOutline
const Footer_HomePage = () => {
  return (
    <>
      <Box p="12px 25px 12px 25px " h="130px" bgColor={"rgb(3,44,72)"}>
        <Text mb="35px" fontSize={"20px"} color="white" fontWeight={"500"}>
          Make Zappos (Emails) Your New BFF!
        </Text>
        <Input
          width={"200px"}
          mr="15px"
          placeholder="Emails Address"
          bgColor="white"
        />

        <Button
          variant={"outline"}
          fontSize="14px"
          fontWeight={"700"}
          borderColor="white"
          border="2px"
          outline="1px"
          bgColor={"rgb(3,44,72)"}
          color="white"
          gap="2"
          _hover={{color:"rgb(3,44,72)",bgColor:"white"}}
        >
          <IoMailOpenOutline size="18px" /> SUBSCRIBE TO ZAPPOS EMAILS
        </Button>
      </Box>
      <SimpleGrid
        columns={[1, 2]}
        spacing="40px"
        w="auto"
        bgColor={"rgb(0,57,83)"}
      >
        <HStack mt="-10px" alignItems={"top"}>
          <Flex
            color="white"
            height="auto"
            direction={"column"}
            p="24px"
            fontSize={"16px"}
          >
            <Text
              _hover={{
                borderBottom: "2px",
              }}
              fontSize={"18px"}
            >
              Explore Zappos
            </Text>
            <Text
              _hover={{
                borderBottom: "2px",
              }}
            >
              Brands
            </Text>
            <Text
              _hover={{
                borderBottom: "2px",
              }}
            >
              Clothing
            </Text>
            <Text
              _hover={{
                borderBottom: "2px",
              }}
            >
              The Style Room
            </Text>
            <Text
              _hover={{
                borderBottom: "2px",
              }}
            >
              Eyewear
            </Text>
            <Text
              _hover={{
                borderBottom: "2px",
              }}
            >
              New Arrivals
            </Text>
            <Text
              _hover={{
                borderBottom: "2px",
              }}
            >
              Running
            </Text>
            <Text
              _hover={{
                borderBottom: "2px",
              }}
            >
              Jackets
            </Text>
            <Text
              _hover={{
                borderBottom: "2px",
              }}
            >
              Shoes
            </Text>
            <Text
              _hover={{
                borderBottom: "2px",
              }}
            >
              Watches
            </Text>
            <Text
              _hover={{
                borderBottom: "2px",
              }}
            >
              Zappos Adaptive
            </Text>
            <Text
              _hover={{
                borderBottom: "2px",
              }}
            >
              Education & Military Discounts
            </Text>
            <Text
              _hover={{
                borderBottom: "2px",
              }}
            >
              All Departments
            </Text>
          </Flex>
          <Flex
            color="white"
            height="auto"
            direction={"column"}
            p="24px"
            fontSize={"16px"}
          >
            <Text
              fontSize={"18px"}
              _hover={{
                borderBottom: "2px",
              }}
            >
              Customer Service
            </Text>
            <Text
              _hover={{
                borderBottom: "2px",
              }}
            >
              FAQs
            </Text>
            <Text
              _hover={{
                borderBottom: "2px",
              }}
            >
              Contact Info
            </Text>
            <Text
              _hover={{
                borderBottom: "2px",
              }}
            >
              Shipping And Return Policy
            </Text>
            <Text
              _hover={{
                borderBottom: "2px",
              }}
            >
              About Proposition 65
            </Text>
            <Text
              _hover={{
                borderBottom: "2px",
              }}
            >
              Fit Info
            </Text>
            <Text
              _hover={{
                borderBottom: "2px",
              }}
            >
              Measurement Guide
            </Text>
            <Text
              _hover={{
                borderBottom: "2px",
              }}
            >
              Size Conversion Chart
            </Text>
            <Text
              _hover={{
                borderBottom: "2px",
              }}
            >
              Measure Your Bra Size
            </Text>
          </Flex>
        </HStack>
        <HStack mt="-10px" alignItems={"top"}>
          <Flex
            color="white"
            height="auto"
            direction={"column"}
            p="24px"
            fontSize={"16px"}
          >
            <Text
              _hover={{
                borderBottom: "2px",
              }}
              fontSize={"18px"}
            >
              About Zappos
            </Text>
            <Text
              _hover={{
                borderBottom: "2px",
              }}
            >
              About
            </Text>
            <Text
              _hover={{
                borderBottom: "2px",
              }}
            >
              Zappos ONE
            </Text>
            <Text
              _hover={{
                borderBottom: "2px",
              }}
            >
              Zappos for Good{" "}
            </Text>
            <Text
              _hover={{
                borderBottom: "2px",
              }}
            >
              Get the Zappos Mobile App
            </Text>
            <Text
              _hover={{
                borderBottom: "2px",
              }}
            >
              Amazon Prime Benefits
            </Text>
            <Text
              _hover={{
                borderBottom: "2px",
              }}
            >
              Zappos VIP Benefits
            </Text>
            <Text
              _hover={{
                borderBottom: "2px",
              }}
            >
              Powered by Zappos
            </Text>
            <Text
              _hover={{
                borderBottom: "2px",
              }}
            >
              Coupons
            </Text>
            <Text
              _hover={{
                borderBottom: "2px",
              }}
            >
              Accessibility Statement
            </Text>
            <Text
              _hover={{
                borderBottom: "2px",
              }}
            >
              Beyond the Box Blog
            </Text>
          </Flex>
          <Box
          display={["none","none","none","block"]}
            m="40px"
            bg="rgb(3,44,72)"
            w={"250px"}
            height="60px"
            borderRadius={"10px"}
          >
            <Box
            display={["none","none","none","block"]}
              mt="10px"
              bg="rgb(20,72,96)"
              w={"250px"}
              height="auto"
              padding="10px 15px 10px 15px "
              borderRadius={"10px"}
            >
              <Heading fontSize={"21px"} color="white" mb="15px">
                Your Voice Matters
              </Heading>
              <Text fontSize={"16px"} color="white" mb="15px">
                We'd love to learn more about your shopping experiences on
                Zappos.com and how we can improve
              </Text>
              <Button
                variant={"outline"}
                fontSize="14px"
                fontWeight={"700"}
                borderColor="white"
                border="2px"
                outline="1px"
                bgColor={"rgb(3,44,72)"}
                color="white"
                gap="2"
              >
                <ChatIcon size="18px" /> Take Survey
              </Button>
            </Box>
          </Box>
        </HStack>
        <Stack direction={"column"} display={["none","none","none","flex"]} w={ "800px"}>
          <Flex gap={4} paddingLeft="24px" justifyItems={"normal"}>
            <Text color="white" fontWeight={"500"} fontSize="14px">
              Terms of Use
            </Text>
            <Divider
              orientation="vertical"
              border={"2px"}
              borderColor="white"
              bgColor="white"
            />
            <Text color="white" fontWeight={"500"} fontSize="14px">
              Privacy Policy
            </Text>
            <Divider
              orientation="vertical"
              border={"2px"}
              borderColor="white"
              bgColor="white"
            />
            <Text color="white" fontWeight={"500"} fontSize="14px">
              Fur Policy
            </Text>
            <Divider
              orientation="vertical"
              border={"2px"}
              borderColor="white"
              bgColor="white"
            />
            <Text color="white" fontWeight={"500"} fontSize="14px">
              Interes-Based Adds
            </Text>
            <Divider
              orientation="vertical"
              border={"2px"}
              borderColor="white"
              bgColor="white"
            />
            <Text color="white" fontWeight={"500"} fontSize="14px">
              24/7 Customer Service (800) 927-7671
            </Text>
          </Flex>
          <Flex>
            <Text color="white" fontWeight={"500"}  >© 2009–2022 - Zappos.com LLC or its affiliates</Text>
          </Flex>
        </Stack>
      </SimpleGrid>
    </>
  );
};

export default Footer_HomePage;
