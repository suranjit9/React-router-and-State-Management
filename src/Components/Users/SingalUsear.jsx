import { useLoaderData, useNavigate } from "react-router-dom";


const SingalUsear = () => {
    const users = useLoaderData();
    const {website, name}=users;
    const handleBack = useNavigate();
    const Back = ()=>{
        handleBack(-1);
    }
    return (
        <div>
            <h1>{name}</h1>
            <h1>{website}</h1>
            <button onClick={Back}>Back</button>
        </div>
    );
};

export default SingalUsear;