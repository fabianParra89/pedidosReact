import logo from './logo.svg';
import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
import NavBar from "./components/nav-bar/nav-bar"
import ItemListContainer from './components/itemListContainer/itemListContainer';
import ItemDetailContainer from "./components/ItemDetailContainer";
import Error404 from "./components/Error404";
import './App.css';
import { CartProvider } from './contexts/CartContext';
import { Cart } from './components/Cart';


function appComponents() {

  return (

    <CartProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/pedidosReact" element={<ItemListContainer />} />
          <Route path="/contact" element={<></>} />
          <Route path="/category/:categoryId" element={<ItemListContainer />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
          <Route path="/eventos" element={<></>} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  )
}

export default appComponents;
