import { useLocation } from "react-router-dom"
import { useEffect, useState } from "react"
import { getArticlesById } from "../../utils/api"
import ArticleContent from "./ArticleContent"
import Comments from "../comments/Comments"
import Error from "../Error" 

export default function ArticlePage() {    
    const [article, setArticle] = useState([])
    const [isError, setIsError] = useState(false)
    const [errorMsg, setErrorMsg] = useState('')
    const location = useLocation()
    const articleId = location.pathname.slice(10)

    useEffect(() => {
        getArticlesById(articleId).then((res) => {
            setArticle(res.article)
            setIsError(false)
        }).catch(({msg}) => {
            setErrorMsg(msg)
            setIsError(true)
        })
    }, [])

    if (article.length === 0 && !isError) return <h2>Loading ...</h2>
    
    if (isError) {
        return <Error msg={errorMsg}/>
    } else {
        return (
            <div>
                <ArticleContent article={article[0]}/>
                <Comments articleId={articleId}/>
            </div>
        )
    }
    
}