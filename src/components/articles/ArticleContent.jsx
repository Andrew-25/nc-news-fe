import { dateTime } from "../../utils/utils"

export default function ArticleContent(props) {
    const {article} = props
    
    return (
        <div className="article-content">
            <h2>{article.title}</h2>
            <div className="centered">
                <img src={article.article_img_url} alt="" />
            </div>
            <p className="article-author-date">by {article.author} at {dateTime(article.created_at)}</p>
            <p className="article-body">{article.body}</p>
            <div className="centered">
                <button>Edit</button>
            </div>
        </div>
    )
}