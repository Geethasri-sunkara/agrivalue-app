import { Link } from "react-router-dom";
import "../App.css";

function Navbar() {
  return (
    <nav className="navbar">

      <Link to="/">Home</Link>
      <Link to="/login">Login</Link>

      {/* Farmer */}
      <Link to="/add-product">Add Product</Link>

      {/* Buyer */}
      <Link to="/products">Products</Link>
      <Link to="/cart">Cart</Link>

      {/* Dashboards */}
      <Link to="/farmer">Farmer</Link>
      <Link to="/buyer">Buyer</Link>
      <Link to="/admin">Admin</Link>

    </nav>
  );
}

export default Navbar;