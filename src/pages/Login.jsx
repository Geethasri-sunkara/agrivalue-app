import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";

function Login() {
  const [role, setRole] = useState("buyer");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (role === "farmer") navigate("/add-product");
    else navigate("/products");
  };

  return (
    <div className="login-wrapper">

      <div className="login-card">

        <h2>🌾 AgriValue Connect</h2>
        <p>Login to continue</p>

        <input type="email" placeholder="Email Address" />
        <input type="password" placeholder="Password" />

        <label>Select Role</label>

        <select onChange={(e) => setRole(e.target.value)}>
          <option value="buyer">Buyer</option>
          <option value="farmer">Farmer</option>
        </select>

        <button onClick={handleLogin}>
          Login
        </button>

      </div>

    </div>
  );
}

export default Login;