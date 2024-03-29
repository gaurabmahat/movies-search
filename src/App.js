import Navbars from './commonComponents/Navbar';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Series from './displayMoviesSeries/Series';
import Movies from './displayMoviesSeries/Movies';
import Home from './Home';
import NotFound from './NotFound';
import Moviesseries from './displayMoviesSeries/moviesSeries';
import { useState } from 'react';
import { MoviesArray, SeriesArray } from './Helper/UserInputContext';

function App() {

  const [moviesArray, setMoviesArray] = useState([])
  const [seriesArray, setSeriesArray] = useState([]);

  return (
    <Router>
      <MoviesArray.Provider value={{ moviesArray, setMoviesArray }}>
        <SeriesArray.Provider value={{ seriesArray, setSeriesArray }}>
          <div className="App">
            <Navbars />
            <div className="content">
              <Routes>
                <Route path="/"
                  element={<Home />}
                />
                <Route path="/moviesSeries"
                  element={<Moviesseries />}
                />
                <Route path="/movies"
                  element={<Movies />}
                />
                <Route path="/series"
                  element={<Series />}
                />
                <Route path='*'
                  element={<NotFound />}
                />
              </Routes>
            </div>
          </div>
        </SeriesArray.Provider>
      </MoviesArray.Provider>
    </Router>
  );
}

export default App;
