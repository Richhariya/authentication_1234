import {Navbar, Nav} from 'react-bootstrap'
import { NavLink }  from 'react-router-dom';


const Header = () => {
  return(
    <div>
       <Navbar bg="dark" variant='dark' expand="lg">
     
        <Navbar.Brand href="#home">Header</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto"></Nav>
        </Navbar.Collapse>
        <Nav className="me-auto">
            <Nav.Link as={NavLink} to="/">Sign Up</Nav.Link>
            <Nav.Link as={NavLink} to="/profile">Profile</Nav.Link>
           
          </Nav>
      
    </Navbar>
    </div>
  )
}
export default Header;