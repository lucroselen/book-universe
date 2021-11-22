import "./Header.css";
const Header = () => {
  return (
    <header>
      <nav className="app-navbar navbar navbar-expand-lg navbar-dark bg-dark">
        <span className="navbar-brand">Book Universe</span>

        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item active">
              <a className="nav-link" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                Top 10 books
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                Worst ranked books
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                My Profile
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                Login
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                Register
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                Logout
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
