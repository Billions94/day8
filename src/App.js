import './App.css';
import MyNav from './components/MyNav'
import TvShows from './components/TvShows'
import MyFooter from './components/MyFooter'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import MovieDetails from './components/MovieDetails';

function App() {
  return (
    <div className="App">
      <div className="app-container">
        <Router>
        <MyNav />
        <Route path="/tvshows" exact component={TvShows} />
        <Route path="/details/:movieId" component={MovieDetails} />
        <MyFooter />
        </Router>
      </div>
    </div>
  );
}

export default App;
