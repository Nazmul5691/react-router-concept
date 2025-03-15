import { useLoaderData, useNavigate } from "react-router-dom"

const UserDetails = () =>{

    const user = useLoaderData();
    const navigate = useNavigate();


    const {name} = user;

    const handleGoBack = () =>{
        navigate(-1);
    }

    return(
        <div>
            <h1>Details of : {name}</h1>
            <button onClick={handleGoBack}>Go back</button>
        </div>
    )
}

export default UserDetails