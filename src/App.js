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

  const addFavouriteMovie = (movie) => {
    const newFavourites = [ ...favourites, movie ];
    setFavourites(newFavourites);
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
            handlefavouritesclick={addFavouriteMovie}
            AddFavourites={RemoveFavourites}
          />
        </StyledList>
      </>
    </ThemeProvider>
  );
}

export default App;
