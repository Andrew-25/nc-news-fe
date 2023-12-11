import { useEffect, useState } from "react"
import { getArticleComments } from "../../utils/api"
import CommentCards from "./CommentCards"

export default function Comments(props) {
    const [comments, setComments] = useState([])

    useEffect(() => {
        getArticleComments(props.articleId).then((res) => {
            setComments(res.comments) 
        })
    }, [])
    
    console.log(comments)

    return (
        <div className="comments">
            <h3 className="comment-header">Comments:</h3>
            <form className="comment-form">
                <textarea type="text" placeholder="Your comment here ..."/>
                <button>Add comment</button>
            </form>
            <ul className="comment-list">
                {comments.map((comment) => {
                    return <CommentCards comment={comment} key={comment.comment_id}/>
                })}
            </ul>
        </div>
    )
}