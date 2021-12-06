import "./Details.css";
import { Link, useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import * as mainService from "../../services/mainService";

const Details = () => {
  const { user } = useContext(AuthContext);
  const [book, setBook] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const { bookId } = useParams();

  useEffect(() => {
    mainService.getOne(bookId).then((res) => {
      setBook(res);
      setLoading(false);
    });
  }, [bookId]);
  let bookData = book.book;

  if (isLoading) {
    return (
      <div className="container">
        <strong className="h1 loading">Loading...</strong>
      </div>
    );
  }
  let stars = "";
  if (bookData.rating >= 1 && bookData.rating <= 3) {
    stars = "⭐";
  } else if (bookData.rating >= 4 && bookData.rating <= 6) {
    stars = "⭐⭐";
  } else if (bookData.rating >= 7 && bookData.rating <= 9) {
    stars = "⭐⭐⭐";
  } else if (bookData.rating >= 10 && bookData.rating <= 12) {
    stars = "⭐⭐⭐⭐";
  } else if (bookData.rating >= 13) {
    stars = "⭐⭐⭐⭐⭐";
  }
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-5">
            <div className="project-info-box mt-0">
              <h5>
                <b>Book Summary</b>
              </h5>
              <p className="mb-0">{bookData.summary}</p>
            </div>
            <div className="project-info-box">
              <p>
                <b>Book:</b> {bookData.bookName}
              </p>
              <p>
                <b>Author:</b> {bookData.authorName}
              </p>
              <p>
                <b>Date:</b> {bookData.date.substr(0, 10)}
              </p>
              <p>
                <b>ISBN:</b> {bookData.isbn}
              </p>
              <p>
                <b>Genre:</b> {bookData.genre}
              </p>
              <p>
                <b>Added by:</b> {bookData.creator.firstName}{" "}
                {bookData.creator.lastName}
              </p>
              <p>
                <b>Current book rating: </b>
                {bookData.rating} {stars}
              </p>
            </div>
            {user.id ? (
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
                <Link className="btn btn-primary" to="/favorite">
                  Favorite
                </Link>
              </div>
            ) : (
              <div className="project-info-box mybuttons">
                <h2>Log-in to edit or rate this book!</h2>
              </div>
            )}
          </div>
          <div className="col-md-7">
            <img
              src={bookData.imgUrl}
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
