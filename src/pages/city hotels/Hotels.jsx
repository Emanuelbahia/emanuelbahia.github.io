import { Routes, Route } from "react-router-dom";
import CityHotels from "./CityHotels";
import useAxios from "../../hooks/useAxios";


function Hotels() {

    const { data, loading } = useAxios('https://airbnb13.p.rapidapi.com/search-location');

    return ( 
        <>
           <Routes>
               <Route index element= { <CityHotels data={ data } loading={ loading }/> } />           
           </Routes>
        </>
     );
}

export default Hotels;