import "../App.css";

function AdminDashboard() {
  return (
    <div className="container">
      <h2>🛠 Admin Dashboard</h2>

      <div className="card">
        <h3>Manage Users</h3>
        <p>Approve farmers and buyers.</p>
      </div>

      <div className="card">
        <h3>Transactions</h3>
        <p>Monitor platform activities.</p>
      </div>
    </div>
  );
}

export default AdminDashboard;