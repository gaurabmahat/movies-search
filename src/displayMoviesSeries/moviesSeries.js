import { useContext } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { MoviesArray, SeriesArray } from "../Helper/UserInputContext";

const Moviesseries = () => {

    const { moviesArray } = useContext(MoviesArray);
    const { seriesArray } = useContext(SeriesArray);

    return (
        <div className="moviesSeries">
            <h1>Movies</h1>
            <div className="container my-3">
                <div className="row g-4">
                    {
                        moviesArray.map((value, index) => {
                            return (
                            <div className="col-12 col-md-6 col-lg-4" key={index}>
                                <div className="card" style={{ width: "22rem" }}>
                                    <img 
                                        src={value.Poster} 
                                        className="card-img-top" 
                                        alt="..." 
                                        width={"100%"}
                                        height={"500px"}
                                    />
                                    <div className="card-body" style={{ height: "155px"}}>
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
            <h1>Series</h1>
            <div className="container my-3">
                <div className="row g-4">
                    {
                        seriesArray.map((value, index) => {
                            return (
                            <div className="col-12 col-md-6 col-lg-4" key={index}>
                                <div className="card" style={{ width: "22rem" }}>
                                    <img 
                                        src={value.Poster} 
                                        className="card-img-top" 
                                        alt="..." 
                                        width={"100%"}
                                        height={"500px"}
                                    />
                                    <div className="card-body" style={{ height: "155px" }} >
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