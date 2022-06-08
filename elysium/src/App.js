import Header from "./components/Header";
import BookList from "./pages/BookList";
import Home from "./pages/Home";
import { Route, Routes } from 'react-router-dom';

function App() {
  const URL = "https://elysiumbackendapi.herokuapp.com/";

  return (
    <div class="app">
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/books' element={<BookList URL={URL} />} />
      </Routes>
    </div>
  );
}

export default App;
