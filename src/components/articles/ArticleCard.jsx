import { useNavigate } from "react-router-dom"
import { dateTime } from "../../utils/utils"

export default function ArticleCard(props) {    
    let navigate = useNavigate()
    const handleClick = (id) => navigate(`/articles/${id}`)
    const {article} = props

    return (
        <li className="article-card" onClick={() => handleClick(article.article_id)}>
            <h3>{article.title}</h3>
            <p>by {article.author} at {dateTime(article.created_at)}</p>
            <p>Topic: {article.topic}</p>
            <div className="centered">
                <button>click for article</button>
            </div>
        </li>
    )
}