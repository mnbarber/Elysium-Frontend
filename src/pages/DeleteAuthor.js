import axios from 'axios';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const DeleteAuthor = (props) => {
    const deleteAuthor = (e) => {
        e.preventDefault()
        axios.patch(`${props.URL}/authors/${props.oneAuthor._id}`, {
            name: '',
            img: '',
            bio: ''
        })
        .then(author => {
            props.setOneAuthor(author.data)
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