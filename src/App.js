import Navbars from './commonComponents/Navbar';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Series from './displayMoviesSeries/Series';
import Movies from './displayMoviesSeries/Movies';
import Home from './Home';
import NotFound from './NotFound';
import Moviesseries from './displayMoviesSeries/moviesSeries';
import ApiDataProvider from './Helper/ContextArraysFromApi';

function App() {
  return (
    <Router>
      <div className="App">
        <ApiDataProvider>
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
        </ApiDataProvider>
      </div>
    </Router>
  );
}

export default App;
