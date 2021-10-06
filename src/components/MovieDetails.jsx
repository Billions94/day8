import { useState, useEffect } from "react";
import Spinner from "react-bootstrap/spinner";
// import {useParams} from 'react-router-dom'

const MovieDetails = ({ match }) => {
  const [movies, setMovies] = useState(null);
  const idFromUrl = match.params.movieId;
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchMovie();
    // let idFromUrl = match.params.movieId
    // let foundMovie = movies.find(movie => movie.imdbID.toString() === idFromUrl)
    // movies(foundMovie)
  }, []);

  const fetchMovie = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(
        `http://www.omdbapi.com/?apikey=1dcfbf0b&i=${idFromUrl}`
      );
      const data = await response.json();
      console.log(`here is data from MovieDetails`, data);
      if (response.ok) {
        console.log(`search data`, data);
        setMovies(data);
        setIsLoading(false);
        console.log(`here is your  search data `, movies);
      } else {
        console.log(`something went wrong`);
      }
    } catch (e) {
      console.error(`ooops an error occured while fetching`, e);
    }
  };
  console.log({ movies });
  return (
    <>
      {!movies ? (
        <Spinner animation="border" variant="danger" />
      ) : (
        <div>
          <h1>Here are your movie details</h1>

          <div className="row justify-content-center">
            <div className="card" style={{ width: 250 }}>
              <img src={movies.Poster} alt="" />
              <div className="card-body">
                <h4 className="card-text text-dark">{movies.Title}</h4>
                <h4 className="card-text text-dark">{movies.Year}</h4>
                <h4 className="card-text text-dark">{movies.Rated}</h4>
                <h4 className="card-text text-dark">{movies.Released}</h4>
                <h4 className="card-text text-dark">{movies.Director}</h4>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MovieDetails;
