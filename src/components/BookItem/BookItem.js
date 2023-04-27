import BookCard from "../BookCard/BookCard.js";
import "../BookItem/BookItem.css";
import ReadDate from "../ReadDate/ReadDate.js";

import { useState } from "react";

const BookItem = ({ author, title, dateRead, pageCount }) => {
  const [newTitle, setNewTitle] = useState(title);

  const clickHandler = () => {
    setNewTitle("Actualizado!");
    console.log(newTitle);
  };

  return (
    <BookCard>
      <h2>{newTitle}</h2>
      <h3>{author}</h3>
      <div>
        <ReadDate date={dateRead} />
      </div>
      <p>{pageCount} páginas</p>
      <button onClick={clickHandler}>Cambiar Título</button>
    </BookCard>
  );
};

export default BookItem;
