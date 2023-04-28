import React, { useState } from "react";

const BookForm = ({ onBookDataSaved }) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAuthor, setEnteredAuthor] = useState("");
  const [enteredPageCount, setPageCount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  const [showForm, setShowForm] = useState(false);

  const changeTitleHandler = (event) => {
    setEnteredTitle(event.target.value);
  };
  const changeAuthorHandler = (event) => {
    setEnteredAuthor(event.target.value);
  };
  const changePageCountHandler = (event) => {
    setPageCount(event.target.value);
  };
  const changeDateHandler = (event) => {
    setEnteredDate(event.target.value);
  };
  const submitBookHandler = (event) => {
    event.preventDefault();
    const bookData = {
      title: enteredTitle,
      author: enteredAuthor,
      pageCount: enteredPageCount,
      date: Date(enteredDate),
    };
    setEnteredTitle("");
    setEnteredAuthor("");
    setPageCount("");
    setEnteredDate("");
    onBookDataSaved(bookData);
  };

  return (
    <>
      {showForm ? (
        <form onSubmit={submitBookHandler}>
          <div className="new-book-controls">
            <div className="new-book-control">
              <label>Título </label>
              <input
                type="text"
                onChange={changeTitleHandler}
                value={enteredTitle}
              ></input>
            </div>
            <div className="new-book-control">
              <label>Autor </label>
              <input
                type="text"
                onChange={changeAuthorHandler}
                value={enteredAuthor}
              ></input>
            </div>
            <div className="new-book-control">
              <label>Páginas </label>
              <input
                type="number"
                min="1"
                step="1"
                onChange={changePageCountHandler}
                value={enteredPageCount}
              ></input>
            </div>
            <div className="new-book-control">
              <label>¿Cuándo terminaste de leerlo? </label>
              <input
                type="date"
                min="2019-01-01"
                max="2022-12-31"
                onChange={changeDateHandler}
                value={enteredDate}
              ></input>
            </div>
          </div>
          <div className="new-book-actions">
            <button type="submit">Agregar lectura</button>
          </div>
          <div className="new-book-actions">
            <button type="button" onClick={() => setShowForm(false)}>
              Cancelar
            </button>
          </div>
        </form>
      ) : (
        <div className="new-book-actions">
          <button type="button" onClick={() => setShowForm(true)}>
            Agregar nueva lectura
          </button>
        </div>
      )}
    </>
  );
};

export default BookForm;
