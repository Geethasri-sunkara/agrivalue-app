import "../App.css";

function FarmerDashboard() {
  return (
    <div className="container">
      <h2>👨‍🌾 Farmer Dashboard</h2>

      <div className="card">
        <h3>Add Product</h3>
        <p>Upload value-added products.</p>
        <button className="button">Add Product</button>
      </div>

      <div className="card">
        <h3>Inventory</h3>
        <p>Manage stock and availability.</p>
      </div>

      <div className="card">
        <h3>Orders</h3>
        <p>Track buyer orders and deliveries.</p>
      </div>
    </div>
  );
}

export default FarmerDashboard;