import { useState } from "react"
import { deleteComment } from "../../utils/api"
import { dateTime } from "../../utils/utils"

export default function CommentCards({comment}) {
    const [hasBeenDeleted, setHasBeenDeleted] = useState(false)
    const signedInUser = 'happyamy2016'

    const handleDelete = (id) => {
        if (comment.author === signedInUser) {
            deleteComment(id)
            setHasBeenDeleted(true)
        }
    }

    if (hasBeenDeleted) {
        return (
            <li className="comment-deleted">
                <h4>Comment deleted</h4>
            </li>
        )
    }

    return (
        <li className="comment-card">
            <h3>{comment.author}</h3>
            <p>{dateTime(comment.created_at)}</p>
            <p className="comment-body">{comment.body}</p>
            <div className="votes-delete">
                <div className="votes">
                    <p>Votes: {comment.votes}</p>
                    <button className="plus">++</button>
                    <button className="minus">--</button>
                </div>
                <div className="delete">
                    <button onClick={() => handleDelete(comment.comment_id)}>Delete</button>
                </div>
            </div>
        </li>
    )
}