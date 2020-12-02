import PropTypes from 'prop-types';

export function Movie({ movie }){
  return (
    <li>{movie.Title}</li>
  )
}

Movie.propTypes = {
  movie: PropTypes.object.isRequired,
}