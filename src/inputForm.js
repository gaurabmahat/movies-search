import { useState } from "react";
import { apiFetch, apiFetchMovies, apiFetchSeries } from "./Api";
import 'bootstrap/dist/css/bootstrap.min.css';

const InputForm = () => {
    const [userInput, setUserInput] = useState("");
    const [apiData, setApiData] = useState([]);

    const search = (e) => {
        e.preventDefault();

        if (userInput !== "") {
            setApiData(apiFetchMovies(userInput))
            setApiData(apiFetchSeries(userInput))
        }
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