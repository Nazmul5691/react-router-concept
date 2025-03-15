import { Link } from "react-router-dom";

export default function Navbar(){
    return (
        <div className="flex flex-row gap-10">
            <Link to="/">Home</Link>
            <Link to="/users">Users</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
        </div>
    )
}