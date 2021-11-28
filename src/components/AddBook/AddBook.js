import "./AddBook.css";

const AddBook = () => {
  return (
    <section id="addBook" className="intro fix">
      <div className="mask d-flex align-items-center h-100">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-9 col-xl-7">
              <div className="card">
                <div className="card-body p-4 p-md-5">
                  <h3 className="mb-4 pb-2">Add a book</h3>
                  <form action>
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
                            className="form-control"
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
                            placeholder="https://..."
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className=" mb-4">
                        <div className="form-outline">
                          <label className="form-label" htmlFor="isbn">
                            ISBN
                          </label>
                          <input
                            type="number"
                            id="isbn"
                            className="form-control"
                          />
                        </div>
                      </div>
                      <div className=" mb-4">
                        <div className="form-outline">
                          <label className="form-label" htmlFor="genre">
                            Genre
                          </label>
                          <select className="select col-md-12" multiple>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                            <option value="4">Four</option>
                            <option value="5">Five</option>
                            <option value="6">Six</option>
                            <option value="7">Seven</option>
                          </select>
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

export default AddBook;
