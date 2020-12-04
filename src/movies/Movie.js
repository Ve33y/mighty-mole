import { useState, useReducer } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon as FAIcon } from '@fortawesome/react-fontawesome';
import { faStar as solidStar } from '@fortawesome/free-solid-svg-icons';
export function Movie({ movie }){
  const [favs, setFavs] = useState(false);
  const [isBlue, setBlue] = useState(false);
 
  // TO DO curently favs are making it into individual arrays
  // TO DO have to augment and also maybe add a button to get favorites
  const [favsArray, dispatch] = useReducer((favsArray, { type, value }) => {
    switch (type) {
      case 'add':
        return [...favsArray, value];
      case 'remove':
        return favsArray.filter((item) => item !== value);
      default:
        return favsArray;
    }
  }, []);

  const favClicked = () => {
    setFavs(!favs);
    setBlue(!isBlue)
  }

  let FavIcon;
  FavIcon = (
    <span className="favIcon">
      <FAIcon 
      onClick={() => {
        favClicked();
        dispatch({ type: !favs ? 'add' : 'remove', value: movie.imdbID})
      }} 
      icon={solidStar} 
      style={{ color: isBlue ? 'pink' : 'silver' }} />
    </span>);

  // console.log('fav?', favsArray)
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