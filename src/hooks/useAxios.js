//para leer el estado y consumirlo uso useSelector, y para actualizarlo el useDispatch
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import axios from "axios";

const useAxios = (URL) => {
  const { location, checkin, checkout, adults, children } = useSelector(
    (state) => state.params
  );
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    axios
      .request({
        method: "GET",
        url: URL,
        params: {
          location: location,
          checkin: checkin,
          checkout: checkout,
          adults: adults,
          children: children,
          /*con useSelector leo el estado global, para obtener la informacion, que se actualiza con el dispatch*/
        },
        headers: {
          "X-RapidAPI-Key":
            "d5aad89182mshb010c79e9e89f0dp1819d3jsn2e51ec147d58",
          "X-RapidAPI-Host": "airbnb13.p.rapidapi.com",
        },
      })
      .then(function (response) {
        console.log(response.data.results);
        setData(response.data.results);
      })
      .finally(() => setLoading(false))
      .catch(function (error) {
        console.error(error);
      });
    //pongo location para q se actualice cada vez q cambio de ciudad
  }, [location]);

  return { data, loading };
};

export default useAxios;
