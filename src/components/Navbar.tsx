import { HStack, Image } from "@chakra-ui/react";
import React from "react";
import appLogo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";

const Navbar = () => {
  return (
    <HStack justify={"space-between"} padding="10px">
      <Image src={appLogo} boxSize="60px" />
      <ColorModeSwitch />
    </HStack>
  );
};

export default Navbar;
