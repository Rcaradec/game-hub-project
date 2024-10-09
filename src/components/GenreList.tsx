import React from "react";
import useGenre from "../hooks/useGenre";

const GenreList = () => {
  const { genres, error, isLoading } = useGenre();
  console.log("genres", genres);
  return (
    <>
      <h1>TODO: DISPLAY GENRES</h1>
    </>
  );
};

export default GenreList;
