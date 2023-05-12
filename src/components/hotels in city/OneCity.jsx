import Carousel from 'react-bootstrap/Carousel';
import { FaStar } from "react-icons/fa";
import "./oneCity.css"

//es la estructura del componente cityHotels donde muestro todos los hoteles de una ciudad

function OneCity(props) {

    return ( 

      <a href= {props.deeplink} >
        <div className="divHotel">
            
             <Carousel>
                {
                     props.images.map((image, index) => {
                        return <Carousel.Item key={ index }> <img className="imageHotel" src= { image } /> </Carousel.Item>
                     })
                }
            </Carousel> 
            
            <div className='ratingAndRating' >
               <h3 className='cityCard'> { props.name }{", "}{ props.city } </h3>
               <span className='iconRating'> <FaStar className='marginStar'/> {" "} { props.rating } </span>
            </div>
            <h4 className='colorH4'> { props.type } </h4>
            <h3 className='priceH3'> { props.price.currency } { props.price.total } {" "} <span className='colorGrey'> noche </span> </h3>
            
        </div>
      </a>  
     );
}

export default OneCity;