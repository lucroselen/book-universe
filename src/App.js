import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { AuthContext } from "./contexts/AuthContext";
import { NotificationProvider } from "./contexts/NotificationContext";

import useLocalStorage from "./hooks/useLocalStorage";

import Login from "./components/Login/Login";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Register from "./components/Register/Register";
import Profile from "./components/Profile/Profile";
import AllBooks from "./components/AllBooks/AllBooks";
import AddBook from "./components/AddBook/AddBook";
import EditBook from "./components/EditBook/EditBook";
import Home from "./components/Home/Home";
import Details from "./components/Details/Details";
import Page404 from "./components/Page404/Page404";
import Logout from "./components/Logout/Logout";
import Delete from "./components/Delete/Delete";
import GuardedRoute from "./components/Common/GuardedRoute";
import LoggedGuardedRoute from "./components/Common/LoggedGuardedRoute";
import Notification from "./components/Common/Notification";

const initialAuthState = {
  id: "",
  user: "",
};
function App() {
  const [user, setUser] = useLocalStorage("user", initialAuthState);

  const login = (authData) => {
    setUser(authData);
  };
  const logout = () => {
    setUser(initialAuthState);
  };
  return (
    <AuthContext.Provider
      value={{ user, login, logout, isAuthenticated: user.id }}
    >
      <NotificationProvider>
        <Router>
          <Header />
          <Notification />
          <main id="main-content">
            <Routes>
              <Route element={<GuardedRoute />}>
                <Route path="/logout" element={<Logout />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/add" element={<AddBook />} />
                <Route path="/edit/:bookId" element={<EditBook />} />
                <Route path="/delete/:bookId" element={<Delete />} />
              </Route>

              <Route element={<LoggedGuardedRoute />}>
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
              </Route>

              <Route path="/all-books" element={<AllBooks />} />
              <Route path="/top-10" element={<AllBooks mode="getTop10" />} />
              <Route path="/details/:bookId" element={<Details />} />
              <Route path="/" element={<Home />} />
              <Route path="/404" element={<Page404 />} />
              <Route path="*" element={<Navigate replace to="/404" />} />
            </Routes>
          </main>
          <Footer />
        </Router>
      </NotificationProvider>
    </AuthContext.Provider>
  );
}

export default App;
