import "./EditBook.css";
import * as mainService from "../../services/mainService";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

const EditBook = () => {
  let navigate = useNavigate();
  const [book, setBook] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const { bookId } = useParams();
  useEffect(() => {
    mainService.getOne(bookId).then((res) => {
      setBook(res);
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
  let bookData = book.book;

  let creator = bookData.creator;
  const submitHandler = (e) => {
    e.preventDefault();

    let formData = new FormData(e.currentTarget);

    let { bookName, authorName, imgUrl, isbn, date, summary, genre } =
      Object.fromEntries(formData);
    mainService
      .edit(
        bookId,
        bookName,
        authorName,
        imgUrl,
        isbn,
        date,
        summary,
        genre,
        creator
      )
      .then(() => {
        navigate(`/details/${bookId}`);
      });
  };
  return (
    <section id="editBook" className="intro fix">
      <div className="mask d-flex align-items-center h-100">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-9 col-xl-7">
              <div className="card">
                <div className="card-body p-4 p-md-5">
                  <h3 className="mb-4 pb-2">Edit a book</h3>
                  <form
                    action={`/edit/${bookId}`}
                    method="POST"
                    onSubmit={submitHandler}
                  >
                    <div className="row">
                      <div className="col-md-6 mb-4">
                        <div className="form-outline">
                          <label className="form-label" htmlFor="bookName">
                            Book's name
                          </label>
                          <input
                            type="text"
                            id="bookName"
                            className="form-control"
                            name="bookName"
                            defaultValue={bookData.bookName}
                          />
                        </div>
                      </div>
                      <div className="col-md-6 mb-4">
                        <div className="form-outline">
                          <label className="form-label" htmlFor="authorName">
                            Author's name
                          </label>
                          <input
                            type="text"
                            id="authorName"
                            name="authorName"
                            className="form-control"
                            defaultValue={bookData.authorName}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="mb-4">
                        <div className="form-outline">
                          <label htmlFor="imgUrl" className="form-label">
                            Book's cover image
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="imgUrl"
                            name="imgUrl"
                            placeholder="https://..."
                            defaultValue={bookData.imgUrl}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="mb-4">
                        <div className="form-outline">
                          <label className="form-label" htmlFor="isbn">
                            ISBN
                          </label>
                          <input
                            type="number"
                            id="isbn"
                            name="isbn"
                            className="form-control"
                            defaultValue={bookData.isbn}
                          />
                        </div>
                      </div>
                      <div className="mb-4">
                        <div className="form-outline">
                          <label className="form-label" htmlFor="date">
                            Date
                          </label>
                          <input
                            type="date"
                            id="date"
                            name="date"
                            className="form-control"
                            defaultValue={bookData.date.substr(0, 10)}
                          />
                        </div>
                      </div>
                      <div className="mb-4">
                        <label className="form-label" htmlFor="summary">
                          Summary
                        </label>
                        <textarea
                          className="form-control"
                          id="summary"
                          rows="3"
                          name="summary"
                          defaultValue={bookData.summary}
                        ></textarea>
                      </div>
                    </div>
                    <div className="row">
                      <div className="mb-4">
                        <div className="form-outline">
                          <label htmlFor="genre" className="form-label">
                            Genre
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="genre"
                            name="genre"
                            placeholder="Example: Sci-fi"
                            defaultValue={bookData.genre}
                          />
                        </div>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-12">
                        <div className="mt-4">
                          <input
                            className="btn btn-warning btn-lg"
                            type="submit"
                            defaultValue="Submit"
                          />
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EditBook;
