import { Link } from 'react-router-dom';
import '../styles/App.css'

function Header(props) {
    return (
        <header className='header'>
            <Link to='/'><img className='logo' src="https://i.imgur.com/3x948Iv.png" alt="elysium logo" /></Link>
            <Link to='/profile'>Profile</Link>
            <Link to='/books'>Books</Link>
            <Link to='/authors'>Authors</Link>
            <Link to='/login'>Login</Link>
        </header>
    )
}

export default Header;