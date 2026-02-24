import { useContext } from "react";
import { ProductContext } from "../ProductContext";
import "../App.css";

function Cart() {
  const { cart } = useContext(ProductContext);

  return (
    <div className="container">
      <h2>🛒 Cart</h2>

      {cart.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        cart.map((item, index) => (
          <div className="card" key={index}>
            <h3>{item.name}</h3>
          </div>
        ))
      )}
    </div>
  );
}

export default Cart;