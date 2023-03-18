import {
  AddIcon,
  ChevronDownIcon,
  ChevronRightIcon,
  EditIcon,
  ExternalLinkIcon,
  HamburgerIcon,
  RepeatIcon,
  Search2Icon,
  SearchIcon,
} from "@chakra-ui/icons";
import {
  Box,
  Button,
  ButtonGroup,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
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
  Stack,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useContext, useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineShoppingCart } from "react-icons/md";
import { BiUserCircle } from "react-icons/bi";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { FaHotjar } from "react-icons/fa";
import Small_Screen_Sign_in from "./Small_Screen_Sign_in";
import Sign_In_modal from "./Sign_In_modal";
import { AuthContext } from "../AuthContex/AuthContext";
import { Link } from "react-router-dom";

const TopSearchBar = ({ cartlist }) => {
  console.log("cartlist:", cartlist);
  const { isOpen, onOpen, onClose } = useDisclosure();
  // const { isOpen, onOpen, onClose } = useDisclosure();
  const { dummydata, isAuth, isToken, cartItem, setCartItem } =
    useContext(AuthContext);
  const [navCartcount, setNavCartcount] = useState(cartItem);
  const [size, setSize] = useState("4xl");
  // const btnRef = useRef(null);
  console.log("isAuth:", isAuth);

  const {
    state: { cart },
    dispatch,
  } = useContext(AuthContext);

  const handleSizeClick = () => {
    setSize("4xl");
    onOpen();
  };
  useEffect(() => {
    setNavCartcount(cartItem);
  }, [cartItem]);

  return (
    <Flex alignItems="center" gap="2" w="100%" paddingRight={"5px"}>
      <Flex h="100px" w="100%">
        <Flex py="15px">
          <Flex
            display={["flex", "flex", "none", "none"]}
            alignItems="center"
            p="10px"
          >
            <Menu>
              <MenuButton
                as={IconButton}
                aria-label="Options"
                icon={<HamburgerIcon size="30px" />}
                variant="outline"
              />
              <MenuList>
                <MenuItem justifyContent={"space-between"}>
                  New <ChevronRightIcon />
                </MenuItem>
                <MenuItem justifyContent={"space-between"}>
                  Women <ChevronRightIcon />
                </MenuItem>
                <MenuItem justifyContent={"space-between"}>
                  Men <ChevronRightIcon />
                </MenuItem>
                <MenuItem justifyContent={"space-between"}>
                  Kids <ChevronRightIcon />
                </MenuItem>
                <MenuItem justifyContent={"space-between"}>
                  Departments <ChevronRightIcon />
                </MenuItem>
                <MenuItem justifyContent={"space-between"}>
                  Brands <ChevronRightIcon />
                </MenuItem>
                <MenuItem justifyContent={"space-between"}>
                  Sale <ChevronRightIcon />
                </MenuItem>
                <MenuItem justifyContent={"space-between"}>
                  <Flex gap="2" alignItems={"center"}>
                    <FaHotjar color="rgb(255, 157, 38)" />
                    Clothing
                  </Flex>{" "}
                  <ChevronRightIcon />
                </MenuItem>
              </MenuList>
            </Menu>
          </Flex>
          <Link to="/">
            <Flex w="130px" height={"74px"} p="5px">
              <Image
                src="https://1000logos.net/wp-content/uploads/2020/09/Zappos-Logo.png"
                alt="mainlogo"
                w="100%"
                h="100%"
                ml="15px"
              />
            </Flex>
          </Link>
        </Flex>
        <Flex p={"17px"} width="58%" h={"100%"} ml="32px" alignItems="center">
          <InputGroup display={["none", "none", "flex", "flex"]}>
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
      <ButtonGroup
        display={["flex", "flex", "none", "none"]}
        mr="5px"
        gap="10px"
      >
        <Button
          bgColor="white"
          _focus={{
            bgColor: "white",
          }}
          onClick={onOpen}
        >
          <BiUserCircle size={"30px"} />
          <Small_Screen_Sign_in isOpen={isOpen} onClose={onClose} />
        </Button>
        <MdOutlineShoppingCart size={"30px"} />
      </ButtonGroup>
      <ButtonGroup pr="25px" display={["none", "none", "flex", "flex"]}>
        <Link to={"/mycart"}>
          <Button
            borderColor="rgb(167,230,136)"
            variant={"outline"}
            border="2px"
            color="rgb(3,93,89)"
            p="10px"
            onClick={handleSizeClick}
            // disabled={isAuth}
          >
            <Box>
              {isAuth ? (
                <Box
                  display={"flex"}
                  w="auto"
                  justifyContent="space-between"
                  alignItems={"center"}
                >
                  <MdOutlineShoppingCart size={"20px"} mr="5px" />
                  {/* {cartlist ? ( */}
                    {/* <Text mx="5px"> */}
                      {/* {navCartcount + 1} */}
                      {/* {cartlist.length} */}
                      {/* {cartItem} */}
                    {/* </Text> */}
                  {/* ) : ( */}
                    {/* 0 */}
                  {/* )} */}
                  {cart.length}

                  <Text ml="5px">Items in Cart</Text>
                </Box>
              ) : (
                <Box
                  display={"flex"}
                  w="100px"
                  justifyContent="space-between"
                  alignItems={"center"}
                >
                  <MdOutlineShoppingCart size={"20px"} />
                  <Text>MY CART</Text>
                </Box>
              )}
            </Box>

            <Sign_In_modal isOpen={isOpen} onClose={onClose} />
          </Button>
        </Link>
      </ButtonGroup>
    </Flex>
  );
};

export default TopSearchBar;

{
  /*
 {/* </MenuList>
</Menu> */
}
{
  /* <Drawer 
                  isOpen={isOpen}
                  placement="left"
                  // initialFocusRef={firstField}
                  onClose={onClose}
                 
                >
                  <DrawerOverlay />
                  <DrawerContent  mt="170px" w={"400px"} >
                  

                    <DrawerBody >
                      <Stack spacing="24px">
                      <Text>New</Text>
                      <Text>Women</Text>
                      <Text>Men</Text>
                      <Text>Departments</Text>
                      <Text>Brands</Text>
                      <Text>Sale</Text>
                      <Text>
                      <Flex gap="2">
                <FaHotjar color="rgb(255, 157, 38)" />
                Clothing
              </Flex>
                      </Text>
                     
                      </Stack>
                    </DrawerBody>

                    <DrawerCloseButton />
                    <DrawerFooter borderTopWidth="1px">
                      <Button variant="outline" mr={3} onClick={onClose}>
                        Cancel
                      </Button>
                      
                    </DrawerFooter>
                  </DrawerContent>
                </Drawer> */
}
{
  /* // <MenuItem icon={<AddIcon />} command="⌘T">
                //   New Tab
                // </MenuItem>
                // <MenuItem icon={<ExternalLinkIcon />} command="⌘N">
                //   New Window
                // </MenuItem>
                // <MenuItem icon={<RepeatIcon />} command="⌘⇧N">
                //   Open Closed Tab
                // </MenuItem>
                // <MenuItem icon={<EditIcon />} command="⌘O">
                //   Open File...
                // </MenuItem> */
}
