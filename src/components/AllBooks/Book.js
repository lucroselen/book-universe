import { Link } from "react-router-dom";

const Book = (props) => {
  const book = props.book;
  let stars = "";
  if (book.rating >= 1 && book.rating <= 3) {
    stars = "⭐";
  } else if (book.rating >= 4 && book.rating <= 6) {
    stars = "⭐⭐";
  } else if (book.rating >= 7 && book.rating <= 9) {
    stars = "⭐⭐⭐";
  } else if (book.rating >= 10 && book.rating <= 12) {
    stars = "⭐⭐⭐⭐";
  } else if (book.rating >= 13) {
    stars = "⭐⭐⭐⭐⭐";
  }

  return (
    <div className="col-xs-12 col-md-6">
      <div className="product-content product-wrap clearfix">
        <div className="row">
          <div className="col-md-5 col-sm-12 col-xs-12">
            <div className="product-image">
              <img
                src={book.imgUrl}
                alt="220x258"
                height="258"
                width="220"
                className="img-responsive"
              />
            </div>
          </div>
          <div className="col-md-7 col-sm-12 col-xs-12">
            <div className="product-deatil">
              <h5 className="name">
                <Link to={`/details/${book._id}`}>
                  {book.bookName}{" "}
                  <span>
                    Genre: {book.genre} <br />
                  </span>
                  <span>
                    Rating:{" "}
                    <b
                      style={
                        book.rating === 0
                          ? { color: "black" }
                          : book.rating > 0
                          ? { color: "green" }
                          : { color: "red" }
                      }
                    >
                      {book.rating} {stars}
                    </b>
                  </span>
                </Link>
              </h5>
              <p className="author-container">
                <span>Author: {book.authorName}</span>
              </p>
              <span className="tag1" />
            </div>
            <div className="description">
              <p>{book.summary.substr(0, 65) + "..."} </p>
            </div>
            <div className="product-info smart-form">
              <div className="row">
                <div className="col-md-6 col-sm-6 col-xs-6">
                  <Link
                    to={`/details/${book._id}`}
                    className="btn btn-secondary"
                  >
                    Details
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Book;
