import Carousel from 'react-material-ui-carousel';
import { FaStar } from "react-icons/fa";
import "./oneCity.css"

//es la estructura del componente cityHotels donde muestro todos los hoteles de una ciudad

function OneCity(props) {
    return ( 
        <div className="cardHotel">
            
            <Carousel>
                {
                     props.images.map((image, index) => {
                        return <li key={index}> <img className="imagesHotel" src= { image } /> </li>
                     })
                }
            </Carousel>
            <div className='nameRating' >
               <h3> { props.name }{", "}{ props.city } </h3>
               <span className='ratingIcon'> <FaStar/> {" "} { props.rating } </span>
            </div>
            <h4 className='colorGrey'> { props.type } </h4>
            <h3> { props.price.currency } { props.price.total } {" "} <span className='colorGrey'> noche </span> </h3>
            
        </div>
     );
}

export default OneCity;