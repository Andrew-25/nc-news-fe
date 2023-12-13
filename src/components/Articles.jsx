import { useEffect, useState } from "react"
import { getArticles } from "../utils/api"
import { useSearchParams } from "react-router-dom"
import ArticleCard from "./articles/ArticleCard"

export default function Articles() {
    const [articles, setArticles] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [category, setCategory] = useState('')
    const [url] = useSearchParams()

    useEffect(() => {
        setCategory(url.get('topic'))
    }, [url])

    useEffect(() => {
        getArticles(category).then((res) => {
            setArticles(res.articles)
        })
        setIsLoading(false)
    }, [category])

    if (isLoading) return <h2>Loading ...</h2>

    return (
        <ul className="article-list">
            {articles.map((article) => {
                return <ArticleCard article={article} key={article.article_id} />
            })}
        </ul>
    )
} 