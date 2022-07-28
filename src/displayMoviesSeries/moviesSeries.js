import { useContext } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { UserInput } from "../Helper/UserInputContext";

const Moviesseries = () => {

    const { inputFromUser, setInputFromUser } = useContext(UserInput);

    return (
        <div className="moviesSeries">
            <h2>Movies and Series</h2>
            <h3>{inputFromUser}</h3>
        </div>
    );
}

export default Moviesseries;