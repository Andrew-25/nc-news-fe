import { dateTime } from "../../utils/utils"

export default function CommentCards({comment}) {

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
            </div>
        </li>
    )
}