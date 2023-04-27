import "../Books/Books.css";
import BookItem from "../BookItem/BookItem.js";
import BooksFilter from "../Filter/BooksFilter";
import { useState } from "react";

const Books = ({ books }) => {
  const [currentValue, setCurrentValue] = useState("2021");

  const saveSelectedHandler = (selected) => {
    setCurrentValue(selected);
  };

  const booksList = books
    .filter((book) => book.dateRead.getFullYear().toString() === currentValue)
    .map((book) => (
      <BookItem
        key={book.id}
        title={book.title}
        author={book.author}
        dateRead={book.dateRead}
        pageCount={book.pageCount}
      />
    ));
  return (
    <div>
      <BooksFilter onSelectedSave={saveSelectedHandler} props={currentValue} />
      <div className="books-container">
        {booksList.length === 0 ? (
          <p>No leíste ningún libro en {currentValue}</p>
        ) : (
          booksList
        )}
      </div>
    </div>
  );
};

export default Books;
