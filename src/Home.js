import 'bootstrap/dist/css/bootstrap.min.css';
import InputForm from './inputForm';

const Home = () => {
    return (
        <div className="home">
            <h2>Search for Movies and Series</h2>
            <div className="form-div">
                <InputForm />
            </div>
        </div>
    );
}

export default Home;