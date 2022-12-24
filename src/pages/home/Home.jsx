import Navbar from "../../components/navbar/Navbar";
import { Outlet } from "react-router-dom";
import "./home.css"
import Footer from "../../components/footer/Footer";


function Home() {

    return ( 
        <div className="relative">
           <Navbar/>
           <Outlet/>
           <Footer/>
        </div>
     );
}

export default Home;
