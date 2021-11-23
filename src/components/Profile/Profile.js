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
                  src="https://i.pinimg.com/736x/d4/08/1c/d4081ca74e3ed92452967846d6684653.jpg"
                  alt=""
                />
              </div>
              <div className="col-md-7">
                <h2>Omni-Man Iliev</h2>
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
