import { HStack, Image } from "@chakra-ui/react";
import React from "react";
import appLogo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

const Navbar = () => {
  return (
    <HStack justify={"space-between"} padding="10px">
      <Image src={appLogo} boxSize="60px" />
      <SearchInput />
      <ColorModeSwitch />
    </HStack>
  );
};

export default Navbar;
