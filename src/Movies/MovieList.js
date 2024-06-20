import React from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import Movie from './Movie';

export default function MovieList(props) {
  /** 👉 Add Functionality
   * When a user clicks on the movie card inside `MovieList` they should be taken to `/movies/{id of clicked movie here}` to see the details of the selected movie.
   * Create a click handler for what is to happen when a specific movie is clicked on...
  */
  const navigate = useNavigate()
  const movieClick = id => () => { // clickHandler is given an "id", that performs a fxn "=>", the fxn takes an event handler "()", which performs the navigation
    navigate(`movies/${id}`)
  }

/* 👉 Pass the clickHandler down to movie details */
  return (
    <div className="movie-list">
      {props.movies.map(movie => (
        // <MovieDetails key={movie.id} movie={movie} /> prev.
        <MovieDetails movieClick={movieClick(movie.id)} key={movie.id} movie={movie} />
        /**
         * 👉 clickHandler is passed here as movieClick={movieClick} so that we it attaches to the MovieDetails movie-card (below)
         * 👉 Add: It is then invoked right away by way of adding: ...{movieClick(movie.id)}
         * This will allow the "id" to be put into the clickHandler to return it's data to MovieDetails for destructuring 
            * (reminder) It is passing it because of the <MovieDetails .../> being a function 
         */
      ))}
    </div>
  );
}

function MovieDetails(props) {
  const { title, director, metascore } = props.movie;

  /* 👉 Add movieClick data to props to then be destructured */
  const { movieClick } = props

  return (
    /* 👉 Connect the movieClick data to the MovieDetails return div using a clickHandler */

    // <div className="movie-card"> prev.
    <div className="movie-card" onClick={movieClick}>
      
      <h2>{title}</h2>
      <div className="movie-director">
        Director: <em>{director}</em>
      </div>
      <div className="movie-metascore">
        Metascore: <strong>{metascore}</strong>
      </div>
    </div>
  );
}







// ______________Previous Attempt________________ //

// export default function MovieList(props) {
//   const navigate = useNavigate()
//   const onMovieClick = id => () => {
//     navigate(`movies/${id}`)
//   }
//   return (
//     <div className="movie-list">
//       {props.movies.map(movie => (
//         <MovieDetails onMovieClick = {onMovieClick(movie.id)} key={movie.id} movie={movie} />
//       ))}
//     </div>
//   );
// }

// function MovieDetails(props) {
//   const {onMovieClick} = props
//   const { title, director, metascore } = props.movie;

//   return (
//     <div className="movie-card" onClick={onMovieClick}>
//       <h2>{title}</h2>
//       <div className="movie-director">
//         Director: <em>{director}</em>
//       </div>
//       <div className="movie-metascore">
//         Metascore: <strong>{metascore}</strong>
//       </div>
//     </div>
//   );
// }
