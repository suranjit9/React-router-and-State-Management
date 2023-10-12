import { useLoaderData } from "react-router-dom";
import User from "./User";


const Users = () => {
    const users =useLoaderData();
    return (
        <div>
            <h1>Total Users :{users.length}</h1>
            <div className="grid grid-cols-4 gap-4 ">
            {
                users.map(user => <User key={user.id} user={user}></User>)
            }
            </div>
        </div>
    );
};

export default Users;