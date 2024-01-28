import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';

import Header from './components/Header';
import Footer from './components/Footer';
import PrivateRoute from './components/PrivateRoute';

import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import ShippingScreen from './screens/ShippingScreen';
import PaymentScreen from './screens/PaymentScreen';
import PlaceOrderScreen from './screens/PlaceOrderScreen';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import OrderScreen from './screens/OrderScreen';

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <main className='py-3'>
          <Container>
            <Routes>
              <Route path='/' element={<HomeScreen />} />
              <Route path='/product/:id' element={<ProductScreen />} />
              <Route path='/cart' element={<CartScreen />} />
              <Route path='/login' element={<LoginScreen />} />
              <Route path='/register' element={<RegisterScreen />} />

              {/* Registered User Routes */}
              <Route path='' element={<PrivateRoute />}>
                <Route path='/shipping' element={<ShippingScreen />} />
                <Route path='/payment' element={<PaymentScreen />} />
                <Route path='/placeorder' element={<PlaceOrderScreen />} />
                <Route path='/order/:id' element={<OrderScreen />} />
              </Route>
            </Routes>
          </Container>
        </main>
        <Footer />
        <ToastContainer />
      </Router>
    </>
  );
};

export default App;
