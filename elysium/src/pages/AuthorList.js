import '../styles/App.css';
import { Link } from 'react-router-dom';

function AuthorList(props) {
    const loaded = () => {
        return props.authors.map((author, authorId) => (
            <div className='author-grid' onClick={() => props.clickedAuthor(author)} key={authorId}>
                <div className='author-card'>
                    <Link to={`/authors/${author._id}`}><img className="author-card-img" src={author.img} alt='cover' /></Link>
                    <p className='author-name'>{author.name}</p>
                </div>
            </div>
        ));
    };
    return props.authors ? loaded() : <h1>loading... one moment</h1>;
};

export default AuthorList;