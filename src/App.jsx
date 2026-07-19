import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { CartProvider } from './context/CartContext';
import Home from './components/Home';
import Faq from './components/Faq';
import Contact from './components/Contact';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import OrderConfirmation from './components/OrderConfirmation';
import Login from './components/Login';
import Signup from './components/Signup';
import DownloadApp from './components/DownloadApp';
import ProductDetail from './components/ProductDetail';
import NotFound from './components/NotFound';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToHash from './components/ScrollToHash';

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <Router>
          <ScrollToHash />
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/order-confirmation" element={<OrderConfirmation />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/download" element={<DownloadApp />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </Router>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;
