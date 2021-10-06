import React from 'react';
import {Link} from 'react-router-dom'


class MyRow extends React.Component {
    

    state = {
        movies: []

    }

    
     fetchMovie = async() => {
        
        try {

            const response = await fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=1dcfbf0b&s=${this.props.query}`)
            const data = await response.json()
            if(response.ok){

                console.log(`initial data`, data)
                this.setState({
                    movies: data.Search
                })
                console.log(`here is your data `, this.state.movies)

            } else {
                console.log(`something went wrong`)
            }

        } catch (e) {
            console.error(`ooops an error occured while fetching`, e)
        }

     }

    componentDidMount(){
        this.fetchMovie()
    }

    render(){
       
        return (
           
            <>
                {
                    this.state.movies.map(movie => (
                    <div className="colxx ml-1">
                    <div key={movie.imdbID} className="card " >
                        <Link to={'/details/' + movie.imdbID} >
                            <img src={movie.Poster} className="movie" alt="..."/>
                            </Link>
                    </div>
                    </div>
                ))
                }
            </>        
            
        )
    }
}

export default MyRow