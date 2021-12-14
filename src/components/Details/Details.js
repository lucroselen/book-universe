import "./Details.css";
import { Link, useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import * as mainService from "../../services/mainService";
import starsGenerator from "../../Helpers/starsGenerator";

const Details = () => {
  const { user } = useContext(AuthContext);
  const [book, setBook] = useState([]);
  const [voted, setVoted] = useState(false);
  const [isOwnedBy, setIsOwnedBy] = useState(false);
  const [isInFavorites, setIsInFavorites] = useState(false);
  const [isLoading, setLoading] = useState(true);
  const { bookId } = useParams();
  useEffect(() => {
    mainService.getOne(bookId).then((res) => {
      setIsInFavorites(res.isInFavorites);
      setBook(res.book);
      setVoted(res.voted);
      setIsOwnedBy(res.isOwnedBy);
      setLoading(false);
    });
  }, [bookId]);

  if (isLoading) {
    return (
      <div className="container">
        <strong className="h1 loading">Loading...</strong>
      </div>
    );
  }

  const voteOnClick = (e) => {
    e.preventDefault();
    let mode = Object.values(e.target)[1].mode;
    if (mode === "up") {
      mainService.voteUp(bookId).then(() => {
        setBook((state) => ({ ...state, rating: state.rating + 1 }));
        setVoted(true);
      });
    } else if (mode === "down") {
      mainService.voteDown(bookId).then(() => {
        setBook((state) => ({ ...state, rating: state.rating - 1 }));
        setVoted(true);
      });
    }
  };

  const favoriteOnClick = (e) => {
    e.preventDefault();
    mainService.favorite(bookId).then(() => {
      setIsInFavorites(true);
    });
  };

  let stars = starsGenerator(book.rating);

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-5">
            <div className="project-info-box mt-0">
              <h5>
                <b>Book Summary</b>
              </h5>
              <p className="mb-0">{book.summary}</p>
            </div>
            <div className="project-info-box">
              <p>
                <b>Book:</b> {book.bookName}
              </p>
              <p>
                <b>Author:</b> {book.authorName}
              </p>
              <p>
                <b>Date:</b> {book.date.substr(0, 10)}
              </p>
              <p>
                <b>ISBN:</b> {book.isbn}
              </p>
              <p>
                <b>Genre:</b> {book.genre}
              </p>
              <p>
                <b>Added by:</b> {book.creator.firstName}{" "}
                {book.creator.lastName}
              </p>
              <p>
                <b>Current book rating: </b>
                <b
                  style={
                    book.rating === 0
                      ? { color: "black" }
                      : book.rating > 0
                      ? { color: "orange" }
                      : { color: "red" }
                  }
                >
                  {book.rating} {stars}
                </b>
              </p>
            </div>
            {voted ? (
              <div className="project-info-box mybuttons">
                <h2 style={{ color: "black" }}>
                  Thank you for voting for this book!
                </h2>
              </div>
            ) : null}
            {user.id ? (
              <>
                {isOwnedBy ? (
                  <div className="project-info-box mybuttons">
                    {" "}
                    <Link className="btn btn-dark" to={`/edit/${book._id}`}>
                      Edit
                    </Link>
                    <Link className="btn btn-danger" to={`/delete/${book._id}`}>
                      Delete
                    </Link>
                  </div>
                ) : null}
                {!voted && !isOwnedBy ? (
                  <div className="project-info-box mybuttons">
                    <button
                      className="btn btn-success"
                      onClick={voteOnClick}
                      mode="up"
                    >
                      Like
                    </button>
                    <button
                      className="btn btn-warning"
                      onClick={voteOnClick}
                      mode="down"
                    >
                      Dislike
                    </button>
                  </div>
                ) : null}
              </>
            ) : (
              <div className="project-info-box mybuttons">
                <h2>
                  <Link style={{ textDecoration: "none" }} to="/login">
                    Log-in
                  </Link>
                  or
                  <Link style={{ textDecoration: "none" }} to="/register">
                    register
                  </Link>
                  to edit or rate this book!
                </h2>
              </div>
            )}
            {!isOwnedBy && user.id ? (
              !isInFavorites ? (
                <div className="project-info-box mybuttons">
                  <button className="btn btn-primary" onClick={favoriteOnClick}>
                    Add to Favorites
                  </button>
                </div>
              ) : (
                <div className="project-info-box mybuttons">
                  <h2 style={{ color: "black" }}>
                    Book has been added to your favorites!
                  </h2>
                </div>
              )
            ) : null}
          </div>
          <div className="col-md-7">
            <img
              src={book.imgUrl}
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
