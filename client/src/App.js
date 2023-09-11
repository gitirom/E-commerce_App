import './App.css';
import Cart from './pages/Cart';
import Home from './pages/Home';
import Login from './pages/Login';
import Product from './pages/Product';
import ProductList from './pages/ProductList';
import Register from './pages/Register';
import Pay from "./components/Pay";
import SuccessPay from "./components/Success";
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom"

function App() {
  const user = true;
  return (
    <>
      <Router >
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route  path="/products/:category" element={<ProductList />} />
          <Route  path="/product/:id" element={<Product />} />
          <Route  path="/cart" element={<Cart />} />
          <Route exact path="/login" element={user ? <Home /> : <Login />} />
          <Route  path="/register" element={user ? <Home /> : <Register />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
