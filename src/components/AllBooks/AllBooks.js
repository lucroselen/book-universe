import "./AllBooks.css";
import Book from "./Book";
import { useEffect, useState } from "react";
import * as mainService from "../../services/mainService";

const AllBooks = () => {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    mainService.getAll().then((res) => setBooks(res));
  }, []);
  let booksToShow = books.books;
  return (
    <div className="container fix row">
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
