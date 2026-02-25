import hero from "../assets/hero.jpg";
import "../App.css";

function Home() {
  return (
    <div>

      {/* HERO */}
      <div
        className="hero"
        style={{ backgroundImage: `url(${hero})` }}
      >
        <h1>Empowering Farmers Through Technology 🌾</h1>
      </div>

      {/* ABOUT */}
      <div className="section">
        <h2>About Platform</h2>
        <p>
          AgriValue Connect helps farmers convert crops into value-added
          products and sell directly to buyers through a digital marketplace.
        </p>
      </div>

      {/* FEATURES */}
      <div className="features">

        <div className="feature-card">
          <h3>👨‍🌾 Farmers</h3>
          <p>Add products and manage inventory easily.</p>
        </div>

        <div className="feature-card">
          <h3>🛒 Buyers</h3>
          <p>Browse products and purchase directly.</p>
        </div>

        <div className="feature-card">
          <h3>📊 Admin</h3>
          <p>Manage users and monitor platform activity.</p>
        </div>

      </div>

    </div>
  );
}

export default Home;