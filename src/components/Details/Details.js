import "./Details.css";
import { Link } from "react-router-dom";
const Details = () => {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-5">
            <div className="project-info-box mt-0">
              <h5>
                <b>Book Summary</b>
              </h5>
              <p className="mb-0">
                Vivamus pellentesque, felis in aliquam ullamcorper, lorem tortor
                porttitor erat, hendrerit porta nunc tellus eu lectus. Ut vel
                imperdiet est. Pellentesque condimentum, dui et blandit laoreet,
                quam nisi tincidunt tortor.
              </p>
            </div>
            <div className="project-info-box">
              <p>
                <b>Book:</b> Inferno
              </p>
              <p>
                <b>Author:</b> James Doe
              </p>
              <p>
                <b>Date:</b> 14.02.2020
              </p>
              <p>
                <b>ISBN:</b> 921395123132
              </p>
              <p>
                <b>Genre:</b> Horror
              </p>
              <p>
                <b>Added by:</b> Martin Iliev
              </p>
              <p>
                <b>Current book rating: </b>4.32
              </p>
            </div>

            <div className="project-info-box mybuttons">
              <Link className="btn btn-dark" to="/edit">
                Edit
              </Link>
              <Link className="btn btn-danger" to="/delete">
                Delete
              </Link>
              <Link className="btn btn-success" to="/like">
                Like
              </Link>
              <Link className="btn btn-warning" to="/dislike">
                Dislike
              </Link>
            </div>
          </div>
          <div className="col-md-7">
            <img
              src="https://i4.helikon.bg/products/4316/17/174316/174316_b.jpg"
              alt="project-pic"
              height="770"
              width="600"
              className="rounded details-img"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
