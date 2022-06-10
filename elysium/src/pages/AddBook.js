import axios from 'axios';
import { useState } from 'react';

function AddBook(props) {
    const [title, setTitle] = useState('');
    const [cover, setCover] = useState('');
    const [author, setAuthor] = useState('');
    const [published, setPublished] = useState('');

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
            axios.post(`${URL}/newbook`, {
                title: title,
                cover: cover,
                author: author,
                published: published
            })
            .then(book => {
                props.setBook(book.data)
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
                <input type="text" onChange={titleInput} />
                <br />
                <h3>Cover Image:</h3>
                <input type="text" onChange={coverInput} />
                <br />
                <h3>Author:</h3>
                <input type="text" onChange={authorInput} />
                <br />
                <h3>Publish Date:</h3>
                <input type="text" onChange={publishedInput} />
                <br />
                <button className='submit-book' onClick={submitBook}>Submit</button>
            </form>
        </div>
    )
} 

export default AddBook;