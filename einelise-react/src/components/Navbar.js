import { Link } from 'react-router-dom';


export default function Navbar() {
    return(
        <nav>
            <Link to="/">Home</Link> | {" "}
            <Link to="/about">About</Link> | {" "}
            <Link to="/gallery">Photo Gallery</Link> | {" "}
            <Link to="/Social_Media">Social Media</Link> | {" "}
            <Link to="/blog">Blog</Link> | {" "}
            <Link to="/signup">Sign Up</Link> |{" "}
            <Link to="/login">Login</Link> |{" "}
            <Link to="/dashboard">Dashboard</Link>

        </nav>
    );
}