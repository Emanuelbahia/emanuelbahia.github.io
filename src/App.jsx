import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Login from "./pages/login/login";
import Register from "./pages/register/Register";
import BodyHome from "./components/body home/BodyHome";
import Hotels from "./pages/city hotels/Hotels";

function App() {
  
  return (    
    <Routes>
       <Route path="/" element= { <Home/> } >
          <Route index element= { <BodyHome /> } />
          <Route path="hotels/*" element= { <Hotels /> } />
          <Route path="register" element= { <Register/> } />
          <Route path="login" element= { <Login/> } />
       </Route>
       {/* la cargo por afuera de la ruta (/) para que no me aparezca el navbar y footer */}
       <Route path="*" element= { <Home/> } /> 
    </Routes> 
  )
}

export default App;
