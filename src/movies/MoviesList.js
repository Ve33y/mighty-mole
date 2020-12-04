import { useRef, useState } from 'react';
import { Movie } from './Movie';

const API_BASE = `http://omdbapi.com/?s=`
const API_KEY = `&apikey=`

export function MoviesList(){

  const [movies, setMovies] = useState([]);

  const fetchData = async (search) => {
    try {
      const res = await fetch(API_BASE + search + API_KEY + process.env.REACT_APP_API_KEY);
      const movies = await res.json()
      setMovies(movies.Search)
      // console.log(movies)
    } catch (e) {
      console.error(e)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchData(ref.current.value);
    e.target.reset();
  }

  const ref = useRef(null);

  return(
    <div>
      <form onSubmit={handleSubmit} className='search'>
        <input ref={ref} /> 
        <button>search</button> 
      </form>
      {
        movies &&
        <ul className='movies-list'>
        {movies.map((movie) => {
          return (
          <Movie 
            key={movie.imdbID} 
            movie={movie}>
          </Movie>)
        })}
        <div>
          <p> type in fire to get started 🔥 </p>
        </div>
      </ul>
      }
    </div>
  )
}