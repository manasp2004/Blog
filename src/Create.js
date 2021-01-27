import { useState } from "react"

const Create = () => {
    const [title, setTitle] = useState("")
    const [body, setBody] = useState("")
    const [author, setAuthor] = useState("")
    const handleSubmit = (e) => {
        e.preventDefault()
        const blog = { title, body, author }
        // setTitle("")
        // setBody("")
        // setAuthor("")
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
                <button>Add Blog</button>
            </form>
        </div>
    )
}

export default Create