import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

export type gamesResponse = {
  count: number;
  results: Game[];
};

export type Game = {
  id: number;
  name: string;
};

const useGames = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();

    apiClient
      .get<gamesResponse>("/games", {
        signal: controller.signal,
      })
      .then((response) => setGames(response.data.results))
      .catch((error) => {
        if (error instanceof CanceledError) return;
        setError(error.message);
      });

    return () => controller.abort();
  }, []);

  return { games, error };
};

export default useGames;
