import hero from "../assets/hero.jpg";
import "../App.css";

function Home() {
  return (
    <div>

      {/* HERO SECTION */}
      <div
        className="hero"
        style={{ backgroundImage: `url(${hero})` }}
      >
        🌾 AgriValue Connect
      </div>

      {/* ABOUT */}
      <div className="container">
        <h2>About Our Platform</h2>
        <p>
          AgriValue Connect helps farmers convert crops into value-added
          products like pickles, snacks, and organic foods. Our platform
          connects farmers directly with buyers and supports rural
          entrepreneurship using technology.
        </p>
      </div>

      {/* FEATURES */}
      <div className="container">
        <h2>🚀 Key Features</h2>

        <div className="products">

          <div className="card">
            <h3>👨‍🌾 Farmer Support</h3>
            <p>
              Farmers can add products, manage inventory, and sell directly.
            </p>
          </div>

          <div className="card">
            <h3>🛒 Buyer Marketplace</h3>
            <p>
              Buyers can explore products, add to cart, and place orders.
            </p>
          </div>

          <div className="card">
            <h3>🛠 Admin Management</h3>
            <p>
              Admin manages users, products, and platform activities.
            </p>
          </div>

        </div>
      </div>

      {/* MISSION SECTION */}
      <div className="container">
        <h2>🌱 Our Mission</h2>
        <p>
          To empower farmers by promoting value-added agriculture and enabling
          global market access through digital technology.
        </p>
      </div>

    </div>
  );
}

export default Home;