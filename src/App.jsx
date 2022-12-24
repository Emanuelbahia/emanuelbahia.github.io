import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Login from "./pages/login/login";
import Register from "./pages/register/Register";
import Header from  "../src/components/header/Header"
import CityHotels from "./pages/city hotels/CityHotels";
import OneHotel from "./pages/one hotel/OneHotel";

function App() {
  

  return (
  
        
    <Routes>
       <Route path="/" element= { <Home/> } >
          <Route index element= { <Header  /> } />
          <Route path="hotels" element= { <CityHotels /> } />
          <Route path="register" element= { <Register/> } />
          <Route path="login" element= { <Login/> } />
          <Route path="onehotel" element= { <OneHotel/> } />
       </Route>
    </Routes>
  
  )
}

export default App
