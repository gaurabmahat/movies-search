import {
    NavbarBrand, NavbarToggler, Collapse, Nav, NavItem, NavLink,
    Navbar
} from "reactstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

const Navbars = () => {
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
                <Collapse navbar>
                    <Nav
                        className="me-auto"
                        navbar
                    >
                        <NavItem>
                            <NavLink href="/components/">
                                Movies
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/components/">
                                Series
                            </NavLink>
                        </NavItem>
                    </Nav>
                    <form class="d-flex" role="search">
                        <input class="form-control me-2" type="search" placeholder="Search Movies/Series" aria-label="Search" />
                        <button class="btn btn-outline-primary" type="submit">Search</button>
                    </form>
                </Collapse>
            </Navbar>
        </div>
    );
}

export default Navbars;