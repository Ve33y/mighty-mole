import { Link, useLocation } from 'react-router-dom';

 
// TO DO persistent state on clicking back?

export function FavsList(){
  const location = useLocation()
  // console.log(location.state)
  return (
    location.state ? 
    <div>
    {location.state.map((movie) => {
      return (
        <li key={movie.imdbID} className="movies-list">
        <img src={movie.Poster} alt={movie.Title + " Poster"} />
        <div>
          <h3>{movie.Title}</h3>
        </div>
        </li>)
    })}
      <Link to="/">
        <button>back</button> 
      </Link>
    </div>
  :
    <div>
      <h4> favs go here but you haven't added any </h4>
      <Link to="/">
      <button>back</button> 
      </Link>
    </div>
  )
} 