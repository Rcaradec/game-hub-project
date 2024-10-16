import platforms from "../data/platforms";
import useData from "./useData";
import { Platform } from "./useGames";

// Api call:
// const usePlatforms = () => useData<Platform>("/platforms/lists/parents");

// Integrated data from /data for performance:
const usePlatforms = () => ({
  data: platforms,
  error: null,
});

export default usePlatforms;
