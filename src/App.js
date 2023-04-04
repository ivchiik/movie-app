import "./App.css";
import React, { useEffect, useState } from "react";
import MovieList from "./components/MovieList";
import { GlobalStyles } from "./components/styles/Global";
import { ThemeProvider } from "styled-components";
import { StyledList } from "./components/styles/List.styled";
import Header from "./components/Header";

function App() {
  const theme = {
    colors: {
      body: "#141414",
      color: "#ffffff",
    },
  };

  const [movies, setMovies] = useState([]);
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

  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <Header value={searchValue} setSearchValue={setSearchValue} />
        <StyledList>
          <MovieList movies={movies} />
        </StyledList>
      </>
    </ThemeProvider>
  );
}

export default App;
