import { Game } from "../hooks/useGames";
import { Card, CardBody, Heading, Image } from "@chakra-ui/react";

type GameProps = {
  game: Game;
};

const GameCard = ({ game: { background_image, name } }: GameProps) => {
  return (
    <Card borderRadius="10px" overflow="hidden">
      <Image src={background_image} />
      <CardBody>
        <Heading fontSize="2xl">{name}</Heading>
      </CardBody>
    </Card>
  );
};

export default GameCard;
