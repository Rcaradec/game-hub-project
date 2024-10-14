import genres from "../data/genres";
import { Game } from "./useGames";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}
// Api call:
// const useGenres = () => useData<Genre>("/genres");

// Integrated data from /data for performance:
const useGenres = () => ({
  data: genres,
  isLoading: false,
  error: null,
});
export default useGenres;
