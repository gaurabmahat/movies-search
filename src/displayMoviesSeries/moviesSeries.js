import { useContext } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { MoviesArray, SeriesArray } from "../Helper/UserInputContext";

const Moviesseries = () => {

    const { moviesArray } = useContext(MoviesArray);
    const { seriesArray } = useContext(SeriesArray);
    
    return (
        <div className="moviesSeries">
            <h2>Movies and Series</h2>
            <div className="container my-3">
                <div className="row">
                    {
                        moviesArray.map((value, index) => {
                            return (
                            <div className="col-3" key={index}>
                                <div className="card" style={{ width: "18rem" }}>
                                    <img src={value.Poster} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h3 className="card-title">{value.Year}</h3>
                                        <h4 className="card-text">{value.Title}</h4>
                                    </div>
                                </div>
                            </div>
                            )
                        })
                    }
                </div>
            </div>
            <div className="container my-3">
                <div className="row">
                    {
                        seriesArray.map((value, index) => {
                            return (
                            <div className="col-3" key={index}>
                                <div className="card" style={{ width: "18rem" }}>
                                    <img src={value.Poster} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h3 className="card-title">{value.Year}</h3>
                                        <h4 className="card-text">{value.Title}</h4>
                                    </div>
                                </div>
                            </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    );
}

export default Moviesseries;