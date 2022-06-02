import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () => {
    return (
        <div className="home">
            <h2>Search for Movies and Series</h2>
            <div className="form-div">
                <form className="d-flex" >
                    <input className="form-control me-2"
                        type="search"
                        placeholder="Search"
                        aria-label="Search"
                    />
                    <button className="btn btn-outline-info" type="submit">Search</button>
                </form>
            </div>
        </div>
    );
}

export default Home;