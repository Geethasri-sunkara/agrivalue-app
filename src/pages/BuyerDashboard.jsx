import "../App.css";

function BuyerDashboard() {
  return (
    <div className="container">
      <h2>🛒 Buyer Dashboard</h2>

      <div className="card">
        <h3>Browse Products</h3>
        <p>Explore farmer products.</p>
      </div>

      <div className="card">
        <h3>Place Orders</h3>
        <button className="button">Order Now</button>
      </div>
    </div>
  );
}

export default BuyerDashboard;