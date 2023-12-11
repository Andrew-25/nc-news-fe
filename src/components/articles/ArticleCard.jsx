import { useNavigate } from "react-router-dom"

export default function ArticleCard(props) {    
    let navigate = useNavigate()

    function handleClick(id) {
        navigate(`/articles/${id}`)
    }
    
    return (
        <li className="article-card">
            <h3>{props.article.title}</h3>
            <p>by {props.article.author}</p>
            <p>Topic: {props.article.topic}</p>
            <div className="centered-button">
                <button onClick={() => handleClick(props.article.article_id)} className="read-article">Read</button>
            </div>
        </li>
    )
}