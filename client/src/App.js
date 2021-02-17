import './bootstrap.min.css';
import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import CartPage from './pages/CartPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ProfilePage from './pages/ProfilePage';
import DeliveryPage from './pages/DeliveryPage';
import PaymentPage from './pages/PaymentPage'
import PlaceOrderPage from './pages/PlaceOrderPage'
import OrderPage from './pages/OrderPage'
import './index.css'


function App() {
  return (
   <Router>
   <Header />
   <main className='py-3'>

    <Container>

    <Route path='/' component={HomePage} exact />
    <Route path='/login' component={LoginPage}  />
    <Route path='/delivery' component={DeliveryPage}  />
    <Route path='/payment' component={PaymentPage}  />
    <Route path='/placeorder' component={PlaceOrderPage}  />
    <Route path='/register' component={RegisterPage}  />
    <Route path='/profile' component={ProfilePage}  />
    <Route path='/products/:id' component={ProductPage} />
    <Route path='/cart/:id?' component={CartPage} />
    <Route path='/order/:id' component={OrderPage} />

    </Container>

   </main>

   <Footer />

   </Router>
  );
}

export default App;
