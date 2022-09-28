import React from "react";
import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  Heading,
  HStack,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Spacer,
  Text,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import { ChevronDownIcon, SearchIcon } from "@chakra-ui/icons";
import { FaHotjar } from "react-icons/fa";
import MenuDisplay from "./MenuDisplay";
{
  /*
new

*/
}
const Navbar_Menu_New = [
  {
    heading: "The Styled Room",
    listItems: [
      "Free People: Nostalgic Bohemia",
      "UGG: Authentically You Fashion",
      "7FAM: Everyday Denim",
      "Party Revival",
      "Supercharged Simplicity",
      "All About the Bag",
      "Men's Prep-Ease",
      "Men's Footwear Refresh",
      "Men's Workwear Inspired",
    ],
  },
  {
    heading: "New Brands",
    listItems: [
      "SAOLA",
      "VISCATA",
      "FREYA",
      "Tommy John",
      "Pajamarama",
      "Draper James",
      "MANGO",
      "Melin",
      "LABEL",
    ],
  },
  {
    heading: "New Arrivals",
    listItems: [
      "The Find",
      "Toys & Games",
      "Drinkware",
      "Home Decor",
      "Marc Fisher Kids",
      "Exclusive Heatwave Capsule",
      "Exclusive Crocs x Smileyworld® collection",
      "Fall Fashion Guide",
      "abercrombie Kids",
    ],
  },
];

const Navbar_Menu_New_image = [
  {
    image:
      "https://m.media-amazon.com/images/G/01/2022/Global-Nav/September/COOP-SOREL-NEW-ARRIVALS-350x350.jpg",
    text_under_image: "SOREL Footwear",
  },
  {
    image:
      "https://m.media-amazon.com/images/G/01/2022/Global-Nav/September/fall-style-global.jpg",
    text_under_image: "Shop Fall Trends",
  },
];

