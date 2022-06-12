import axios from 'axios';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const DeleteAuthor = (props) => {
    const navigate = useNavigate();

    const deleteAuthor = (e) => {
        e.preventDefault()
        console.log('please god')
        axios.delete(`${props.URL}/authors/${props.oneAuthor._id}`)
        .then(deletedAuthor => {
            const authors = props.authors.filter(author => author._id !== deletedAuthor.data._id)
            props.setAuthors(authors)
            navigate('/authors')
        })
        .catch(err => console.log(err))
    }

    return (
        <form className='delete-author'>
            <h2>Are you sure you want to delete this author?</h2>
            <button className='delete-button' onClick={deleteAuthor}>Yes</button>
            <Link to='/authors'><button className='cancel-button'>Cancel</button></Link>
        </form>
    )
}

export default DeleteAuthor;