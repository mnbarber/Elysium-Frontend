import axios from 'axios';
import '../styles/App.css';
import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

function EditBook(props) {
    const [title, setTitle] = useState('');
    const [cover, setCover] = useState('');
    const [author, setAuthor] = useState('');
    const [published, setPublished] = useState('');

    const navigate = useNavigate();

    const titleInput = (e) => {
        setTitle(e.target.value)
    }
    const coverInput = (e) => {
        setCover(e.target.value)
    }
    const authorInput = (e) => {
        setAuthor(e.target.value)
    }
    const publishedInput = (e) => {
        setPublished(e.target.value)
    }

    const submitBook = (e) => {
        e.preventDefault()
        if(title) {
            axios.patch(`${props.URL}/books/${props.oneBook._id}/edit`, {
                title,
                cover,
                author,
                published
            })
            .then(book => {
                props.setBooks(book.data)
                navigate('/books')
            })
            .catch(err => console.log(err))
        } else {
            return alert('Please enter a valid title!')
        }
    }

    return (
        <div className='add-book'>
            <form className='add-book-form'>
                <h3>Title:</h3>
                <input type="text" name={props.oneBook.title} value={props.oneBook.title} onChange={titleInput} />
                <br />
                <h3>Cover Image:</h3>
                <input type="text" name={props.oneBook.cover} value={props.oneBook.cover} onChange={coverInput} />
                <br />
                <h3>Author:</h3>
                <input type="text" name={props.oneBook.author} value={props.oneBook.author} onChange={authorInput} />
                <br />
                <h3>Publish Date:</h3>
                <input type="text" name={props.oneBook.published} value={props.oneBook.published} onChange={publishedInput} />
                <br />
                <button className='edit-book' onClick={submitBook}>Submit</button>
                <Link to='/books'><button className='cancel-button'>Cancel</button></Link>
            </form>
        </div>
    )
} 

export default EditBook;