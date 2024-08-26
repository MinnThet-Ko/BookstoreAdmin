import { Navbar, NavbarBrand, NavItem } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css'; 
import '../assets/css/navbar.css'
function NavComponent() {
    return (
        <Navbar className="bg-body-tertiary navbar-container" expand="lg">
            <NavbarBrand >Kashimagi</NavbarBrand>
            <NavItem>Home</NavItem>
            <NavItem>Catalog</NavItem>
        </Navbar>
    )
}

export default NavComponent;