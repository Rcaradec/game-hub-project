import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

interface GameGardContainerProps {
  children: ReactNode;
}

const GameCardContainer = ({ children }: GameGardContainerProps) => {
  return (
    <Box borderRadius={10} overflow="hidden">
      {children}
    </Box>
  );
};

export default GameCardContainer;
