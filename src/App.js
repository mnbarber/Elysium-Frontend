import Header from "./components/Header";
import BookList from "./pages/BookList";
import BookDetail from "./pages/BookDetail";
import AddAuthor from "./pages/AddAuthor";
import AuthorDetail from "./pages/AuthorDetail";
import AuthorList from "./pages/AuthorList";
import Home from "./pages/Home";
import AddBook from "./pages/AddBook";
import DeleteBook from "./pages/DeleteBook";
import DeleteAuthor from "./pages/DeleteAuthor";
import { Route, Routes } from 'react-router-dom';
import { useState, useEffect } from 'react';

function App() {
    const URL = "https://elysiumbackendapi.herokuapp.com/";
    const [books, setBooks] = useState(null);
    const [oneBook, setOneBook] = useState('');
    const [authors, setAuthors] = useState(null);
    const [oneAuthor, setOneAuthor] = useState('');
    const [randomBook, setRandomBook] = useState('');

    useEffect(() => {
      if(!books) {
        getBooksData();
      }
      if(!authors) {
        getAuthorsData();
      } 
    }, []);

    useEffect(() => {
      if(!randomBook) {
        findRandomBook();
      }   
    }, [books]);

    function findRandomBook() {
      const randomIndex = Math.floor(Math.random() * books?.length);
      const book = books ? books[randomIndex] : ''
      setRandomBook(book);
      console.log(book)
    }

    function clickedBook(bookinfo) {
      setOneBook(bookinfo)
    }
    const getBooksData = async () => {
      const response = await fetch(URL + "books");
      const data = await response.json();
      setBooks(data);
  };
    const getAuthorsData = async () => {
      const response = await fetch(URL + "authors");
      const data = await response.json();
      setAuthors(data);
    };

  function clickedAuthor(authorinfo) {
    setOneAuthor(authorinfo)
  }
  

  return (
    <div className="app">
      <Header />
      <Routes>
        <Route exact path='/' element={<Home URL={URL} books={books} randomBook={randomBook} />} />
        <Route path='/books' element={<BookList URL={URL} books={books} clickedBook={clickedBook} />} />
        <Route path='/addbook' element={<AddBook URL={URL} books={books} />} />
        <Route path='/books/:id' element={<BookDetail books={books} oneBook={oneBook} />} />
        <Route path='/authors' element={<AuthorList URL={URL} authors={authors} clickedAuthor={clickedAuthor} />} />
        <Route path='/addauthor' element={<AddAuthor URL={URL} authors={authors} />} />
        <Route path='/authors/:id' element={<AuthorDetail URL={URL} oneAuthor={oneAuthor} />} />
        <Route path='/deletebook' element={<DeleteBook URL={URL} oneBook={oneBook} setOneBook={setOneBook} />} />
        <Route path='/deleteauthor' element={<DeleteAuthor URL={URL} oneAuthor={oneAuthor} setOneAuthor={setOneAuthor} />} />
      </Routes>
    </div>
  );
}

export default App;
