import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Login from "./pages/login/login";
import Register from "./pages/register/Register";
import Header from  "../src/components/header/Header"
import CityHotels from "./pages/city hotels/CityHotels";
import NotFound from "./pages/page not found/notFound";

function App() {
  

  return (
  
        
    <Routes>

       <Route path="/" element= { <Home/> } >
          <Route index element= { <Header  /> } />
          <Route path="hotels" element= { <CityHotels /> } />
          <Route path="register" element= { <Register/> } />
          <Route path="login" element= { <Login/> } />
       </Route>

       {/* la cargo por afuera de la ruta (/) para que no me aparezca el navbar y footer */}
       <Route path="*" element= { <NotFound/> } /> 

    </Routes>
  
  )
}

export default App
