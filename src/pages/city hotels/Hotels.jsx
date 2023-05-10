import { Routes, Route } from "react-router-dom";
import CityHotels from "./CityHotels";
import useAxios from "../../hooks/useAxios";
import OneHotel from "../../components/one hotel/OneHotel";

function Hotels() {

    const { data } = useAxios('https://airbnb13.p.rapidapi.com/search-location');

    return ( 
        <>
           <Routes>
               <Route index element= { <CityHotels data={ data } /> } />
               <Route path="hotelId" element= { <OneHotel/> } />
           </Routes>
        </>
     );
}

export default Hotels;