import "./AllBooks.css";
import Book from "./Book";
import { useEffect, useState } from "react";
import * as mainService from "../../services/mainService";

const AllBooks = (props) => {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    if (props.mode === "getTop10") {
      mainService.getTop10().then((res) => setBooks(res));
    } else {
      mainService.getAll().then((res) => setBooks(res));
    }
  }, [props]);
  let booksToShow = books.books;
  return (
    <div className="container fix row">
      <strong className="h1 books">
        {props.mode === "getTop10" ? "Top 10 Books" : "All Books"}
      </strong>
      {booksToShow?.length > 0 ? (
        booksToShow.map((x) => <Book key={x._id} book={x} />)
      ) : (
        <strong className="h1 no-books">
          There are no books in the database!
        </strong>
      )}
    </div>
  );
};

export default AllBooks;
