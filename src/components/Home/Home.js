import "./Home.css";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div>
      <section id="home">
        <div className="home-container">
          <h1>Welcome to Book Universe</h1>
          <h2>Here you can find your next favourite book!</h2>
          <Link to="/all-books" className="btn-get-started">
            Get Started
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
