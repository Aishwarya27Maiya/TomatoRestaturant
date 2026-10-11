import Nav from "./components/Nav.jsx";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home.jsx";
import Cart from "./pages/cart/Cart.jsx";
import PlaceOrder from "./pages/placeOrder/PlaceOrder.jsx";
import Footer from "./components/Footer.jsx";

const App = () => {
  return (
    <>
    <div className="app">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/placeOrder" element={<PlaceOrder />} />
      </Routes>
    </div>
    <Footer />
    </>
  );
};

export default App;
