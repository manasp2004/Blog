import { useState } from "react"
import { Link } from "react-router-dom"

const Create = () => {
    const [title, setTitle] = useState("")
    const [body, setBody] = useState("")
    const [author, setAuthor] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        const blog = { title, body, author }
        fetch("http://localhost:8000/blogs", {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(blog)
        })
        .then(() => {
            console.log("New Blog Added")
        })
    }
    return (
        <div className="create">
            <h1>Add a new blog</h1>
            <form onSubmit={ handleSubmit }>
                <label>Blog Title</label>
                <input type="text" value={ title } onChange={(e) => setTitle(e.target.value)} spellCheck="false" required />
                <label>Body</label>
                <textarea value={ body } onChange={(e) => setBody(e.target.value)} required />
                <label>Author</label>
                <input type="text" value={ author } onChange={(e) => setAuthor(e.target.value)} spellCheck="false" required />
                <Link to="/"><button>Add Blog</button></Link>
            </form>
        </div>
    )
}

export default Create