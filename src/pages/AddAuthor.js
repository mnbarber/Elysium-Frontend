import axios from 'axios';
import { useState } from 'react';

function AddAuthor(props) {
    const [name, setName] = useState('');
    const [img, setImg] = useState('');
    const [bio, setBio] = useState('');

    const nameInput = (e) => {
        setName(e.target.value)
    }
    const imgInput = (e) => {
        setImg(e.target.value)
    }
    const bioInput = (e) => {
        setBio(e.target.value)
    }

    const submitAuthor = (e) => {
        e.preventDefault()
        if(name) {
            axios.post(`${props.URL}/newauthor`, {
                name,
                img,
                bio,
            })
            .then(author => {
                props.setAuthor(author.data)
            })
            .catch(err => console.log(err))
        } else {
            return alert('Please enter a valid name!')
        }
    }

    return (
        <div className='add-author'>
            <form className='add-author-form'>
                <h3>Name:</h3>
                <input type="text" onChange={nameInput} />
                <br />
                <h3>Image:</h3>
                <input type="text" onChange={imgInput} />
                <br />
                <h3>Bio:</h3>
                <input type="text" onChange={bioInput} />
                <br />
                <button className='submit-author' onClick={submitAuthor}>Submit</button>
            </form>
        </div>
    )
} 

export default AddAuthor;