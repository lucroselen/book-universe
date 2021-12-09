import "./Profile.css";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import * as authService from "../../services/authService";

const Profile = () => {
  const { user } = useContext(AuthContext);
  const [names, setNames] = useState([]);
  useEffect(() => {
    authService.getUserById(user.id).then((res) => setNames(res));
  }, [user.id]);

  return (
    <div className="container allign">
      <div className="profile card">
        <div className="profile-body">
          <div className="profile-bio">
            <div className="row">
              <div className="col-md-5 text-center">
                <img
                  className="img-thumbnail md-margin-bottom-10"
                  src="/reading-book.jpg"
                  alt="img"
                />
              </div>
              <div className="col-md-7">
                <strong className="h2">
                  {names.firstName} {names.lastName}
                </strong>
                <span>
                  <h3>FAVORITE BOOKS:</h3>
                </span>

                <hr />
                <p>
                  <strong>You have no favorite books yet.</strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
