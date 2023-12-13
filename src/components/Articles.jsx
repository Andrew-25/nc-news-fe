import { useEffect, useState } from "react"
import { getArticles } from "../utils/api"
import { useSearchParams } from "react-router-dom"
import ArticleCard from "./articles/ArticleCard"

export default function Articles() {
    const [articles, setArticles] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    const [topicQuery, setTopicQuery] = useState('')
    const [sortQuery, setSortQuery] = useState('')
    const [orderQuery, setOrderQuery] = useState('')

    const [url] = useSearchParams()

    useEffect(() => {
        setTopicQuery(url.get('topic'))
        setSortQuery(url.get('sort'))
        setOrderQuery(url.get('order'))
    }, [url])

    useEffect(() => {
        getArticles(topicQuery, sortQuery, orderQuery).then((res) => {
            setArticles(res.articles)
        })
        setIsLoading(false)
    }, [topicQuery, sortQuery, orderQuery])

    if (isLoading) return <h2>Loading ...</h2>

    return (
        <ul className="article-list">
            {articles.map((article) => {
                return <ArticleCard article={article} key={article.article_id} />
            })}
        </ul>
    )
} 