//en esta pagina muestro todos los hoteles que hay en la ciudad elegida !

//importo el custom hook y le pongo la URL de la API q quiero usar.
import "./cityHotel.css"
import OneCity from "../../components/hotels in city/OneCity";
import Search from "../../components/search/Search";



function CityHotels({ data }) {



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

