import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

interface GameGardContainerProps {
  children: ReactNode;
}

const GameCardContainer = ({ children }: GameGardContainerProps) => {
  return (
    <Box height="200px" borderRadius={10} overflow="hidden">
      {children}
    </Box>
  );
};

export default GameCardContainer;
