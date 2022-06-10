import Header from "./components/Header";
import BookList from "./pages/BookList";
import BookDetail from "./pages/BookDetail";
import Home from "./pages/Home";
import AddBook from "./pages/AddBook";
import { Route, Routes } from 'react-router-dom';
import { useState, useEffect } from 'react';

function App() {
    const URL = "https://elysiumbackendapi.herokuapp.com/";
    const [books, setBooks] = useState(null);
    const [oneBook, setOneBook] = useState('');
    const [authors, setAuthors] = useState(null);
    const [oneAuthor, setOneAuthor] = useState('');

    useEffect(() => {
        const getBooksData = async () => {
            const response = await fetch(URL + "books");
            const data = await response.json();
            setBooks(data);
        };
        getBooksData();
    }, [URL + "books"]);

    function clickedBook(bookinfo) {
      setOneBook(bookinfo)
    }

    useEffect(() => {
        const getAuthorsData = async () => {
            const response = await fetch(URL + "authors");
            const data = await response.json();
            setAuthors(data);
        };
        getAuthorsData();
    }, [URL + "authors"]);

  function clickedAuthor(authorinfo) {
    setOneAuthor(authorinfo)
  }

  return (
    <div class="app">
      <Header />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/books' element={<BookList URL={URL} books={books} clickedBook={clickedBook} />} />
        <Route path='/addbook' element={<AddBook URL={URL} books={books} />} />
        <Route path='/books/:id' element={<BookDetail books={books} oneBook={oneBook} />} />
        <Route path='/authors' element={<AuthorList URL={URL} authors={authors} clickedAuthor={clickedAuthor} />} />
        <Route path='/addauthor' element={<AddAuthor URL={URL} authors={authors} />} />
        <Route path='/authors/:id' element={<AuthorDetail URL={URL} oneAuthor={oneAuthor} />} />
      </Routes>
    </div>
  );
}

export default App;
