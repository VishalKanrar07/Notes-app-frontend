"use client";

import {
  Box,
  Flex,
  Avatar,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
  Center,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { LOGOUT } from "../../../Redux/users/user.types";
import avatar from "../../../assets/avatar.png";

export default function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { auth, token, loading, error } = useSelector(
    (state) => state.userReducer
  );
  const dispatch = useDispatch();
  const nav = useNavigate();

  return (
    <>
      <Box
        zIndex={1000}
        position={"fixed"}
        top={0}
        w={"100%"}
        bg={useColorModeValue("#656d4a", "#343a40")}
        px={6}
      >
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <Box
            onClick={() => {
              nav("/");
            }}
            cursor={"pointer"}
            fontSize={"2xl"}
            fontWeight={"bold"}
            color={"white"}
          >
            Notes App
          </Box>

          <Flex alignItems={"center"}>
            <Stack direction={"row"} spacing={7}>
              <Button
                display={auth == true ? "block" : "none"}
                onClick={() => {
                  nav("/notes");
                }}
              >
                All Notes
              </Button>
              <Button
                display={auth == true ? "none" : "block"}
                onClick={() => {
                  nav("/register");
                }}
              >
                Signup
              </Button>
              <Button
                display={auth == true ? "none" : "block"}
                onClick={() => {
                  nav("/login");
                }}
              >
                Login
              </Button>
              <Button onClick={toggleColorMode}>
                {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
              </Button>

              <Menu>
                <MenuButton
                  as={Button}
                  rounded={"full"}
                  variant={"link"}
                  cursor={"pointer"}
                  minW={0}
                >
                  <Avatar
                    border={"none"}
                    bgColor={"white"}
                    size={"sm"}
                    src={avatar}
                  />
                </MenuButton>
                <MenuList alignItems={"center"}>
                  <br />
                  <Center>
                    <Avatar size={"2xl"} src={avatar} />
                  </Center>
                  <br />

                  <MenuDivider />
                  <Center>
                    <MenuItem
                      onClick={() => {
                        dispatch({ type: LOGOUT });
                      }}
                    >
                      Logout
                    </MenuItem>
                  </Center>
                </MenuList>
              </Menu>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}
