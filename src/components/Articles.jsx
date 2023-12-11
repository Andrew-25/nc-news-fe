import { useEffect, useState } from "react"
import { getArticles } from "../utils/api"
import ArticleCard from "./articles/ArticleCard"

export default function Articles() {
    const [articles, setArticles] = useState([])

    useEffect(() => {
        getArticles().then((res) => {
            setArticles(res.articles)
        })
    }, [])

    return (
        <ul className="article-list">
            {articles.map((article) => {
                return <ArticleCard article={article} key={article.article_id} />
            })}
        </ul>
    )
} 