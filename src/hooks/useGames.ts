import { SiG2A } from "react-icons/si";
import { GameQuery } from "../App";
import useData from "./useData";
import { Genre } from "./useGenres";

export type Game = {
  id: number;
  name: string;
  slug: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
};

export type Platform = {
  id: number;
  name: string;
  slug: string;
};

const useGames = (gameQuery: GameQuery) =>
  useData<Game>(
    "/games",
    {
      params: {
        genres: gameQuery.genre?.id,
        platforms: gameQuery.platform?.id,
      },
    },
    [gameQuery]
  );

export default useGames;
