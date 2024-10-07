import { Badge } from "@chakra-ui/react";

type Score = {
  score: number;
};

const CriticScore = ({ score }: Score) => {
  let color = score > 75 ? "green" : score > 60 ? "yellow" : "";

  return (
    <>
      <Badge
        fontSize="14px"
        paddingX={2}
        borderRadius="4px"
        colorScheme={color}
      >
        {score}
      </Badge>
    </>
  );
};

export default CriticScore;
