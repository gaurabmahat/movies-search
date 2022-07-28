import Navbars from './commonComponents/Navbar';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Series from './displayMoviesSeries/Series';
import Movies from './displayMoviesSeries/Movies';
import Home from './Home';
import NotFound from './NotFound';
import Moviesseries from './displayMoviesSeries/moviesSeries';
import { useState } from 'react';
import { UserInput } from './Helper/UserInputContext';

function App() {

  const [inputFromUser, setInputFromUser] = useState('Empty')

  return (
    <Router>
      <UserInput.Provider value={{inputFromUser, setInputFromUser}}>
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
      </UserInput.Provider>
    </Router>
  );
}

export default App;
