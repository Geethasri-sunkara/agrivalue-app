import { useContext } from "react";
import { ProductContext } from "../ProductContext";
import "../App.css";

import p1 from "../assets/products1.jpg";
import p2 from "../assets/products2.jpg";
import p3 from "../assets/products3.jpg";

function Products() {
  const { addToCart } = useContext(ProductContext);

  const products = [
    { name: "Organic Pickle", img: p1 },
    { name: "Dry Fruits Mix", img: p2 },
    { name: "Handmade Snacks", img: p3 },
  ];

  return (
    <div className="container">
      <h2>🛒 Products</h2>

      <div className="products">
        {products.map((p, index) => (
          <div className="card" key={index}>
            <img src={p.img} alt={p.name} />
            <h3>{p.name}</h3>
            <button onClick={() => addToCart(p)}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;