import "./dataOneHotel.css"

//es la estructura del componente oneHotel donde muestro el hotel que quiere mirar para reservar

function DataOneHotel() {

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

    
            <h3>¿Que ofrece el lugar?</h3>
            <ul>
                {
                    props.previewAmenities.map((amenity, index) => {
                        return <li key={ index }> { amenity } </li>
                    })

                }
            </ul> 
            
            
            <h3>Anfitrion: {  `${ props.isSuperhost === true  ? "es superhost" : "no es superhost"}` } </h3>
            <h3>Valoracio: { props.rating } {" "} / 5 { " " } { " - " } { props.reviewsCount } evaluaciones </h3>
            
            
             <ul>
                {
                    props.images.map((image, index) => {
                       return <li key={index}> <img className="imagesHotel" src= { image } /> </li>
                    })
                }
            </ul>
        </div>
     );
}

export default DataOneHotel;