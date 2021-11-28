import "./Register.css";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <section className="fix">
      <div className="container py-5">
        <div className="row d-flex justify-content-center align-items-center">
          <div className="col-12 col-md-8 col-lg-6 col-xl-5">
            <div className="card bg-dark text-white card-border">
              <div className="card-body p-5 text-center">
                <div className="mb-md-5 mt-md-4 pb-4">
                  <h2 className="fw-bold mb-2 text-uppercase text-white">
                    Register
                  </h2>
                  <p className="text-white-50 mb-5">Let's get you on board!</p>

                  <div className="form-outline mb-4">
                    <input
                      type="email"
                      id="typeEmailX"
                      className="form-control form-control-lg"
                      placeholder="Your email"
                    />
                  </div>

                  <div className="form-outline mb-4">
                    <input
                      type="password"
                      id="typePasswordX"
                      className="form-control form-control-lg"
                      placeholder="Password"
                    />
                  </div>

                  <div className="form-outline mb-4">
                    <input
                      type="rePassword"
                      id="typeRePasswordX"
                      className="form-control form-control-lg"
                      placeholder="Repeat Password"
                    />
                  </div>

                  <button
                    className="btn btn-outline-light btn-lg px-5"
                    type="submit"
                  >
                    Register
                  </button>
                </div>

                <div>
                  <p className="mb-0 text-white">
                    Already have an account?{" "}
                    <Link to="/login" className="text-white-50 fw-bold">
                      Sign In
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
