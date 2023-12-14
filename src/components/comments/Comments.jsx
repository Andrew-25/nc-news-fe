import { useEffect, useState } from "react"
import { getArticleComments, postComment } from "../../utils/api"
import CommentCards from "./CommentCards"

export default function Comments(props) {
    const [comments, setComments] = useState([])
    const [newComment, setNewComment] = useState('')
    const [canPost, setCanPost] = useState(false)

    useEffect(() => {
        getArticleComments(props.articleId).then((res) => {
            setComments(res.comments)
        })
    }, [])

    useEffect(() => {
        newComment ? setCanPost(true) : setCanPost(false)
    }, [newComment])

    const handleChange = (event) => setNewComment(event.target.value)

    const handleSubmit = (event) => {
        event.preventDefault()
        if (canPost) {
            setCanPost(false)
            postComment(props.articleId, 'happyamy2016', newComment).then((res) => {
                setComments([res.comments[0], ...comments])
                setNewComment('')
            })
        }
    }

    return (
        <div className="comments">
            <h3 className="comment-header">Comments:</h3>
            <form onSubmit={handleSubmit} className="comment-form">
                <textarea type="text" placeholder="Your comment here ..." onChange={handleChange} value={newComment}/>
                <button hidden={!canPost}>Add comment</button>
            </form>
            <h4>Showing {comments.length} comments.</h4>
            <ul className="comment-list">
                {comments.map((comment) => {
                    return <CommentCards comment={comment} key={comment.comment_id}/>
                })}
            </ul>
        </div>
    )
}