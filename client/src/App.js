import './App.css';
import Cart from './pages/Cart';
import Home from './pages/Home';
import Login from './pages/Login';
import Product from './pages/Product';
import ProductList from './pages/ProductList';
import Register from './pages/Register';
import Pay from "./components/Pay";
import SuccessPay from "./components/Success";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"

function App() {
  return (
    <>
      <Router >
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route  path="/pay" element={<Pay />} />
          <Route  path="/success" element={<SuccessPay />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
