import { Game } from "../hooks/useGames";
import { Card, CardBody, Heading, HStack, Image, Text } from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "../services/image-url";

type GameProps = {
  game: Game;
};

const GameCard = ({
  game: { background_image, name, parent_platforms, metacritic },
}: GameProps) => {
  return (
    <Card borderRadius={10} overflow="hidden" width="300px">
      <Image src={getCroppedImageUrl(background_image)} />
      <CardBody>
        <Heading fontSize="2xl">{name}</Heading>
        <HStack justifyContent="space-between">
          <PlatformIconList
            platforms={parent_platforms.map((p) => p.platform)}
          />
          <CriticScore score={metacritic} />
        </HStack>
      </CardBody>
    </Card>
  );
};

export default GameCard;
