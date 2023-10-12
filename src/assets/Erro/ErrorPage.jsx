import { useNavigate, useRouteError } from "react-router-dom";


const ErrorPage = () => {
    const error = useRouteError();
    const goback =useNavigate();
    const handlerBack = ()=>{
        goback('/');
    }
    const handlerBackOne = ()=>{
        goback(-1);
    }
    return (
        <div>
            <h1>OOps !!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <p>{
                error.statusText || error.message
                }</p>
            <button onClick={handlerBack}>Home</button>
            <button onClick={handlerBackOne}>Back</button>

        </div>
    );
};

export default ErrorPage;