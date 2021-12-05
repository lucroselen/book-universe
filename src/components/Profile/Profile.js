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
                  src="/reading-book.jpg"
                  alt="img"
                />
              </div>
              <div className="col-md-7">
                <strong className="h2">Cave Johnson</strong>
                <span>
                  <h3>FAVOURITE BOOKS:</h3>
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
