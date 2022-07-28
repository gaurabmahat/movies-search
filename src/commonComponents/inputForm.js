import { useState } from "react";
import { apiFetchMovies, apiFetchSeries } from "../Api";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useContext } from "react";
import { UserInput } from "../Helper/UserInputContext";
import { useNavigate } from "react-router-dom";

function InputForm() {
    const navigate = useNavigate();

    const [userInput, setUserInput] = useState("");
    // const { moviesData, setMoviesData } = useContext(MoviesData);
    // const { setSeriesData } = useContext(SeriesData);
    const { inputFromUser, setInputFromUser } = useContext(UserInput);

    const search = (e) => {
        e.preventDefault();
      
        // setMoviesData(apiFetchMovies(userInput))
        // setSeriesData(apiFetchSeries(userInput))
        setInputFromUser(userInput);

        //window.location.href = '/moviesSeries'
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