import axios from 'axios';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const DeleteBook = (props) => {
    const navigate = useNavigate();

    const deleteBook = (e) => {
        e.preventDefault()
        axios.patch(`${props.URL}/books/${props.oneBook._id}`, {
            title: '',
            cover: '',
            author: '',
            published: ''
        })
        .then(book => {
            props.setOneBook(book.data)
        })
        .then(() => navigate('/books'))
        .catch(err => console.log(err))
    }

    return (
        <form className='delete-book'>
            <h2>Are you sure you want to delete this book?</h2>
            <button className='delete-button' onClick={deleteBook}>Yes</button>
            <Link to='/books'><button className='cancel-button'>Cancel</button></Link>
        </form>
    )
}

export default DeleteBook;