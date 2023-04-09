import React from "react";
import { StyledMovie } from "./styles/List.styled";

const MovieList = (props) => {
  const AddFavourites = props.AddFavourites;
  return (
    <>
      {props.movies.map((movie, index) => (
        <StyledMovie className="list">
          <img src={movie.Poster} alt="movie" />
          <div
            onClick={() => props.handleFavouritesClick(movie)}
            className="overlay"
          >
            <AddFavourites />
          </div>
        </StyledMovie>
      ))}
    </>
  );
};

export default MovieList;
