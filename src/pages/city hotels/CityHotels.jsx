//en esta pagina muestro todos los hoteles que hay en la ciudad elegida !

//importo el custom hook y le pongo la URL de la API q quiero usar.
import useAxios from "../../hooks/useAxios";
import "./cityHotel.css"
import OneCity from "../../components/hotels in city/OneCity";
import Search from "../../components/search/Search";



function CityHotels() {

 const { data } = useAxios('https://airbnb13.p.rapidapi.com/search-location');

    return (
      <div className="centerBody">
          <Search />
          <div className="containerHotel">
            <div className="allHotels">
              {
                data.map((h, index) => {
                  return   <OneCity { ...h } key={ index } /> 
                })
              } 
            </div>
          </div> 
      </div>
     );
}

export default CityHotels;

