import { useEffect, useState } from "react";

const Home = (props) => {
    // const [booksArr, setBooksArr] = useState('[]');
    // const [random, setRandom] = useState('')

    // useEffect(() => {
    //     const getBooksData = async () => {
    //         const response = await fetch(props.URL + "books");
    //         const data = await response.json();
    //         setBooksArr(data);
            
    //     };
    //     getBooksData();  
    //     console.log(booksArr)
        
    // }, []);
    // if(booksArr) {
        // randomBook();
    // }

        // const randomIndex = Math.floor(Math.random() * props.books?.length);
        // const book = props.books ? props.books[randomIndex] : ''
        // console.log(book)

    return (
        <div className="homepage">
            {props.randomBook.title}
        </div>
    )
}

export default Home;