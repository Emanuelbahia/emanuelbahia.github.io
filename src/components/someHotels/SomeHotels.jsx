import data from "../../data/data";
import HomeHotels from "../dataHotel/HomeHotels";
import "./someHotels.css"

//este componente aparece en el home para mostrar distintas ciudades y hoteles

function SomeHotels() {
    return ( 
        <div className="containerHotels">
            <div className="allCardsHotels">
            {
                data.map((h, index) => {
                return   <HomeHotels { ...h } key={ index } /> 
                })
            } 
            </div>
        </div>
     );
}

export default SomeHotels;