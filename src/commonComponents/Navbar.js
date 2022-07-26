import {
    NavbarBrand, NavbarToggler, Collapse, Nav, NavItem, NavLink,
    Navbar
} from "reactstrap";
import InputForm from "./inputForm";

const Navbars = () => {
    return (
        <div>
            <Navbar
                color="info"
                expand="md"
                light
            >
                <NavbarBrand href="/">
                    MovieInfo
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
                    <InputForm />
                </Collapse>
            </Navbar>
        </div>
    );
}

export default Navbars;