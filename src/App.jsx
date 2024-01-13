import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Header from './layout/Header';
import Home from './pages/Home';
import Footer from './layout/Footer';
import About from './pages/About';
import Productlist from './pages/Productlist';
import ProductDetail from './pages/ProductDetail';
import ShoppingCart from './pages/ShoppingCart';
import ProductCheckout from './pages/ProductCheckout';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/productlist' element={<Productlist />} />
        <Route path='/productdetail/:id' element={<ProductDetail />} />
        <Route path='/shoppingcart' element={<ShoppingCart />} />
        <Route path='/productcheckout' element={<ProductCheckout />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
