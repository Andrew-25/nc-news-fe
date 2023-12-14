export default function Error({msg}) {
    return (
        <div className="error">
            <h2>Error</h2>
            <div className="centered">
                <p>{msg}</p>
            </div>
        </div>
    )
}