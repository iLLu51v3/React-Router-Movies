import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Routes, Route, Link } from 'react-router-dom'
import SavedList from './Movies/SavedList';
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie';

export default function App () {
  const [saved, setSaved] = useState([]); // Stretch: the ids of "saved" movies
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getMovies = () => {
      axios
        .get('http://localhost:5001/api/movies') // Study this endpoint with Postman
        .then(response => {
          /** Study this response with a _breakpoint_ or log statements: 

          // debugger 
          /** Go to Dev Tools
           * Debugger has paused the site once the response has been recieved
           * View the response data (right side) >response > data: Arrays(6) --> open
           */

          // and *set* the response data as the 'movies' slice of state:
          setMovies(response.data) // .data because, using the debugger, the dev tools presented the array of movies listed under the "data" tab
        })
        .catch(error => {
          console.error('Server Error', error);
        });
    }
    getMovies();
  }, []);

  const addToSavedList = id => {
    // This is stretch. Prevent the same movie from being "saved" more than once
  };

  return (
    <div>
      <SavedList list={[ /* This is stretch */]} />
      <div>
        <Routes>
          <Route path="/" element={<MovieList movies={movies} />}/> 
          {/** movies={?} --> The MovieList movies are recieved from the api request data is moved to the slice of state in App.js termed "movies"  */}

          <Route path="movies/:id" element={<Movie />}/>
          {/** the term after ":", is user created (me) and can be anything. Not dependent on what the api response debugger data shows or similar */}

          {/* <Route path="" element={} /> */}
        </Routes>
      </div>
    </div>
  );
}










// ______________Previous Attempt________________ //

// import {Routes, Route} from'react-router-dom'
// import SavedList from './Movies/SavedList';
// import MovieList from './Movies/MovieList';
// import Movie from './Movies/Movie';

// export default function App () {
//   const [saved, setSaved] = useState([]); // Stretch: the ids of "saved" movies
//   const [movies, setMovies] = useState([]);

//   useEffect(() => {
//     const getMovies = () => {
//       axios
//         .get('http://localhost:5001/api/movies') // Study this endpoint with Postman
//         .then(response => {
//           setMovies(response.data)          
//           // Study this response with a breakpoint or log statements
//           // and set the response data as the 'movies' slice of state
//         })
//         .catch(error => {
//           console.error('Server Error', error);
//         });
//     }
//     getMovies();
//   }, []); 


//   const addToSavedList = id => {
//     // This is stretch. Prevent the same movie from being "saved" more than once
//   };

//   return (
//     <div>
//       <SavedList list={[ /* This is stretch */]} />

//       <div>
//         <Routes>
//           <Route path="/" element={<MovieList movies={movies} />} /> 
//           <Route path="movies/:id" element={<Movie />} /> 
//         </Routes>

//       </div>
//     </div>
//   );
// }
