export default function ArticleCard(props) {    
    return (
        <li className="article-card">
            <h3>{props.article.title}</h3>
            <p>by {props.article.author}</p>
            <p>Topic: {props.article.topic}</p>
            <div className="centered-button">
                <button className="read-article">Read</button>
            </div>
        </li>
    )
}