import { useContext } from "react";
import { ProductContext } from "../ProductContext";

import p1 from "../assets/products1.jpg";
import p2 from "../assets/products2.jpg";
import p3 from "../assets/products3.jpg";

function Products() {
  const { addToCart } = useContext(ProductContext);

  const products = [
    { name: "Organic Pickle", price: 120, img: p1 },
    { name: "Dry Fruits Mix", price: 250, img: p2 },
    { name: "Handmade Snacks", price: 150, img: p3 },
  ];

  return (
    <div className="section">
      <h2>Our Products</h2>

      <div className="products">
        {products.map((p, i) => (
          <div className="card" key={i}>
            <img src={p.img} alt={p.name} />
            <h3>{p.name}</h3>
            <p>₹ {p.price}</p>
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