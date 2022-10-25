import { useEffect, useState } from "react";
import RenderData from "../renderData/RenderData";
import AddData from "../addData/AddData";
const FetchData = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(response => response.json())
            .then(data => setUsers(data))
            .catch(err => console.log("Something went wrong", err))
    }, [])

    const addNewUser = () => {
        setUsers(users => [...users, users[0]])
    }

    return (
        <div>
            <RenderData users={users} />
            <AddData addNewUser={addNewUser} />
        </div>
    )
}

export default FetchData;