import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";

function Login() {
  const [role, setRole] = useState("buyer");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (role === "farmer") navigate("/add-product");
    else if (role === "buyer") navigate("/products");
    else navigate("/admin");
  };

  return (
    <div className="login-box">
      <h2>🌾 AgriValue Login</h2>

      <input type="text" placeholder="Enter Email" />
      <input type="password" placeholder="Enter Password" />

      <select onChange={(e) => setRole(e.target.value)}>
        <option value="buyer">Buyer</option>
        <option value="farmer">Farmer</option>
        <option value="admin">Admin</option>
      </select>

      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default Login;