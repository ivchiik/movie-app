import React from 'react'
import { StyledMovie } from './styles/List.styled'

const MovieList = (props) => {
  return (
    <>
          {props.movies.map((movie, index) => (
              <StyledMovie>
              <img src={movie.Poster} alt="movie" />
          </StyledMovie>
      ))}
    </>
  )
}

export default MovieList
