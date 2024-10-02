import { HStack, Image, Text } from "@chakra-ui/react";
import React from "react";
import appLogo from "../assets/logo.webp";

const Navbar = () => {
  return (
    <HStack>
      <Image src={appLogo} boxSize="60px" />
      <Text>Navbar</Text>
    </HStack>
  );
};

export default Navbar;
