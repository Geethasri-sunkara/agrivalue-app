import { useContext } from "react";
import { ProductContext } from "../ProductContext";

function Cart() {
  const { cart, removeFromCart } = useContext(ProductContext);

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="container">
      <h2>🛒 Cart</h2>

      {cart.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        <>
          {cart.map((item, index) => (
            <div className="card" key={index}>
              <h3>{item.name}</h3>
              <p>₹ {item.price}</p>
              <button onClick={() => removeFromCart(index)}>
                Remove
              </button>
            </div>
          ))}

          <h3>Total: ₹ {total}</h3>
        </>
      )}
    </div>
  );
}

export default Cart;