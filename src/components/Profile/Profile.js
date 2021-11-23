import "./Profile.css";

const Profile = () => {
  return (
    <div className="container allign">
      <div className="profile card">
        <div className="profile-body">
          <div className="profile-bio">
            <div className="row">
              <div className="col-md-5 text-center">
                <img
                  className="img-thumbnail md-margin-bottom-10"
                  src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
                  alt=""
                />
              </div>
              <div className="col-md-7">
                <h2>Cave Johnson</h2>
                <span>
                  <strong>Job:</strong> Web Developer
                </span>{" "}
                <span>
                  <strong>Position:</strong> Web Designer
                </span>
                <hr />
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse eget massa nec turpis congue bibendum. Integer
                  nulla felis, porta suscipit nulla et, dignissim commodo nunc.
                  Morbi a semper nulla.
                </p>
                <p>
                  Proin mauris odio, pharetra quis ligula non, vulputate
                  vehicula quam. Nunc in libero vitae nunc ultricies tincidunt
                  ut sed leo. Sed luctus dui ut congue consequat. Cras consequat
                  nisl ante, nec malesuada velit pellentesque ac. Pellentesque
                  nec arcu in ipsum iaculis convallis.
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
