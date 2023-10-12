import { Link } from "react-router-dom";



const Header = () => {
    return (
        <div>
            
            <nav>
                <span>Logo</span>
                <Link to="/"> Home</Link>
                <Link to="/about">About</Link>
                <Link to="/users">Usears</Link>
                <Link to="/Contact">Contact</Link>
            </nav>
            
        </div>
    );
};

export default Header;