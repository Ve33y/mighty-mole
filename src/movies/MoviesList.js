import { useRef, useState } from 'react';
import { Movie } from './Movie';

const movies = [
  {"Title":"Citizen Kane","Year":"1941","imdbID":"tt0033467","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BYjBiOTYxZWItMzdiZi00NjlkLWIzZTYtYmFhZjhiMTljOTdkXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"},{"Title":"Solomon Kane","Year":"2009","imdbID":"tt0970452","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BMTU5NDMwOTkxMV5BMl5BanBnXkFtZTcwMTg5OTM1OA@@._V1_SX300.jpg"},{"Title":"The Holly Kane Experiment","Year":"2017","imdbID":"tt4862506","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BY2MzMjlhZjEtM2I2ZS00NWEwLTk4MDktZTk3MTE1MGZhNDI5XkEyXkFqcGdeQXVyMjIyNzM1NDc@._V1_SX300.jpg"},{"Title":"Kane & Lynch: Dead Men","Year":"2007","imdbID":"tt0973816","Type":"game","Poster":"N/A"},{"Title":"Kill Kane","Year":"2016","imdbID":"tt3586930","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BNjE4NTQ2ODkwNV5BMl5BanBnXkFtZTgwNDEzODA3NzE@._V1_SX300.jpg"},{"Title":"Circus Kane","Year":"2017","imdbID":"tt6164014","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BMTE1N2FlMTAtNTE2OC00MDgxLTlkYWItNTEyOWY0NDVjYWI3XkEyXkFqcGdeQXVyMjUxOTAxNzI@._V1_SX300.jpg"},{"Title":"Kane & Abel","Year":"1985","imdbID":"tt0088547","Type":"series","Poster":"https://m.media-amazon.com/images/M/MV5BMTM5NjM0MDUzNF5BMl5BanBnXkFtZTcwNzc4NzkxMQ@@._V1_SX300.jpg"},{"Title":"To Hell and Back: The Kane Hodder Story","Year":"2017","imdbID":"tt5654710","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BYWRlMDlmZjMtM2U2Yy00OWZkLWJiZWQtZDJmMzY3ZjRhYzU1XkEyXkFqcGdeQXVyMTUxMTQ3NzA@._V1_SX300.jpg"},{"Title":"The Kane Files: Life of Trial","Year":"2010","imdbID":"tt1546420","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BMTcyNzQ1MDQ3MV5BMl5BanBnXkFtZTcwODczMDgxNg@@._V1_SX300.jpg"},{"Title":"Beyond Citizen Kane","Year":"1993","imdbID":"tt1356393","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BMDEwMjAwZGEtZmMwNi00NmJhLWJlZjktNzg4MjdhNmVjY2U3XkEyXkFqcGdeQXVyMTkzODUwNzk@._V1_SX300.jpg"}
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