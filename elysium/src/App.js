import Header from "./components/Header";
import BookList from "./pages/BookList";
import BookDetail from "./pages/BookDetail";
import Home from "./pages/Home";
import AddBook from "./pages/AddBook";
import { Route, Routes } from 'react-router-dom';
import { useState, useEffect } from 'react';

function App() {
  const URL = "https://elysiumbackendapi.herokuapp.com/books";
  const [books, setBooks] = useState(null);
  const [oneBook, setOneBook] = useState('');

    useEffect(() => {
        const getBooksData = async () => {
            const response = await fetch(URL);
            const data = await response.json();
            console.log(data)
            setBooks(data);
        };
        getBooksData();
    }, [URL]);

    function clickedBook(bookinfo) {
      setOneBook(bookinfo)
    }

  return (
    <div class="app">
      <Header />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/books' element={<BookList URL={URL} books={books} clickedBook={clickedBook} />} />
        <Route path='/addbook' element={<AddBook URL={URL} books={books} />} />
        <Route path='/books/:id' element={<BookDetail books={books} oneBook={oneBook} />} />
      </Routes>
    </div>
  );
}

export default App;