{
  /*
women

*/
}
const Navbar_Menu_Women = [
  {
    heading: "Shoes",
    listItems: [
      "Sneakers & Athletic",
      "Sandals",
      "Clogs & Mules",
      "Heels",
      "Boots & Booties",
      "Slippers",
      "Flats",
      "Loafers",
      "Comfort",
      "Wide",
      "Narrow",
    ],
  },
  {
    heading: "Clothing",
    listItems: [
      "Shirts & Tops",
      "Swimwear",
      "Dresses",
      "Shorts",
      "Jeans & Denim",
      "Underwear & Intimates",
      "Coats & Outerwear",
      "Socks",
      "Sleepwear",
      "Activewear",
      "Plus Size",
    ],
  },
  {
    heading: "Accessories & More",
    listItems: [
      "Bags & Handbags",
      "Backpacks",
      "Belt Bags",
      "Hair",
      "Sunglasses",
      "Statement Earrings",
      "Face Masks",
      "Tech Accessories",
      "Scarves",
      "Hats",
      "Blue Light Glasses",
    ],
  },
  {
    heading: "Gift Cards",
    listItems: [
      "Sale",
      "Sneakers & Athletic",
      "Heels",
      "Sandals",
      "Slippers",
      "Boots",
      "Shirts and Tops",
      "Dresses",
      "Swim",
      "Denim",
      "Sweaters",
    ],
  },
  {
    heading: "Featured",
    listItems: [
      "The Find",
      "The Style Room",
      "UFC Shop",
      "Female Founded",
      "Influencer Favorites",
      "Fall 2022 Guide to Fashion",
      "Wedding Shop",
      "New Arrivals",
      "Awe Inspired",
      "Sweaty Betty",
      "Fairfax and Favor",
    ],
  },
];
const Navbar_Menu_Women_image = [
  {
    image:
      "https://m.media-amazon.com/images/G/01/2022/Global-Nav/August/CROCS-BLK-WHT-MARBLED-SEPTEMBER-GLOBALNAV-350x350.jpg",
    text_under_image: "Shop Crocs",
  },
  {
    image:
      "https://m.media-amazon.com/images/G/01/2022/Global-Nav/August/RUNNING-SHOES-GLOBAL-NAV.jpg",
    text_under_image: "Shop Running Shoes",
  },
];
const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Flex
      minWidth="max-content"
      w="100%"
      bgColor={"rgb(244,244,244)"}
      px="10px"
      alignItems="center"
      display={["none", "none", "flex", "flex"]}
    >
      <ButtonGroup gap="1">
        <Button
          width={"auto"}
          px="-20px"
          color="rgb(24,75,99)"
          _hover={{ bg: "none", borderBottom: "2px", borderRadius: "none" }}
          bg="rgb(244,244,244)"
        >
          <Menu
            bgColor="none"
            p="-10px"
            _focus={{ backgroundColor: "none", borderRadius: "none" }}
          >
            <MenuButton
              as={Button}
              rightIcon={<ChevronDownIcon />}
              borderRadius="none"
              _hover={{
                backgroundColor: "white",
                outline: "none",
                marginBottom: "3px",
              }}
              bgColor="rgb(244,244,244)"
              marginBottom="2px"
              _focus={{
                backgroundColor: "none",
                borderRadius: "none",
                marginBottom: "3px",
              }}
            >
              New
            </MenuButton>
            <MenuList
              borderRadius={"none"}
              h="350px"
              overflow={"scroll"}
              sy={{
                "&::-webkit-scrollbar": {
                  width: "2px",
                  borderRadius: "1px",
                  backgroundColor: `rgba(0, 0, 0, 0.05)`,
                },
                "&::-webkit-scrollbar-thumb": {
                  backgroundColor: `rgba(0, 0, 0, 0.05)`,
                },
              }}
              sx={{
                "&::-webkit-scrollbar": {
                  width: "2px",
                  borderRadius: "1px",
                  backgroundColor: `rgba(0, 0, 0, 0.05)`,
                },
                "&::-webkit-scrollbar-thumb": {
                  backgroundColor: `rgba(0, 0, 0, 0.05)`,
                },
              }}
            >
              <MenuDisplay
                data_list={Navbar_Menu_New}
                data_image={Navbar_Menu_New_image}
              />
            </MenuList>
          </Menu>
        </Button>
      </ButtonGroup>
      <ButtonGroup gap="1">
        <Button
          width={"auto"}
          px="-20px"
          color="rgb(24,75,99)"
          _hover={{ bg: "none", borderBottom: "2px", borderRadius: "none" }}
          bg="none"
        >
          <Menu
            bgColor="none"
            p="-10px"
            _focus={{ backgroundColor: "none", borderRadius: "none" }}
          >
            <MenuButton
              as={Button}
              rightIcon={<ChevronDownIcon />}
              borderRadius="none"
              _hover={{
                backgroundColor: "white",
                outline: "none",
                marginBottom: "3px",
              }}
              bgColor="rgb(244,244,244)"
              marginBottom="2px"
              _focus={{
                backgroundColor: "none",
                borderRadius: "none",
                marginBottom: "3px",
              }}
            >
              Women
            </MenuButton>
            <MenuList
              borderRadius={"none"}
              h="350px"
              overflow={"scroll"}
              sy={{
                "&::-webkit-scrollbar": {
                  width: "2px",
                  borderRadius: "1px",
                  backgroundColor: `rgba(0, 0, 0, 0.05)`,
                },
                "&::-webkit-scrollbar-thumb": {
                  backgroundColor: `rgba(0, 0, 0, 0.05)`,
                },
              }}
              sx={{
                "&::-webkit-scrollbar": {
                  width: "2px",
                  borderRadius: "1px",
                  backgroundColor: `rgba(0, 0, 0, 0.05)`,
                },
                "&::-webkit-scrollbar-thumb": {
                  backgroundColor: `rgba(0, 0, 0, 0.05)`,
                },
              }}
            >
              <MenuDisplay
                data_list={Navbar_Menu_Women}
                data_image={Navbar_Menu_Women_image}
              />
              <Flex
                p={"17px"}
                width="88%"
                h={"30%"}
                ml="32px"
                alignItems="center"
              >
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
                      variant={"outline"}
                      w={"100%"}
                      borderLeftRadius={"none"}
                      bgColor="white"
                      border={"2px"}
                      borderColor="rgb(0,57,83)"
                      color={"rgb(0,57,83)"}
                      _hover={{
                        backgroundColor: "rgb(0,118,189)",
                        color: "white",
                        borderColor: "rgb(0,118,189)",
                      }}
                    >
                      SEARCH
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </Flex>
            </MenuList>
          </Menu>
        </Button>
      </ButtonGroup>
      <ButtonGroup gap="1">
        <Button
          width={"auto"}
          px="-20px"
          color="rgb(24,75,99)"
          _hover={{ bg: "none", borderBottom: "2px", borderRadius: "none" }}
          bg="none"
        >
          <Menu
            bgColor="none"
            p="-10px"
            _focus={{ backgroundColor: "none", borderRadius: "none" }}
          >
            <MenuButton
              as={Button}
              rightIcon={<ChevronDownIcon />}
              borderRadius="none"
              _hover={{
                backgroundColor: "white",
                outline: "none",
                marginBottom: "3px",
              }}
              bgColor="rgb(244,244,244)"
              marginBottom="2px"
              _focus={{
                backgroundColor: "none",
                borderRadius: "none",
                marginBottom: "3px",
              }}
            >
              Men
            </MenuButton>
            <MenuList
              borderRadius={"none"}
              h="350px"
              overflow={"scroll"}
              sy={{
                "&::-webkit-scrollbar": {
                  width: "2px",
                  borderRadius: "1px",
                  backgroundColor: `rgba(0, 0, 0, 0.05)`,
                },
                "&::-webkit-scrollbar-thumb": {
                  backgroundColor: `rgba(0, 0, 0, 0.05)`,
                },
              }}
              sx={{
                "&::-webkit-scrollbar": {
                  width: "2px",
                  borderRadius: "1px",
                  backgroundColor: `rgba(0, 0, 0, 0.05)`,
                },
                "&::-webkit-scrollbar-thumb": {
                  backgroundColor: `rgba(0, 0, 0, 0.05)`,
                },
              }}
            >
              <MenuDisplay
                data_list={Navbar_Menu_Women}
                data_image={Navbar_Menu_Women_image}
              />
              <Flex
                p={"17px"}
                width="88%"
                h={"30%"}
                ml="32px"
                alignItems="center"
              >
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
                      variant={"outline"}
                      w={"100%"}
                      borderLeftRadius={"none"}
                      bgColor="white"
                      border={"2px"}
                      borderColor="rgb(0,57,83)"
                      color={"rgb(0,57,83)"}
                      _hover={{
                        backgroundColor: "rgb(0,118,189)",
                        color: "white",
                        borderColor: "rgb(0,118,189)",
                      }}
                    >
                      SEARCH
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </Flex>
            </MenuList>
          </Menu>
        </Button>
      </ButtonGroup>
      <ButtonGroup gap="1">
        <Button
          width={"auto"}
          px="-20px"
          color="rgb(24,75,99)"
          _hover={{ bg: "none", borderBottom: "2px", borderRadius: "none" }}
          bg="none"
        >
          <Menu
            bgColor="none"
            p="-10px"
            _focus={{ backgroundColor: "none", borderRadius: "none" }}
          >
            <MenuButton
              as={Button}
              rightIcon={<ChevronDownIcon />}
              borderRadius="none"
              _hover={{
                backgroundColor: "white",
                outline: "none",
                marginBottom: "3px",
              }}
              bgColor="rgb(244,244,244)"
              marginBottom="2px"
              _focus={{
                backgroundColor: "none",
                borderRadius: "none",
                marginBottom: "3px",
              }}
            >
              Kids
            </MenuButton>
            <MenuList
              borderRadius={"none"}
              h="350px"
              overflow={"scroll"}
              sy={{
                "&::-webkit-scrollbar": {
                  width: "2px",
                  borderRadius: "1px",
                  backgroundColor: `rgba(0, 0, 0, 0.05)`,
                },
                "&::-webkit-scrollbar-thumb": {
                  backgroundColor: `rgba(0, 0, 0, 0.05)`,
                },
              }}
              sx={{
                "&::-webkit-scrollbar": {
                  width: "2px",
                  borderRadius: "1px",
                  backgroundColor: `rgba(0, 0, 0, 0.05)`,
                },
                "&::-webkit-scrollbar-thumb": {
                  backgroundColor: `rgba(0, 0, 0, 0.05)`,
                },
              }}
            >
              <MenuDisplay
                data_list={Navbar_Menu_Women}
                data_image={Navbar_Menu_Women_image}
              />
              <Flex
                p={"17px"}
                width="88%"
                h={"30%"}
                ml="32px"
                alignItems="center"
              >
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
                      variant={"outline"}
                      w={"100%"}
                      borderLeftRadius={"none"}
                      bgColor="white"
                      border={"2px"}
                      borderColor="rgb(0,57,83)"
                      color={"rgb(0,57,83)"}
                      _hover={{
                        backgroundColor: "rgb(0,118,189)",
                        color: "white",
                        borderColor: "rgb(0,118,189)",
                      }}
                    >
                      SEARCH
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </Flex>
            </MenuList>
          </Menu>
        </Button>
      </ButtonGroup>
      <ButtonGroup gap="1">
        <Button
          width={"auto"}
          px="-20px"
          color="rgb(24,75,99)"
          _hover={{ bg: "none", borderBottom: "2px", borderRadius: "none" }}
          bg="none"
        >
          <Menu
            bgColor="none"
            p="-10px"
            _focus={{ backgroundColor: "none", borderRadius: "none" }}
          >
            <MenuButton
              as={Button}
              rightIcon={<ChevronDownIcon />}
              borderRadius="none"
              _hover={{
                backgroundColor: "white",
                outline: "none",
                marginBottom: "3px",
              }}
              bgColor="rgb(244,244,244)"
              marginBottom="2px"
              _focus={{
                backgroundColor: "none",
                borderRadius: "none",
                marginBottom: "3px",
              }}
            >
              Departments
            </MenuButton>
            <MenuList
              borderRadius={"none"}
              h="350px"
              overflow={"scroll"}
              sy={{
                "&::-webkit-scrollbar": {
                  width: "2px",
                  borderRadius: "1px",
                  backgroundColor: `rgba(0, 0, 0, 0.05)`,
                },
                "&::-webkit-scrollbar-thumb": {
                  backgroundColor: `rgba(0, 0, 0, 0.05)`,
                },
              }}
              sx={{
                "&::-webkit-scrollbar": {
                  width: "2px",
                  borderRadius: "1px",
                  backgroundColor: `rgba(0, 0, 0, 0.05)`,
                },
                "&::-webkit-scrollbar-thumb": {
                  backgroundColor: `rgba(0, 0, 0, 0.05)`,
                },
              }}
            >
              <MenuDisplay
                data_list={Navbar_Menu_Women}
                data_image={Navbar_Menu_Women_image}
              />
              <Flex
                p={"17px"}
                width="88%"
                h={"30%"}
                ml="32px"
                alignItems="center"
              >
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
                      variant={"outline"}
                      w={"100%"}
                      borderLeftRadius={"none"}
                      bgColor="white"
                      border={"2px"}
                      borderColor="rgb(0,57,83)"
                      color={"rgb(0,57,83)"}
                      _hover={{
                        backgroundColor: "rgb(0,118,189)",
                        color: "white",
                        borderColor: "rgb(0,118,189)",
                      }}
                    >
                      SEARCH
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </Flex>
            </MenuList>
          </Menu>
        </Button>
      </ButtonGroup>
      <ButtonGroup gap="1">
        <Button
          width={"auto"}
          px="-20px"
          color="rgb(24,75,99)"
          _hover={{ bg: "none", borderBottom: "2px", borderRadius: "none" }}
          bg="none"
        >
          <Menu
            bgColor="none"
            p="-10px"
            _focus={{ backgroundColor: "none", borderRadius: "none" }}
          >
            <MenuButton
              as={Button}
              rightIcon={<ChevronDownIcon />}
              borderRadius="none"
              _hover={{
                backgroundColor: "white",
                outline: "none",
                marginBottom: "3px",
              }}
              bgColor="rgb(244,244,244)"
              marginBottom="2px"
              _focus={{
                backgroundColor: "none",
                borderRadius: "none",
                marginBottom: "3px",
              }}
            >
              Brands
            </MenuButton>
            <MenuList
              borderRadius={"none"}
              h="350px"
              overflow={"scroll"}
              sy={{
                "&::-webkit-scrollbar": {
                  width: "2px",
                  borderRadius: "1px",
                  backgroundColor: `rgba(0, 0, 0, 0.05)`,
                },
                "&::-webkit-scrollbar-thumb": {
                  backgroundColor: `rgba(0, 0, 0, 0.05)`,
                },
              }}
              sx={{
                "&::-webkit-scrollbar": {
                  width: "2px",
                  borderRadius: "1px",
                  backgroundColor: `rgba(0, 0, 0, 0.05)`,
                },
                "&::-webkit-scrollbar-thumb": {
                  backgroundColor: `rgba(0, 0, 0, 0.05)`,
                },
              }}
            >
              <MenuDisplay
                data_list={Navbar_Menu_Women}
                data_image={Navbar_Menu_Women_image}
              />
              <Flex
                p={"17px"}
                width="88%"
                h={"30%"}
                ml="32px"
                alignItems="center"
              >
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
                      variant={"outline"}
                      w={"100%"}
                      borderLeftRadius={"none"}
                      bgColor="white"
                      border={"2px"}
                      borderColor="rgb(0,57,83)"
                      color={"rgb(0,57,83)"}
                      _hover={{
                        backgroundColor: "rgb(0,118,189)",
                        color: "white",
                        borderColor: "rgb(0,118,189)",
                      }}
                    >
                      SEARCH
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </Flex>
            </MenuList>
          </Menu>
        </Button>
      </ButtonGroup>
      <ButtonGroup gap="1">
        <Button
          width={"auto"}
          px="-20px"
          color="rgb(24,75,99)"
          _hover={{ bg: "none", borderBottom: "2px", borderRadius: "none" }}
          bg="none"
        >
          <Menu
            bgColor="none"
            p="-10px"
            _focus={{ backgroundColor: "none", borderRadius: "none" }}
          >
            <MenuButton
              as={Button}
              rightIcon={<ChevronDownIcon />}
              borderRadius="none"
              _hover={{
                backgroundColor: "white",
                outline: "none",
                marginBottom: "3px",
              }}
              bgColor="rgb(244,244,244)"
              marginBottom="2px"
              _focus={{
                backgroundColor: "none",
                borderRadius: "none",
                marginBottom: "3px",
              }}
            >
              Sale
            </MenuButton>
            <MenuList
              borderRadius={"none"}
              h="350px"
              overflow={"scroll"}
              sy={{
                "&::-webkit-scrollbar": {
                  width: "2px",
                  borderRadius: "1px",
                  backgroundColor: `rgba(0, 0, 0, 0.05)`,
                },
                "&::-webkit-scrollbar-thumb": {
                  backgroundColor: `rgba(0, 0, 0, 0.05)`,
                },
              }}
              sx={{
                "&::-webkit-scrollbar": {
                  width: "2px",
                  borderRadius: "1px",
                  backgroundColor: `rgba(0, 0, 0, 0.05)`,
                },
                "&::-webkit-scrollbar-thumb": {
                  backgroundColor: `rgba(0, 0, 0, 0.05)`,
                },
              }}
            >
              <MenuDisplay
                data_list={Navbar_Menu_Women}
                data_image={Navbar_Menu_Women_image}
              />
              <Flex
                p={"17px"}
                width="88%"
                h={"30%"}
                ml="32px"
                alignItems="center"
              >
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
                      variant={"outline"}
                      w={"100%"}
                      borderLeftRadius={"none"}
                      bgColor="white"
                      border={"2px"}
                      borderColor="rgb(0,57,83)"
                      color={"rgb(0,57,83)"}
                      _hover={{
                        backgroundColor: "rgb(0,118,189)",
                        color: "white",
                        borderColor: "rgb(0,118,189)",
                      }}
                    >
                      SEARCH
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </Flex>
            </MenuList>
          </Menu>
        </Button>
      </ButtonGroup>
      <ButtonGroup gap="1">
        <Button
          width={"auto"}
          px="-20px"
          color="rgb(24,75,99)"
          _hover={{ bg: "none", borderBottom: "2px", borderRadius: "none" }}
          bg="none"
        >
          <Menu
            bgColor="none"
            p="-10px"
            _focus={{ backgroundColor: "none", borderRadius: "none" }}
          >
            <MenuButton
              as={Button}
              rightIcon={<ChevronDownIcon />}
              borderRadius="none"
              _hover={{
                backgroundColor: "white",
                outline: "none",
                marginBottom: "3px",
              }}
              bgColor="rgb(244,244,244)"
              marginBottom="2px"
              _focus={{
                backgroundColor: "none",
                borderRadius: "none",
                marginBottom: "3px",
              }}
            >
              <Flex gap="2">
                <FaHotjar color="rgb(255, 157, 38)" />
                Clothing
              </Flex>
            </MenuButton>
            <MenuList
              borderRadius={"none"}
              h="350px"
              overflow={"scroll"}
              sy={{
                "&::-webkit-scrollbar": {
                  width: "2px",
                  borderRadius: "1px",
                  backgroundColor: `rgba(0, 0, 0, 0.05)`,
                },
                "&::-webkit-scrollbar-thumb": {
                  backgroundColor: `rgba(0, 0, 0, 0.05)`,
                },
              }}
              sx={{
                "&::-webkit-scrollbar": {
                  width: "2px",
                  borderRadius: "1px",
                  backgroundColor: `rgba(0, 0, 0, 0.05)`,
                },
                "&::-webkit-scrollbar-thumb": {
                  backgroundColor: `rgba(0, 0, 0, 0.05)`,
                },
              }}
            >
              <MenuDisplay
                data_list={Navbar_Menu_Women}
                data_image={Navbar_Menu_Women_image}
              />
              <Flex
                p={"17px"}
                width="88%"
                h={"30%"}
                ml="32px"
                alignItems="center"
              >
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
                      variant={"outline"}
                      w={"100%"}
                      borderLeftRadius={"none"}
                      bgColor="white"
                      border={"2px"}
                      borderColor="rgb(0,57,83)"
                      color={"rgb(0,57,83)"}
                      _hover={{
                        backgroundColor: "rgb(0,118,189)",
                        color: "white",
                        borderColor: "rgb(0,118,189)",
                      }}
                    >
                      SEARCH
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </Flex>
            </MenuList>
          </Menu>
        </Button>
      </ButtonGroup>
      <Spacer />
      <ButtonGroup gap="2" mr="25px" pr="5px">
        <Button
          width={"auto"}
          px="-20px"
          color="rgb(24,75,99)"
          _hover={{ bg: "none", borderBottom: "2px", borderRadius: "none" }}
          _focus={{
            backgroundColor: "none",
            borderRadius: "none",
            border: "3px dotted rgb(24,75,99) ",
            padding: "5px",
          }}
          bg="none"
          onClick={onOpen}
        >
          Sign In / Register
          {/* <Button >Open Modal</Button> */}
          <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>Modal Title</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <Text fontWeight="bold" mb="1rem">
                  You can scroll the content behind the modal
                </Text>
                {/* <Lorem count={2} /> */}
              </ModalBody>

              <ModalFooter>
                <Button colorScheme="blue" mr={3} onClick={onClose}>
                  Close
                </Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </Button>
      </ButtonGroup>
    </Flex>
  );
};

export default Navbar;
