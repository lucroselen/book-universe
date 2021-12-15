import "./Login.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import * as authService from "../../services/authService";
import { useNotificationContext } from "../../contexts/NotificationContext";

const Login = () => {
  const { addNotification } = useNotificationContext();

  const { login } = useContext(AuthContext);
  let navigate = useNavigate();
  const submitHandler = (e) => {
    e.preventDefault();

    let formData = new FormData(e.currentTarget);

    let { email, password } = Object.fromEntries(formData);
    if (!email || !password) {
      addNotification("You must fill in both fields!", "alert-danger");
      return;
    }

    authService
      .login(email, password)
      .then((authData) => {
        login(authData);
        addNotification("Successful login!", "alert-success");
      })
      .then(() => navigate("/all-books"))
      .catch((error) => addNotification(error.error, "alert-danger"));
  };

  return (
    <form className="fix" onSubmit={submitHandler}>
      <div className="container py-5">
        <div className="row d-flex justify-content-center align-items-center ">
          <div className="col-12 col-md-8 col-lg-6 col-xl-5 ">
            <div className="card bg-dark card-border">
              <div className="card-body p-5 text-center">
                <div className="mb-md-5 mt-md-4 pb-4">
                  <h2 className="fw-bold mb-2 text-uppercase text-white">
                    Login
                  </h2>
                  <p className="mb-5 text-white-50">
                    Glad to see you back! Please log-in to your account.
                  </p>

                  <div className="form-outline mb-4">
                    <input
                      type="email"
                      name="email"
                      id="typeEmailX"
                      className="form-control form-control-lg"
                      placeholder="Your email"
                    />
                  </div>

                  <div className="form-outline mb-4">
                    <input
                      type="password"
                      name="password"
                      id="typePasswordX"
                      className="form-control form-control-lg"
                      placeholder="Password"
                    />
                  </div>

                  <button
                    className="btn btn-outline-light btn-lg px-5"
                    type="submit"
                  >
                    Login
                  </button>
                </div>

                <div>
                  <p className="mb-0 text-white">
                    Don't have an account?{" "}
                    <Link to="/register" className="text-white-50 fw-bold">
                      Sign Up
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Login;
