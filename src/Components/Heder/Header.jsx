import {  NavLink } from "react-router-dom";
import './../../css/nav.css';



const Header = () => {
   
    return (
        <div>
            
            <nav>
                <span>Logo</span>
                
                <NavLink to="/"> Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/users">Usears</NavLink>
                <NavLink to="/Contact">Contact</NavLink>
            </nav>
            
        </div>
    );
};

export default Header;