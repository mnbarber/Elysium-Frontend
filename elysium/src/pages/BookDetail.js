function BookDetail(props) {
    return (
        <div className="book-detail-container">
            <div className="detail-title">
                {props.oneBook.title}
            </div>
            <img className="detail-img" src={props.oneBook.cover} alt="book cover" />
            <div className="detail-author">
                Author: {props.oneBook.author}
            </div>
            <div className="detail-published">
                Published: {props.oneBook.published}
            </div>
        </div>
    )
}

export default BookDetail;