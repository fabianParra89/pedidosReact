import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../../assets/img/logo.png'
import CartWidget from '../cart/cartWidget'
import ItemListContainer from '../itemListContainer/itemListContainer'
import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
import Error404 from "../Error404";
import data from "../../data/data.json";
import ItemDetailContainer  from "../ItemDetailContainer";

function NavBar() {
  const categories = data.map(producto => producto.tipoProducto);
  const categoriesMenu = [... new Set(categories.sort())];
  return (
    <BrowserRouter>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand as={NavLink} to="/"><img src={logo} alt='logo cabrera' width={250} /></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={NavLink} to="/">Inicio</Nav.Link>
              <Nav.Link as={NavLink} to="/eventos">Eventos</Nav.Link>
              <Nav.Link as={NavLink} to="/contact">Contactanos</Nav.Link>
              <NavDropdown title="Menú" id="basic-nav-dropdown">
                {
                  categoriesMenu.map((value, index) => {
                    return (<NavDropdown.Item as={NavLink} key={'NDI_' + index}
                      to={`/category/${value}`}>{value}</NavDropdown.Item>)
                  })
                }
              </NavDropdown>
            </Nav>
            <CartWidget />
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/contact" element={<></>} />
        <Route path="/category/:categoryId" element={<ItemListContainer />} />
        <Route path="/item/:Id" element={<ItemDetailContainer />} />
        <Route path="/eventos" element={<></>} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default NavBar;