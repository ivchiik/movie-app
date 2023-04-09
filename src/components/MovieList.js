import React from 'react'
import { StyledMovie } from './styles/List.styled'

const MovieList = (props) => {
  return (
    <>
          {props.movies.map((movie, index) => (
              <StyledMovie className='list'>
              <img src={movie.Poster} alt="movie" />
              <div className='overlay'></div>
          </StyledMovie>
      ))}
    </>
  )
}

export default MovieList
