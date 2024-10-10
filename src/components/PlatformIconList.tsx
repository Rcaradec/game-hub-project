import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaLinux,
  FaAndroid,
  FaApple,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { HStack, Icon, Text } from "@chakra-ui/react";
import { Platform } from "../hooks/useGames";
import { IconType } from "react-icons";

export type PlatformIconProps = {
  platforms: Platform[];
};

const PlatformIconList = ({ platforms }: PlatformIconProps) => {
  const iconMap: { [key: string]: IconType } = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    linux: FaLinux,
    android: FaAndroid,
    ios: FaApple,
    nintendo: SiNintendo,
    web: BsGlobe,
  };
  return (
    <HStack marginY={1}>
      {platforms.map(({ id, slug }) => (
        <Icon as={iconMap[slug]} color="gray.500" key={id} />
      ))}
    </HStack>
  );
};

export default PlatformIconList;
