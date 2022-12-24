import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const options = {
  method: 'GET',
  url: 'https://airbnb13.p.rapidapi.com/search-location',
  params: {
    /* location: { location },
    checkin: { checkin },
    checkout: { checkout },
    adults: { adults }*/
    location: "paris",
    checkin: '2023-05-16',
    checkout: "'2023-05-18'",
    adults: "1"
  },
  headers: {
    'X-RapidAPI-Key': 'd5aad89182mshb010c79e9e89f0dp1819d3jsn2e51ec147d58',
    'X-RapidAPI-Host': 'airbnb13.p.rapidapi.com'
  }
};



function Axios() {

  const [data, setData] = useState([]);
  const { location, checkin, checkout, adults } = useSelector(state => state.params)

  

    useEffect(() => {

        axios.request(options).then(function (response) {
            console.log(response.data);
            setData(response.data.results)
        }).catch(function (error) {
            console.error(error);
        });
    
      }, [])  

    return (

        <div>
          <ul>
          {
            data.map((h, index) => {
              return <li key={ index } > { h.city } </li>
            })
          }
        </ul>
        </div>
    )
}

      

export default Axios;
