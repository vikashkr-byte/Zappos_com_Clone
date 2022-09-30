import { ChevronDownIcon, CloseIcon, TriangleDownIcon } from "@chakra-ui/icons";
import {
  Button,
  Center,
  Flex,
  HStack,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";
import React from "react";

const SecondTopMostBar = () => {
  return (
    <Flex color="white" w={"100%"}>
      <Menu>
        <MenuButton
          bg="rgb(0,118,189)"
          borderRadius={"none"}
          h={"50px"}
          as={Button}
          fontWeight="700"
          fontSize={"18px"}
          letterSpacing="0.7px"
          _hover={{ color: "gray.200" }}
          _expanded={{ bg: "rgb(0,118,189)" }}
          pr="5px"
        >
          Customer Service
          <TriangleDownIcon ml={"3px"} w={"12px"} />
        </MenuButton>
        <MenuList color={"rgb(13,67,92)"} borderRadius="none" w={"170px"}>
          <MenuItem
            display={"flex"}
            justifyContent="space-between"
            _hover={{ borderBottom: "0.8px", borderColor: "black" }}
          >
            Contact Info
            <CloseIcon />
          </MenuItem>
          <MenuItem>FAQ</MenuItem>
          <MenuItem>Give Us Feedback</MenuItem>
        </MenuList>
      </Menu>
      <Flex bg="rgb(0,118,189)" w={"100%"} justifyContent="flex-end">
        <HStack
          ml={"40px"}
          _hover={{
            color: "gray.300",
            cursor: "pointer",
          }}
          display={["none", "none", "none", "flex"]}
        >
          <Text fontSize={"16px"} color="white.500" py="10px" overflow="auto">
            Every Zappos order comes with FAST, FREE Shipping, plus a FREE
            365-Day Return Policy!
          </Text>
          <Text
            fontSize={"19px"}
            color="white.500"
            py="10px"
            pr="29px"
            fontWeight={600}
          >
            More About Shipping & Returns
          </Text>
        </HStack>
      </Flex>
    </Flex>
  );
};

export default SecondTopMostBar;
