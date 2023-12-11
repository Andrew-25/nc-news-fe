export default function ArticleContent(props) {
    const {article} = props
    return (
        <div className="article-content">
            <h2>{article.title}</h2>
            <div className="centered-button">
                <img src={article.article_img_url} alt="" width='50%' />
            </div>
            <p>{article.body}</p>
            <div className="centered-button">
                <button>Patch article</button>
            </div>
        </div>
    )
}