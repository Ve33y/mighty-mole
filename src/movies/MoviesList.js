import { useRef, useState } from 'react';
import { Movie } from './Movie';

const movies = [
  {
    "Title":"Citizen Kane",
    "Year":"1941",
    "imdbID":"tt0033467",
    "Type":"movie",
    "Poster":"https://m.media-amazon.com/images/M/MV5BYjBiOTYxZWItMzdiZi00NjlkLWIzZTYtYmFhZjhiMTljOTdkXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"
  },
  {
    "Title":"Solomon Kane",
    "Year":"2009",
    "imdbID":"tt0970452",
    "Type":"movie",
    "Poster":"https://m.media-amazon.com/images/M/MV5BMTU5NDMwOTkxMV5BMl5BanBnXkFtZTcwMTg5OTM1OA@@._V1_SX300.jpg"
  },
]


export function MoviesList(){

  const ref = useRef(null);

  return(
    <div>
      <form onSubmit={(e) => {
        e.preventDefault();
        console.log(ref.current.value)
        e.target.reset();
      }}>
        <input ref={ref} /> 
        <button>search</button> 
      </form>
      <ul>
        {movies.map((movie) => {
          return (<Movie key={movie.imdbID} movie={movie}>{movie.Title}</Movie>)
        })}
      </ul>
    </div>
  )
}