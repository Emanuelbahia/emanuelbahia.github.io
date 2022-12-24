import { useEffect, useState } from "react";
import axios from "axios"

function Axios() {

    const [data, setData] = useState([]);

    const options = {
        method: 'GET',
        url: 'https://airbnb13.p.rapidapi.com/search-location',
        params: {
          location: 'Paris',
          checkin: '2022-05-16',
          checkout: '2022-05-17',
          adults: '1'
        },
        headers: {
          'X-RapidAPI-Key': 'd5aad89182mshb010c79e9e89f0dp1819d3jsn2e51ec147d58',
          'X-RapidAPI-Host': 'airbnb13.p.rapidapi.com'
        }
      };

      useEffect(() => {

        axios.request(options).then(function (response) {
            console.log(response.data);
            setData(response.data)
        }).catch(function (error) {
            console.error(error);
        });

    }, [])

    return ( 

       <div>
          {data}
       </div>      
       
     );
}

export default Axios;