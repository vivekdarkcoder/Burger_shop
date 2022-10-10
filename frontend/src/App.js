import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./style/app.scss"
import "./style/header.scss"
import "./style/home.scss"
import "./style/founder.scss"
import "./style/menu.scss"
import "./style/footer.scss"
import "./style/contact.scss"
import "./style/cart.scss"
import "./style/shipping.scss"
import "./style/confirmorder.scss"
import "./style/paymentsucsess.scss"
import "./style/login.scss"
import "./style/profile.scss"
import "./style/table.scss"
import "./style/orderDetails.scss"
import "./style/dashboard.scss"
import "./style/about.scss"


import Home from "./components/home/Home"
import Header from "./components/layout/Header"
import { Footer } from "./components/layout/Footer";
import Contact from "./components/contact/Contact"
import Cart from "./components/cart/Cart";
import Shipping from "./components/cart/Shipping"
import ConfirmOrder from "./components/cart/ConfirmOrder"
import PaymentSuccess from "./components/cart/PaymentSuccess.js"
import Login from "./components/login/Login.js"
import Profile from "./components/profile/Profile";
import MyOrders from "./components/myOrders/MyOrders";
import OrderDetails from "./components/myOrders/OrderDetails";
import Dashboard from "./components/admin/Dashboard";
import Users from "./components/admin/Users";
import Orders from "./components/admin/Orders.js";
import About from "./components/about/About";
import NotFound from "./components/layout/NotFound";

function App() {
  return (
    <Router>
      <Header isAuthenticated={true}/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About/>} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/shipping" element={<Shipping />} />
        <Route path="/confirmorder" element={<ConfirmOrder/>} />
        <Route path="/paymentsuccess" element={<PaymentSuccess/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/me" element={<Profile/>} />
        <Route path="/myorders" element={<MyOrders/>} />
        <Route path="/order/:id" element={<OrderDetails/>} />
        <Route path="/admin/dashboard" element={<Dashboard/>} />
        <Route path="/admin/users" element={<Users/>} />
        <Route path="/admin/orders" element={<Orders/>} />

        <Route path="*" element={<NotFound/>}/>


      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
