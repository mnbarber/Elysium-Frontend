import { Link } from 'react-router-dom'
import '../styles/App.css';

function BookDetail(props) {
    return (
        <div className="book-detail-container">
            <div className="detail-title">
                {props.oneBook.title}
            </div>
            <img className="detail-img" src={props.oneBook.cover} alt="book cover" />
            <div className="detail-author">
                Author: {props.oneBook.author}
            </div>
            <div className="detail-published">
                Published: {props.oneBook.published}
            </div>
            <div className="delete-link-button">
                <Link to='/deletebook'>
                    <button className="delete-button">Delete Book</button>
                </Link>
            </div>
            <div className="edit-link-button">
                <Link to="/books/:id/edit">
                    <button className='edit-button'>Edit Book</button>
                </Link>
            </div>
        </div>
    )
}

export default BookDetail;