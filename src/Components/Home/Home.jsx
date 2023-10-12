import { Outlet, useNavigation } from "react-router-dom";
import Header from "../Heder/Header";
import Footer from "../Footer/Footer";
import Spinner from 'react-bootstrap/Spinner';


const Home = () => {
    const loging = useNavigation();
    return (
        <div>
            <Header></Header>
            {
                   loging.state === "loading"?<Spinner animation="grow" variant="light" />:<Outlet></Outlet>
            }
            
            <Footer></Footer>
        </div>
    );
};

export default Home;