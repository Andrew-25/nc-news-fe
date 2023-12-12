import { useEffect, useState } from "react"
import { patchArticle } from "../../utils/api"
import { dateTime } from "../../utils/utils"

export default function ArticleContent({article}) {
    const [totalVotes, setTotalVotes] = useState(article.votes)
    const [hasVoted, setHasVoted] = useState(false)

    const vote = async (event, inc) => {
        setHasVoted(true)
        if (!hasVoted) {
            event.target.classList.add('clicked')
            setTotalVotes(totalVotes + inc)
            const res = await patchArticle(article.article_id, inc)
            setTotalVotes(res.article.votes)
        }
    }

    return (
        <div className="article-content">
            <h2>{article.title}</h2>
            <div className="centered">
                <img src={article.article_img_url} alt="" />
            </div>
            <div className="article-author">
                <p>by {article.author} {dateTime(article.created_at)}</p>
                <button>Edit</button>
            </div>
            <p className="article-body">{article.body}</p>
            <div className="centered">
                <div className="votes">
                    <p>Votes: {totalVotes}</p>
                    <button onClick={(e) => vote(e, 1)} className="plus">++</button>
                    <button onClick={(e) => vote(e, -1)} className="minus">--</button>
                </div>
            </div>
        </div>
    )
}