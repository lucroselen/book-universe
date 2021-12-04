import "./Header.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";

const Header = () => {
  const { user } = useContext(AuthContext);

  let guestView = (
    <>
      <li className="nav-item">
        <Link className="nav-link" to="/login">
          Login
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/register">
          Register
        </Link>
      </li>
    </>
  );
  let userView = (
    <>
      <li className="nav-item">
        <Link className="nav-link" to="/profile">
          My Profile
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/add">
          Add a book
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/logout">
          Logout
        </Link>
      </li>
    </>
  );

  return (
    <header>
      <nav className="app-navbar navbar navbar-expand-lg navbar-dark bg-dark">
        <span className="navbar-brand">Book Universe</span>

        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item active">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/all-books">
                All Books
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/top-10">
                Top 10 books
              </Link>
            </li>
            {user.id ? userView : guestView}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
