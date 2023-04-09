import "./App.css";
import React, { useEffect, useState } from "react";
import MovieList from "./components/MovieList";
import { GlobalStyles } from "./components/styles/Global";
import { ThemeProvider } from "styled-components";
import { StyledList } from "./components/styles/List.styled";
import Header from "./components/Header";
import AddFavourites from "./components/AddFavourites";
import FavouritesHeading from "./components/FavouritesHeading";
import RemoveFavourites from "./components/RemoveFavourites";

function App() {
  const theme = {
    colors: {
      body: "#141414",
      color: "#ffffff",
    },
  };

  const [movies, setMovies] = useState([]);
  const [favourites, setFavourites] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  const getMovieRequest = async (searchValue) => {
    const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=272336d2`;

    const response = await fetch(url);
    const responseJson = await response.json();

    if (responseJson.Search) {
      setMovies(responseJson.Search);
    }
  };

  useEffect(() => {
    getMovieRequest(searchValue);
  }, [searchValue]);

  useEffect(() => {
    const movieFavourites = JSON.parse(
      localStorage.getItem("react-movie-app-favourites")
    );

    if (movieFavourites) setFavourites(movieFavourites);
  }, []);

  const saveToLocalStorage = (items) => {
    localStorage.setItem("react-movie-app-favourites", JSON.stringify(items));
  };

  const addFavouriteMovie = (movie) => {
    const newFavourites = [...favourites, movie];
    setFavourites(newFavourites);
    saveToLocalStorage(newFavourites);
  };

  const removeFavouriteMovie = (movie) => {
    const removeFavourites = favourites.filter(
      (favourite) => favourite.imdbID !== movie.imdbID
    );

    setFavourites(removeFavourites);
  };

  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <Header
          header="Movies"
          value={searchValue}
          setSearchValue={setSearchValue}
        />
        <StyledList>
          <MovieList
            movies={movies}
            handleFavouritesClick={addFavouriteMovie}
            AddFavourites={AddFavourites}
          />
        </StyledList>

        <FavouritesHeading header="Favourites" />
        <StyledList>
          <MovieList
            movies={favourites}
            handleFavouritesClick={removeFavouriteMovie}
            AddFavourites={RemoveFavourites}
          />
        </StyledList>
      </>
    </ThemeProvider>
  );
}

export default App;
