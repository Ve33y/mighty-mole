import { useState } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon as FAIcon } from '@fortawesome/react-fontawesome';
import { faStar as solidStar } from '@fortawesome/free-solid-svg-icons';
export function Movie({ movie, favs, dispatch, favClicked }){
  
  const [isBlue, setBlue] = useState(false);

  let FavIcon;
  FavIcon = (
    <span className="favIcon">
      <FAIcon 
      onClick={() => {
        favClicked();
        setBlue(!isBlue);
        dispatch({ type: !favs ? 'add' : 'remove', value: movie.imdbID})
      }} 
      icon={solidStar} 
      style={{ color: isBlue ? 'steelblue' : 'silver' }} />
    </span>);

  return (
    <li>
      <img src={movie.Poster} alt={movie.Title + " Poster"} />
      <div>
        {FavIcon}
        <h3>{movie.Title}</h3>
      </div>
    </li>
  )
}

Movie.propTypes = {
  movie: PropTypes.object.isRequired,
}