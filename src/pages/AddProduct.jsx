import { useState, useContext } from "react";
import { ProductContext } from "../ProductContext";
import "../App.css";

function AddProduct() {
  const [name, setName] = useState("");
  const { addProduct } = useContext(ProductContext);

  const handleAdd = () => {
    addProduct({ name });
    setName("");
    alert("Product Added!");
  };

  return (
    <div className="container">
      <h2>Add Product (Farmer)</h2>

      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Product Name"
      />

      <br /><br />

      <button className="button" onClick={handleAdd}>
        Add Product
      </button>
    </div>
  );
}

export default AddProduct;