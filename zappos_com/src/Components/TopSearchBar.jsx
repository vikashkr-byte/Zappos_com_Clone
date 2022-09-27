import { AddIcon, EditIcon, ExternalLinkIcon, HamburgerIcon, RepeatIcon, Search2Icon, SearchIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  Heading,
  IconButton,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Spacer,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineShoppingCart } from "react-icons/md";
import { BiUserCircle } from "react-icons/bi";

const TopSearchBar = () => {
  return (
    <Flex minWidth="max-content" alignItems="center" gap="2">
      <Flex h="100px" w="100%">
        <Flex py="15px">
          <Flex
            display={["flex", "flex", "none", "none"]}
            alignItems="center"
            p="10px"
          >
            {/* <GiHamburgerMenu size={"30px"}/> */}
            <Menu>
              <MenuButton
                as={IconButton}
                aria-label="Options"
                icon={<HamburgerIcon />}
                variant="outline"
              />
              <MenuList>
                <MenuItem icon={<AddIcon />} command="⌘T">
                  New Tab
                </MenuItem>
                <MenuItem icon={<ExternalLinkIcon />} command="⌘N">
                  New Window
                </MenuItem>
                <MenuItem icon={<RepeatIcon />} command="⌘⇧N">
                  Open Closed Tab
                </MenuItem>
                <MenuItem icon={<EditIcon />} command="⌘O">
                  Open File...
                </MenuItem>
              </MenuList>
            </Menu>
          </Flex>
          <Flex w="130px" height={"74px"} p="5px">
            <Image
              src="https://1000logos.net/wp-content/uploads/2020/09/Zappos-Logo.png"
              alt="mainlogo"
              w="100%"
              h="100%"
              ml="15px"
            />
          </Flex>
        </Flex>
        <Flex p={"17px"} width="58%" h={"100%"} ml="32px" alignItems="center">
          <InputGroup display={["none", "none", "flex", "flex"]}  >
            <Input
              type="text"
              //   w={"400px"}
              h="45px"
              // type={show ? 'text' : 'password'}
              placeholder="Search for shoes, clothes, etc."
              alignItems={"center"}
            />
            <InputLeftElement>
              <SearchIcon mt={"5px"} color="gray.500" />
            </InputLeftElement>
            <InputRightElement height={"45px"} width={"110px"}>
              <Button
                h="100%"
                w={"100%"}
                borderLeftRadius={"none"}
                bgColor="rgb(0,57,83)"
                color={"white"}
                _hover={{ backgroundColor: "rgb(0,118,189)" }}
              >
                SEARCH
              </Button>
            </InputRightElement>
          </InputGroup>
        </Flex>
      </Flex>
      <Spacer />
      <ButtonGroup pr="25px" display={["flex", "flex","none", "none"]} mr="5px" gap="10px" >
        <BiUserCircle size={"30px"}  />
        <MdOutlineShoppingCart size={"30px"}   />
      </ButtonGroup>
      <ButtonGroup pr="25px" display={["none", "none", "flex", "flex"]} >
        <Button borderColor="rgb(167,230,136)"  variant={"outline"} border='2px'color="rgb(3,93,89)" p="10px">
            <MdOutlineShoppingCart size={"20px"}  />
            <Text ml="10px" >MY CART</Text>
            </Button>
      </ButtonGroup>
      
    </Flex>
  );
};

export default TopSearchBar;
