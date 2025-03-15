import { Link } from "react-router-dom";

export default function User({ user }) {

    const { name, email, phone, id } = user;

    return (
        <div className="p-5 border-blue-500 border-2 rounded-md">
            <h1>Name: {name}</h1>
            <h1>Email: {email}</h1>
            <h1>Phone: {phone}</h1>
            <Link to={`/users/${id}`}>
                <button className="text-white bg-gray-400 p-2 rounded-md">Show Details</button>
            </Link>
        </div>
    )
}