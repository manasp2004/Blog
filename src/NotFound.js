import { Link } from "react-router-dom"

const NotFound = () => {
    return (
        <div className="not-found">
            <h2>Sorry, this page isn't available</h2>
            <p>The link you followed may be broken, or the page may have been removed</p>
            <Link to="/">Back to Home</Link>
        </div>
    )
}

export default NotFound