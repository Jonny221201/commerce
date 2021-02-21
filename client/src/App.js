import "./bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ProductsPage from "./pages/ProductsPage";
import ProductPage from "./pages/ProductPage";
import CartPage from "./pages/CartPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import ProfilePage from "./pages/ProfilePage";
import DeliveryPage from "./pages/DeliveryPage";
import PaymentPage from "./pages/PaymentPage";
import PlaceOrderPage from "./pages/PlaceOrderPage";
import OrderPage from "./pages/OrderPage";
import OrderListPage from "./pages/OrderListPage";
import userListPage from "./pages/userListPage";
import UserEditPage from "./pages/UserEditPage";
import ProductListPage from "./pages/ProductListPage";
import ProductEditPage from "./pages/ProductEditPage";
import "./index.css";

function App() {
  return (
    <Router>
      <Header />

      <Route path="/" component={HomePage} exact />
      <Route path="/about" component={AboutPage} />
      <Route path="/login" component={LoginPage} exact />
      <Route path="/delivery" component={DeliveryPage} exact />
      <Route path="/payment" component={PaymentPage} exact />
      <Route path="/placeorder" component={PlaceOrderPage} exact />
      <Route path="/register" component={RegisterPage} exact />
      <Route path="/profile" component={ProfilePage} exact />
      <Route path="/products/:id" component={ProductPage} exact />
      <Route path="/products" component={ProductsPage} exact />
      <Route path="/cart/:id?" component={CartPage} exact />
      <Route path="/order/:id" component={OrderPage} exact />
      <Route path="/admin/userlist" component={userListPage} exact />
      <Route path="/admin/orderlist" component={OrderListPage} exact />
      <Route path="/admin/user/:id/edit" component={UserEditPage} exact />
      <Route path="/admin/productlist" component={ProductListPage} exact />
      <Route
        path="/admin/productlist/:pageNumber"
        component={ProductListPage}
        exact
      />
      <Route path="/admin/product/:id/edit" component={ProductEditPage} exact />
      <Route path="/search/:keyword" component={HomePage} exact />
      <Route path="/page/:pageNumber" component={HomePage} exact />
      <Route
        path="/search/:keyword/page/:pageNumber"
        component={HomePage}
        exact
      />

      <Footer />
    </Router>
  );
}

export default App;
