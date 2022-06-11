import { Link } from 'react-router-dom';
import '../styles/App.css'

function Header() {
    return (
        <header className='header'>
            <div className='header-links'>
                <Link to='/'><img className='logo' src="https://i.imgur.com/3x948Iv.png" alt="elysium logo" /></Link>
                ||
                <Link to='/books'>Books</Link>
                ||
                <Link to='/addbook'>Add a Book</Link>
                ||
                <Link to='/authors'>Authors</Link>
                || 
                <Link to='/addauthor'>Add an Author</Link>
            </div>
            <hr />
        </header>
    )
}

export default Header;