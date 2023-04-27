import Books from "./components/Books/Books.js";
import NewBooks from "./components/NewBooks/NewBooks.js";

import { useState } from "react";

const DUMMY_BOOKS = [
  {
    id: "1",
    title: "100 años de soledad",
    author: "Gabriel García Marquez",
    dateRead: new Date(2021, 8, 12),
    pageCount: 410,
  },
  {
    id: "2",
    title: "Todos los fuegos el fuego",
    author: "Julio Cortazar",
    dateRead: new Date(2020, 6, 11),
    pageCount: 197,
  },
  {
    id: "3",
    title: "Asesinato en el Orient Express",
    author: "Agatha Christie",
    dateRead: new Date(2021, 5, 9),
    pageCount: 256,
  },
  {
    id: "4",
    title: "Las dos torres",
    author: "J.R.R Tolkien",
    dateRead: new Date(2020, 3, 22),
    pageCount: 352,
  },
];

const App = () => {
  const [books, setBooks] = useState(DUMMY_BOOKS);

  const addedBookHandler = (bookData) => {
    console.log("In App.js");
    console.log(bookData);
    setBooks([...books, bookData]);
  };

  return (
    <div>
      <NewBooks onBookAdded={addedBookHandler} />
      <h2>"Books-Champion-App"</h2>
      <Books books={books} />
    </div>
  );
};

export default App;
