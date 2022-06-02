import Navbars from './Navbar';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Series from './Series';
import Movies from './Movies';
import Home from './Home';
import NotFound from './NotFound';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbars />
        <div className="content">
          <Routes>
            <Route path="/"
              element={<Home />}
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
    </Router>
  );
}

export default App;
