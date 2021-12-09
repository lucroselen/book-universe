import "./Profile.css";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import * as authService from "../../services/authService";

const Profile = () => {
  const { user } = useContext(AuthContext);
  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    authService.getUserById(user.id).then((res) => {
      setUserData(res);
      setTimeout(() => {
        setLoading(false);
      }, 400);
    });
  }, [user.id]);
  const favoritesToShow = userData.favorites
    .map((x) => [x.bookName, x.authorName].join(" by "))
    .join(", ");

  if (loading) {
    return (
      <div className="container">
        <strong className="h1 loading">Loading...</strong>
      </div>
    );
  }
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
                  {userData.firstName} {userData.lastName}
                </strong>
                <span>
                  <h3>FAVORITE BOOKS:</h3>
                </span>

                <hr />
                <p>
                  <strong>{favoritesToShow}</strong>
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
