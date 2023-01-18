//con el useSelector puedo consumir el estado global que tengo en el store (state), y de ese estado busco el q quiero como params,
// y le digo q de state.params quiero location, checkin, checkout y adults

//para leer el estado uso useSelector, y para actualizarlo el useDispatch
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
//import axios from "axios";
import "./cityHotel.css"
import OneCity from "../../components/choose city/OneCity";
//import { options } from "../../components/axios/Axios"

//en esta pagina muestro todos los hoteles que hay en la ciudad elegida !

const options = {
  method: 'GET',
  url: 'https://airbnb13.p.rapidapi.com/search-location',
  params: {
    location: 'Paris',
    checkin: '2023-05-16',
    checkout: '2023-05-17',
    adults: '1',
    children: '0',
    
  },
  headers: {
    'X-RapidAPI-Key': 'd5aad89182mshb010c79e9e89f0dp1819d3jsn2e51ec147d58',
    'X-RapidAPI-Host': 'airbnb13.p.rapidapi.com'
  }
};

function CityHotels() {

  const [data, setData] = useState([]);

  useEffect(() => {

    axios.request(options).then(function (response) {
        console.log(response.data);
        setData(response.data.results)
    }).catch(function (error) {
        console.error(error);
    });

  }, []) 

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
