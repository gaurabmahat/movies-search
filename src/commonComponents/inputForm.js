import { useState } from "react";
import { apiFetchMovies, apiFetchSeries } from "../Api";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useContext } from "react";
import { MoviesArray } from "../Helper/UserInputContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function InputForm() {
    const navigate = useNavigate();

    const [userInput, setUserInput] = useState("");
    // const { moviesData, setMoviesData } = useContext(MoviesData);
    // const { setSeriesData } = useContext(SeriesData);
    const { setMoviesArray } = useContext(MoviesArray);

    const search = (e) => {
        e.preventDefault();
      
        axios.get(`http://www.omdbapi.com/?s=${userInput}&type=movie&apikey=592e0b79`)
        .then((response) => {
            console.log(response);
            setMoviesArray(response.data.Search);
        })

        navigate('/moviesSeries')
    }

    return (
        <form className="d-flex" onSubmit={search}>
            <input className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
            />
            <button className="btn btn-outline-dark" type="submit">Search</button>
        </form>
    );
}

export default InputForm;