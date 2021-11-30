import "./Page404.css";
import { Link } from "react-router-dom";
const Page404 = () => {
  return (
    <div>
      <section id="fourOfour">
        <div className="fourOfour-container">
          <h1>404</h1>
          <h2>It seems that the page you are looking for doesn't exist!</h2>
          <Link to="/" className="btn-get-home">
            Back to the homepage
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Page404;
