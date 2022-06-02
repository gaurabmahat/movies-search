import {
    NavbarBrand, NavbarToggler, Collapse, Nav, NavItem, NavLink,
    Navbar
} from "reactstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from "react";
import { apiFetch } from "./Api";

const Navbars = () => {
    const [userInput, setUserInput] = useState("");
    const [apiData, setApiData] = useState([]);

    const search = (e) => {
        e.preventDefault();

        if (userInput !== "") {
            setApiData(apiFetch(userInput))
        }
    }

    return (
        <div>
            <Navbar
                color="info"
                expand="md"
                light
            >
                <NavbarBrand href="/">
                    Home
                </NavbarBrand>
                <NavbarToggler onClick={function noRefCheck() { }} />
                <Collapse
                    isOpen
                    navbar
                >
                    <Nav
                        className="me-auto"
                        navbar
                    >
                        <NavItem>
                            <NavLink href="/movies">
                                Movies
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/series">
                                Series
                            </NavLink>
                        </NavItem>
                    </Nav>
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
                </Collapse>
            </Navbar>
        </div>
    );
}

export default Navbars;