import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useContext } from "react";
import { MoviesArray, SeriesArray } from "../Helper/UserInputContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function InputForm() {
    const navigate = useNavigate();

    const [userInput, setUserInput] = useState("");

    const { setMoviesArray } = useContext(MoviesArray);
    const { setSeriesArray } = useContext(SeriesArray);

    const search = (e) => {
        e.preventDefault();
      
        axios.get(`http://www.omdbapi.com/?s=${userInput}&type=movie&apikey=592e0b79`)
        .then((response) => {
            console.log(response);
            setMoviesArray(response.data.Search);
        }).catch(err => {
            console.log(err);
        })

        axios.get(`http://www.omdbapi.com/?s=${userInput}&type=series&apikey=592e0b79`)
        .then((response) => {
            console.log(response);
            setSeriesArray(response.data.Search);
        }).catch(err => {
            console.log(err);
        })

        navigate('/moviesSeries');
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