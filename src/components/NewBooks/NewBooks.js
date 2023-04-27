import React from "react";

import "./NewBooks.css";
import BookForm from "../BookForm/BookForm";

const NewBooks = ({ onBookAdded }) => {
  const saveBookDataHandler = (enteredBookData) => {
    const bookData = {
      ...enteredBookData,
      id: Math.random().toString(),
    };
    onBookAdded(bookData);
  };
  return (
    <div className="new-book">
      <BookForm onBookDataSaved={saveBookDataHandler} />
    </div>
  );
};

export default NewBooks;
