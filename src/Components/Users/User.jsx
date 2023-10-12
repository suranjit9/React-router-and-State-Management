import PropTypes from 'prop-types';
import { Link, useNavigate } from 'react-router-dom';

const User = ({user}) => {
    const {username, email, id} =user;
    const useNaveget = useNavigate();
    const handleShow =()=>{
     
        useNaveget(`/use/${id}`);
        
    }
    return (
        <div className='border-4'>
            <h1 className='text-xl'>{username}</h1>
            <p>{email}</p>
            <Link to={`/use/${id}`}> <button>Click ME</button></Link>
            <button onClick={handleShow}>Click Me & See Data</button>
        </div>
    );
};
User.propTypes ={
    user:PropTypes.object.isRequired,
    

}

export default User;