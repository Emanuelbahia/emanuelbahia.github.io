//en esta pagina muestro todos los hoteles que hay en la ciudad elegida !

//importo el custom hook y le pongo la URL de la API q quiero usar.
import useAxios from "../../hooks/useAxios";
import "./cityHotel.css"
import OneCity from "../../components/hotels in city/OneCity";



function CityHotels() {

 const { data } = useAxios('https://airbnb13.p.rapidapi.com/search-location');

    return (
      <div className="containerHotels">
        <div className="allCardsHotels">
          {
            data.map((h, index) => {
              return   <OneCity { ...h } key={ index } /> 
            })
          } 
        </div>
      </div> 
     );
}

export default CityHotels;

