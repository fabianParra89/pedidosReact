import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../../assets/img/logo.png'
import CartWidget from '../cart/cartWidget'

function NavBar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home"><img src={logo} alt='logo cabrera' width={250} /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Inicio</Nav.Link>
            <Nav.Link href="">Eventos</Nav.Link>
            <Nav.Link href="">Contactanos</Nav.Link>
            <NavDropdown title="Menú" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Entradas</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Comidas Rapidas
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Bebidas</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <CartWidget/>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;