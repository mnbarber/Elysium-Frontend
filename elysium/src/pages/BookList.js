import { useState, useEffect } from "react";

function BookList(props) {
    const [books, setBooks] = useState(null);

    useEffect(() => {
        const getBooksData = async () => {
            const response = await fetch(props.URL + "books");
            const data = await response.json();
            setBooks(data);
        };
        getBooksData();
    }, [props.URL]);

    const loaded = () => {
        return books.map((book, bookId) => (
            <div key={bookId}>
                <h1>{book.title}</h1>
                <img src={book.cover} alt='cover' />
                <h3>{book.author}</h3>
                <h3>{book.published}</h3>
            </div>
        ));
    };
    return books ? loaded() : <h1>loading... one moment</h1>;
};

export default BookList;