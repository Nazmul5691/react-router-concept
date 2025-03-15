import { useLoaderData } from "react-router-dom"
import User from "./User";

export default function Users() {

    const users = useLoaderData();

    return (
        <div>
            <h1>Our Fantastic Users</h1>
            <p>All users : {users.length}</p>
            <div className="grid grid-cols-3 gap-4">
                {
                    users.map(user => <User key={user.id} user={user} />)
                }
            </div>
        </div>
    )
}