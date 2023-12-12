import { useLocation } from "react-router-dom"
import { useEffect, useState } from "react"
import { getArticlesById } from "../../utils/api"
import ArticleContent from "./ArticleContent"

export default function ArticlePage() {    
    const [article, setArticle] = useState([])
    const location = useLocation()
    const articleId = location.pathname.slice(10)

    useEffect(() => {
        getArticlesById(articleId).then((res) => {
            setArticle(res.article)
        })
    }, [])

    if (article.length === 0) {
        return <h2>Loading ...</h2>
    } else {
        return (
            <div>
                <ArticleContent article={article[0]}/>
            </div>
        )
    }

}