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
import Contact from './pages/Contact';
import { Helmet } from 'react-helmet';
import Login from './auth/Login';
import SignUp from './auth/SignUp';


function App() {
  return (
    <Router>
      <Header />

      <Helmet>
        <title>PublicMart</title>
        <meta name='description' content='Explore a diverse selection of high-quality products on our multi-item ecommerce platform. From electronics to fashion, home decor to accessories, discover an extensive range of items that cater to every taste and need. Shop with confidence and enjoy a seamless online shopping experience with secure transactions and prompt delivery.' />
        <meta name="keywords" content="Buy item you need" />
      </Helmet>
      
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/productlist' element={<Productlist />} />
        <Route path='/productdetail/:id' element={<ProductDetail />} />
        <Route path='/shoppingcart' element={<ShoppingCart />} />
        <Route path='/productcheckout' element={<ProductCheckout />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
