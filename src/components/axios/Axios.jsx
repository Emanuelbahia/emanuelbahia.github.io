import { useSelector } from "react-redux";

export const options = () => {

 
  const { location, checkin, checkout, adults } = useSelector(state => state.params)

  console.log(location)

    return (

      {
        method: 'GET',
        url: 'https://airbnb13.p.rapidapi.com/search-location',
        params: {
         
          location: { location },
          checkin: { checkin },
          checkout: { checkout },
          adults: { adults },
          children: { children },

        },
        headers: {
          'X-RapidAPI-Key': 'd5aad89182mshb010c79e9e89f0dp1819d3jsn2e51ec147d58',
          'X-RapidAPI-Host': 'airbnb13.p.rapidapi.com'
        }
      }
    )
}

      


