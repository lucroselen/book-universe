import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <header>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <span className="app-navbar navbar-brand">Book Universe</span>

          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
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
      <p>Hello World!</p>
      <footer className="footer">
        <div>Book Universe 2021</div>
      </footer>
    </div>
  );
}

export default App;
