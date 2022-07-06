import '../styles/App.css';

const Home = (props) => {
    return (
        <div className="homepage-container">
            <p className="message">WHAT TO READ NEXT:</p>
            <br />
            <div className="home-title">{props.randomBook.title}</div>
            <img className="next-book-img" src={props.randomBook.cover} alt="book-cover" />
        </div>
    )
}

export default Home;