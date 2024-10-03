import { Game } from "../hooks/useGames";
import { Card, CardBody, Heading, Image, Text } from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList";

type GameProps = {
  game: Game;
};

const GameCard = ({
  game: { background_image, name, parent_platforms },
}: GameProps) => {
  return (
    <Card borderRadius="10px" overflow="hidden">
      <Image src={background_image} />
      <CardBody>
        <Heading fontSize="2xl">{name}</Heading>
        <PlatformIconList platforms={parent_platforms.map((p) => p.platform)} />
      </CardBody>
    </Card>
  );
};

export default GameCard;
