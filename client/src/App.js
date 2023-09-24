import './App.css';
import Cart from './pages/Cart';
import Home from './pages/Home';
import Login from './pages/Login';
import Product from './pages/Product';
import ProductList from './pages/ProductList';
import Register from './pages/Register';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Success from './pages/Success';
import { useSelector } from 'react-redux';
import { ToastContainer } from 'react-toastify';

function App() {
  const user = useSelector((state) => state.user.currentUser);
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
          <Route  path="/success" element={<Success />} />
        </Routes>
      </Router>
      <ToastContainer                                                              //React-Toastify allows you to add notifications to your app with ease. No more nonsense!
      position="bottom-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
      />
    </>
  );
}

export default App;
