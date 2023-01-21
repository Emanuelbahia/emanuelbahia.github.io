import { Link } from "react-router-dom"

//utilizo wavify para hacer el efecto de una ola!
import Wave from "react-wavify"
import "./notFound.css"

function NotFound() {

    return ( 
        <div>
           <Wave  className='wave' 
                fill='#f79902'
                paused={false}
                options={{
                    height: 150,
                    amplitude: 170,
                    speed: 0.15,
                    points: 3
                    }}
        />
         <div className='wave-title'>
            <h2 className='h2-wave'>404</h2>
            <h3 className='h3-wave'>Page not found </h3> 
            <Link to="/" >
                <h5>back to home</h5>
            </Link>
            
         </div> 
        </div>
     );
}

export default NotFound;