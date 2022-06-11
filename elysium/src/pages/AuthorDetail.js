function AuthorDetail(props) {
    return (
        <div className="author-detail-container">
            <div className="detail-name">
                {props.oneAuthor.name}
            </div>
            <img className="detail-img" src={props.oneAuthor.img} alt="author img" />
            <div className="detail-bio">
                {props.oneAuthor.bio}
            </div>
        </div>
    )
}

export default AuthorDetail;