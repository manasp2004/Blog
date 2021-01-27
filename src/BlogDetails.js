import { Link, useHistory, useParams } from "react-router-dom"
import useFetch from "./useFetch"

const BlogDetails = () => {
    const { id } = useParams()
    const {data: blog, isPending, error} = useFetch("http://localhost:8000/blogs/" + id)
    const history = useHistory()

    const handleDelete = () => {
        fetch("http://localhost:8000/blogs/" + blog.id, {
            method: 'DELETE'
        })
        .then(() => {
            console.log("Blog Deleted")
            history.push("/")
        })
    }

    return (
        <div className="blog-details">
            { isPending && <div className="loader"></div> }
            { error && <div>{ error }</div> }
            { blog && (
                <article>
                    <h2>{ blog.title }</h2>
                    <pre>Written by { blog.author }</pre>
                    <div>{ blog.body }</div>
                    <button onClick={ handleDelete }>Delete Blog</button>
                </article>
            )}
        </div>
    )
}

export default BlogDetails