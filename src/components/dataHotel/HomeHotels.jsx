import Carousel from 'react-bootstrap/Carousel';
import "./homeHotels.css"

//diseño para el componente someHotels.jsx

function HomeHotels(props) {
    return ( 
        <div className="cardHotel">
            
            <Carousel>
               
                  {
                     props.images.map((image, index) => {
                        return <Carousel.Item key={index}> <img className="d-block w-100 imagesHotel" src= { image } />  </Carousel.Item>
                     })
                  }              
               
            </Carousel>   
               
             
            
            <div className='nameRating' >
               <h3 className='city-card'> { props.name }{", "}{ props.city } </h3>
               <span className='ratingIcon'> {" "} { props.rating } </span>
            </div>
            <h4 className='colorGrey'> { props.type } </h4>
            <h3  className='city-card'> { props.price.currency } { props.price.total } {" "} <span className='colorGrey'> noche </span> </h3>

        </div>
     );
}

export default HomeHotels;