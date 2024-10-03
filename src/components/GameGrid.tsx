import axios from "axios";
import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import {
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
  Text,
} from "@chakra-ui/react";

interface gamesResponse {
  count: number;
  results: Game[];
}

interface Game {
  id: number;
  name: string;
}

const GameGrid = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    apiClient
      .get<gamesResponse>("/games")
      .then((response) => setGames(response.data.results))
      .catch((error) => setError(error.message));
  }, []);

  return (
    <>
      {error && <Text>{error}</Text>}
      <UnorderedList>
        {games.map((game) => (
          <ListItem key={game.id}>{game.name}</ListItem>
        ))}
      </UnorderedList>
    </>
  );
};

export default GameGrid;
