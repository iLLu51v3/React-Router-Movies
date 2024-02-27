# Client Side Routing w/ React Router

## Topics

* React Router
* Navigating to specific routes
* Consuming URL Parameters
* Passing props to components rendered by the Router

## Instructions

### Task 1: Project Set-up

* [x] **Fork** this repository, then clone your fork.
* [x] Execute `npm install` to download dependencies. The `react-router-dom` library is already installed!
* [x] Execute `npm run start` to launch your Movies application in Chrome.

**Once your application is up and running**, you should see a browser window that looks like [this](./design-files/design-1-starter.png) at `http://localhost:3000`.

### Task 2: MVP

#### Design Files

Once you are done your application will have two routes:

* [x] [Screenshot of route '/'](./design-files/design-2-routeA.png)
* [x] [Screenshot of route '/movies/:id'](./design-files/design-3-routeB.png)



#### Set up Routes

* [x] Wrap the `App` component with `BrowserRouter` in `src/index.js`.
        - Move to index.js file and import {BrowserRouter} from 'react-router-dom'
            a) react-router-dom is part of what was npm installed.This allows for us to work React Router freely inside the application without worry of how deeply we expand the component tree.
        - Wrap App with BrowserRouter: <BrowserRouter> <App /> </BrowserRouter>
* [x] Inside your App file add two routes.
      - Move to App.js file
      - Import {Routes, Route} from 'react-router-dom'
      - Scroll to bottom lines and notice a place to be used for Routes
       - Syntax for Routes and Route:<Routes>
                                        <Route path="" element={</>} />
                                        <Route path="" element={</>} />
                                     </Routes>
  * [x] one route for `/` that loads the `MovieList` component. This component will need the movies injected into it via props.
      - MoviesList will require an import MoviesList component found within the Movies file ---> '/MoviesList/Movies'
      - The injected movies are pulled from the API request response. We then need to set the movies slice of state to the response data returned from the API
              - To set the new component state for movies, you go to useEffect and within .then(response =>{}) we need to input and set the response data --> setMovies(response.data) <-- within the {} .then response brackets.
      - Then, input the movies data to movies pulled and injected into the MovieList Route.
      
  * [x] one route that will take an `id` parameter after`/movies/` (EG: `/movies/2`, `/movies/3` where the id is dynamic). This route should load the `Movie` component.
      - This route will require an import of the element component, Movie, from the Movies file.

#### Add Functionality

* [ Not understood  @ (/-) Why there? How would I know to do that? ] 
When a user clicks on the movie card inside `MovieList` they should be taken to `/movies/{id of clicked movie here}` to see the details of the selected movie. ----- URL example '/movies/2' for the 2nd id'd movie in the list.
      *** I understand the solution video step, but for when I am to do it without the video, I do not understand the how to gain the point of realizing when and where I should input certain things (click handler, event handler, what needs the information.)
            - Move to the MovieList component
            - We can choose to use a link inside of the movie card OR we can use the useNavigate hook.
            - Import the navigate hook using import {UseNavigate} from 'react-router-dom'
            - Declare and set navigate to invoke useNavigate.
            - Creat a click-handler beneath this termed, 'onMovieClick', which will take in an 'id' and return a function => () which then takes an event-handler => {}. This is to perform the navigation. Syntax: const onMovieClick = id => () => {}
                  - Within the ending bracket is the event-handler (performing navigation), navigating to movies/:id --> This will require a template literal for 
                  navigate(`movies/${id}`) where the location URL for the movie id will be displayed. The id requres to be interpolated, not the initial URL location.
                  - event-handler is ---> {navigate(`movies/${id}`)}
          (/-) We then need to send the event-handler into the MovieDetails line, within the movie-list div w/in return, so it can be attached to the movie-card div
                  - input onMovieClick handler before key. The handler is going to be invoked on the same line. 
                  - <MovieDetails onMovieClick={onMovieClick(movie.id)} key={movie.id} movie={movie} />
                  - It is invoked right away, passing movie.id because it will return the event-handler
          (/-) MovieDetails function needs the returned event-handler for it to destructure from props
                  - declare the click handler to destructure from movie details props ---> const {onMovieClick} = props
          (/-) Then, wire it to div of MovieDetails, creating a onClick handler passing the movie handler --> <div className='movie-card' onClick={onMovieClick}> 
* [x] You will need to modify line 7 of `Movie.js` to get the id of the selected movie from the URL.
      -- The movie component can, based on the change on the URL displaying the id, can make a request to an API fetching the specific movie id information.
            - Done by using a hook. Import {useParams} and using that hook after the useState.
            - The hook will be declared using the movie's id to provoke the hook. Syntax: const {id} = useParams();
            - The pairing of the id and the api to the URL will return the movie data specific to the id.
            - Set the recieved data as the setMovie slice of state after, .then(response => {}). Input setMovie(response.data) within the response {}.
            - To have the effect run every tim the 'id' changes, input the id at the render parameter of useEffect, [id]);  
* [x] Add functionality so the `Home` button on the `SavedList` component navigates back to home.
            - Move to the SavedList component to add functioning to the home button
            - Import the useNavigate hook
            - Declare provocation object to provoke useNavigate
            - Move to home-button div line and add in click-handler that calls navigate with a string (URL) that dirscts them to home.
            - The string is the original URL used in App.js to display home URL '/'
* [x] You should now be able to navigate back and forth between the list of movies and the detailed view of a single movie.

*** To use a {Link} instead of the navigate hook, import {Link}. Declare link provocation: link={<Link to={`movie/${movie.id}`}>Details</Link>} Where the link goes to the interpolated URL of the specific movie. This link is displayed as 'Details' on the movie-card div.


### Task 3: Stretch Goals

If you have completed Parts 1 & 2 feel free to move on to these stretch goals.

#### Refactor so that our code is DRY

* [ ] You may notice that we are using very similar JSX in the `Movie` component and in the `MovieDetails` component in `MovieList.js`. The main difference is the list of stars, which only exists in the "detailed" view of the `Movie` component.
* [ ] Create a new component in `MovieCard.js` that returns a Movie Card. Then remove the old code from `Movie` and `MovieDetails` and instead return the new `MovieCard` component.
* [ ] The Movie Card should be flexible enough to handle displaying a movie with or without the list of stars.

#### Add `Save Movie` functionality

* [ ] You will notice there is a 'Saved Movies' component that we are not currently using. In this step you will add the functionality to save a movie. You will need to pass the `addToSavedList` function to the `Movie` component. Once you have done that you will need to add a click handler to the save button. You will need to uncomment lines 24-27 in `Movie.js` to complete this.

#### Turn your Saved Movie list into `Link`s

* [ ] Your list of saved movies should be links to the movie itself. Study and understand what the `saveMovie` function is doing.
