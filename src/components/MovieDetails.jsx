import { useState, useEffect } from "react";
import Spinner from "react-bootstrap/spinner";
// import {useParams} from 'react-router-dom'

const MovieDetails = ({ match }) => {
  const [movies, setMovies] = useState(null);
  const idFromUrl = match.params.movieId;
  const [comments, setComments] = useState(null);

  const fetchMovie = async () => {
    try {
      const response = await fetch(
        `http://www.omdbapi.com/?apikey=1dcfbf0b&i=${idFromUrl}`
      );
      const data = await response.json();
      console.log(`here is data from MovieDetails`, data);
      if (response.ok) {
        // console.log(`search data`, data);
        setMovies(data);
        console.log(`here is your  search data `, data);
      } else {
        console.log(`something went wrong`);
      }
    } catch (e) {
      console.error(`ooops an error occured while fetching`, e);
    }
  };

  const fetchMovieComments = async () => {
    try {
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/comments/${idFromUrl}`,
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTRiMjJhYTRiYjUzZDAwMTViMTllZGUiLCJpYXQiOjE2MzM1NDE4OTAsImV4cCI6MTYzNDc1MTQ5MH0.E5iGDi_e-mdXEXn4DV7GNx_1JeAQhAkiygtOJdyhb4w",
          },
        }
      );
      const data = await response.json();
      console.log(`here is data from MovieDetails`, data);
      if (response.ok) {
        console.log(`comment data`, data);
        setComments(data);
        console.log(`here is your  comment data `, data);
      } else {
        console.log(`something went wrong`);
      }
    } catch (e) {
      console.error(`ooops an error occured while fetching`, e);
    }
  };

  useEffect(() => {
    //   console.log(`b4 me`)
    fetchMovieComments();
    fetchMovie();
    // let idFromUrl = match.params.movieId
    // let foundMovie = movies.find(movie => movie.imdbID.toString() === idFromUrl)
    // movies(foundMovie)
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  //   console.log({ movies });
  return (
    <>
      {!movies ? (
        <Spinner animation="border" variant="danger" />
      ) : (
        <div className="row">
            <div className="col-12">

              <h1 className="">Movie details</h1>
              <div className="row justify-content-center">
                <div className="card" style={{ width: 250 }}>
                  <img src={movies.Poster} alt="" />
                  <div className="card-body">
                    <h4 className="card-text text-dark">{movies.Title}</h4>
                    <h6 className="card-text text-dark text-left">
                      <strong>Year:</strong> {movies.Year}
                    </h6>
                    <h6 className="card-text text-dark text-left">
                      <strong>Rated:</strong> {movies.Rated}
                    </h6>
                    <h6 className="card-text text-dark text-left">
                      <strong>Released:</strong> {movies.Released}
                    </h6>
                    <h6 className="card-text text-dark text-left">
                      <strong>Director:</strong> {movies.Director}
                    </h6>
                  </div>
                </div>
                <div className="col-4">
                  {!comments ? (
                    <Spinner animation="border" variant="danger" />
                  ) : (
                    comments.map((comment) => (
                      <div>
                        <li className="list-group-item text-dark">
                          {comment.comment}
                        </li>
                      </div>
                    ))
                    )}
                    <h6>Here are your comments 😂😂</h6>
                </div>
              </div>
            </div>
          </div>
      )}
    </>
  );
};

export default MovieDetails;
