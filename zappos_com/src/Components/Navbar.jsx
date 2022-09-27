import React from "react";
import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  Heading,
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
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { FaHotjar } from "react-icons/fa";

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Flex minWidth="max-content" px="10px" alignItems="center">
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
              bgColor="white"
              marginBottom="2px"
              _focus={{
                backgroundColor: "none",
                borderRadius: "none",
                marginBottom: "3px",
              }}
            >
              New
            </MenuButton>
            <MenuList>
              <MenuItem>Download</MenuItem>
              <MenuItem>Create a Copy</MenuItem>
              <MenuItem>Mark as Draft</MenuItem>
              <MenuItem>Delete</MenuItem>
              <MenuItem>Attend a Workshop</MenuItem>
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
              bgColor="white"
              marginBottom="2px"
              _focus={{
                backgroundColor: "none",
                borderRadius: "none",
                marginBottom: "3px",
              }}
            >
              Women
            </MenuButton>
            <MenuList>
              <MenuItem>Download</MenuItem>
              <MenuItem>Create a Copy</MenuItem>
              <MenuItem>Mark as Draft</MenuItem>
              <MenuItem>Delete</MenuItem>
              <MenuItem>Attend a Workshop</MenuItem>
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
              bgColor="white"
              marginBottom="2px"
              _focus={{
                backgroundColor: "none",
                borderRadius: "none",
                marginBottom: "3px",
              }}
            >
              Men
            </MenuButton>
            <MenuList>
              <MenuItem>Download</MenuItem>
              <MenuItem>Create a Copy</MenuItem>
              <MenuItem>Mark as Draft</MenuItem>
              <MenuItem>Delete</MenuItem>
              <MenuItem>Attend a Workshop</MenuItem>
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
              bgColor="white"
              marginBottom="2px"
              _focus={{
                backgroundColor: "none",
                borderRadius: "none",
                marginBottom: "3px",
              }}
            >
              Kids
            </MenuButton>
            <MenuList>
              <MenuItem>Download</MenuItem>
              <MenuItem>Create a Copy</MenuItem>
              <MenuItem>Mark as Draft</MenuItem>
              <MenuItem>Delete</MenuItem>
              <MenuItem>Attend a Workshop</MenuItem>
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
              bgColor="white"
              marginBottom="2px"
              _focus={{
                backgroundColor: "none",
                borderRadius: "none",
                marginBottom: "3px",
              }}
            >
              Departments
            </MenuButton>
            <MenuList>
              <MenuItem>Download</MenuItem>
              <MenuItem>Create a Copy</MenuItem>
              <MenuItem>Mark as Draft</MenuItem>
              <MenuItem>Delete</MenuItem>
              <MenuItem>Attend a Workshop</MenuItem>
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
              bgColor="white"
              marginBottom="2px"
              _focus={{
                backgroundColor: "none",
                borderRadius: "none",
                marginBottom: "3px",
              }}
            >
              Brands
            </MenuButton>
            <MenuList>
              <MenuItem>Download</MenuItem>
              <MenuItem>Create a Copy</MenuItem>
              <MenuItem>Mark as Draft</MenuItem>
              <MenuItem>Delete</MenuItem>
              <MenuItem>Attend a Workshop</MenuItem>
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
              bgColor="white"
              marginBottom="2px"
              _focus={{
                backgroundColor: "none",
                borderRadius: "none",
                marginBottom: "3px",
              }}
            >
              Sale
            </MenuButton>
            <MenuList>
              <MenuItem>Download</MenuItem>
              <MenuItem>Create a Copy</MenuItem>
              <MenuItem>Mark as Draft</MenuItem>
              <MenuItem>Delete</MenuItem>
              <MenuItem>Attend a Workshop</MenuItem>
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
              bgColor="white"
              marginBottom="2px"
              _focus={{
                backgroundColor: "none",
                borderRadius: "none",
                marginBottom: "3px",
              }}
            >
              <Flex gap="2">
                <FaHotjar color="yellow" />
                Clothing
              </Flex>
            </MenuButton>
            <MenuList>
              <MenuItem>Download</MenuItem>
              <MenuItem>Create a Copy</MenuItem>
              <MenuItem>Mark as Draft</MenuItem>
              <MenuItem>Delete</MenuItem>
              <MenuItem>Attend a Workshop</MenuItem>
            </MenuList>
          </Menu>
        </Button>
      </ButtonGroup>
      <Spacer />
      <ButtonGroup gap="2" mr="25px">
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
