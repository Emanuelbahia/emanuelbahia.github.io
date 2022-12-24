//con el useSelector puedo consumir el estado global que tengo en el store (state), y de ese estado busco el q quiero como params,
// y le digo q de state.params quiero location, checkin, checkout y adults

//para leer el estado uso useSelector, y para actualizarlo el useDispatch
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import axios from "axios";
//import DataHotel from "./DataHotel";
import data from "../../data/data";
import "./cityHotel.css"
import OneCity from "../../components/choose city/OneCity";

//en esta pagina muestro todos los hoteles que hay en la ciudad elegida !

function CityHotels() {

    return ( 
        <div className="allCardsHotels">
          {
            data.map((h, index) => {
              return   <OneCity { ...h } key={ index } /> 
            })
          } 
        </div>
     );
}

export default CityHotels;
