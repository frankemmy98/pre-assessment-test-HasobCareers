import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import BondOffer from "./pages/BondOffer";
import DMO from "./pages/DMO";
import Features from "./pages/Features";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Cart from "./pages/Cart";
import Layout from "./components/Layout";
import Portfolio from "./pages/Portfolio";
import Notification from "./pages/Notification";
import User from "./pages/User";
import Logout from "./pages/Logout";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="bondOffer" element={<BondOffer />} />
          <Route path="dmo" element={<DMO />} />
          <Route path="features" element={<Features />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path="cart" element={<Cart />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="notification" element={<Notification />} />
          <Route path="user" element={<User />} />
          <Route path="logout" element={<Logout />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
