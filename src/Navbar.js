import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>My Blogs</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/create" style={{ 
                    color: "white",
                    backgroundColor: "#00A6FB",
                    borderRadius: "8px",
                 }}>New Blog</Link>
            </div>
        </nav>
    )
}

export default Navbar