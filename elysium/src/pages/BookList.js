import '../styles/App.css';
import { Link } from 'react-router-dom';

function BookList(props) {
    const loaded = () => {
        return props.books.map((book, bookId) => (
            <div className='book-grid' onClick={() => props.clickedBook(book)} key={bookId}>
                <Link to={`/books/${book._id}`}><img className="book-card-img" src={book.cover} alt='cover' /></Link>
            </div>
        ));
    };
    return props.books ? loaded() : <h1>loading... one moment</h1>;
};

export default BookList;