import { Link } from "react-router-dom";
import { useContext } from "react";
import { ProductContext } from "../ProductContext";
import "../App.css";

function Navbar() {
  const { cart } = useContext(ProductContext);

  return (
    <nav className="navbar">
      <h2 className="logo">🌾 AgriValue</h2>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/cart">Cart ({cart.length})</Link>
        <Link to="/login">Login</Link>
      </div>
    </nav>
  );
}

export default Navbar;