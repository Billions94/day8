import React from "react";
import Form from "react-bootstrap/Form";
import Spinner from "react-bootstrap/Spinner";
// import FormControl from 'react-bootstrap/FormControl'

class Search extends React.Component {
  state = {
    movies: [],
    query: "",
    isLoading: false,
  };

  fetchMovie = async () => {
    try {
      this.setState({ isLoading: true });
      const response = await fetch(
        `http://www.omdbapi.com/?i=tt3896198&apikey=1dcfbf0b&s=${this.state.query}`
      );
      const data = await response.json();
      console.log(this.props.query);
      if (response.ok) {
        console.log(`search data`, data);
        this.setState({
          movies: data.Search,
          isLoading: false,
        });
        console.log(`here is your  search data `, this.state.movies);
      } else {
        console.log(`something went wrong`);
      }
    } catch (e) {
      console.error(`ooops an error occured while fetching`, e);
    }
  };

  componentDidMount() {
    this.fetchMovie();
  }

  render() {
    return (
      <>
        <div className="row ml-2">
          <Form.Group className="form" controlId="formBasicEmail">
            <Form.Control
              type="text"
              value={this.state.query}
              onChange={(e) =>
                this.setState({
                  query: e.target.value,
                })
              }
              onClick={() => this.fetchMovie(this.state.query)}
              placeholder="Search movies"
            />
          </Form.Group>
          {this.state.isLoading && (
            <Spinner animation="border" variant="danger" />
          )}
        </div>
        <div>
          <h4 className="pt-4 mb-3">{this.state.query}</h4>
        </div>
        <div id="action" className="d-flex">
          {this.state.movies &&
            this.state.movies.map((movie) => (
              <div className="col-3">
                <div key={movie.imdbID} className="card ">
                  <a href="hfh">
                    <img src={movie.Poster} className="movie" alt="..." />
                  </a>
                </div>
              </div>
            ))}
        </div>
      </>
    );
  }
}

export default Search;
