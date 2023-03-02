import React from 'react';
import Search from '../search/Search';
import SomeHotels from "../someHotels/SomeHotels";
import "./bodyHome.css"

function BodyHome() {
   

  return (
    <div className='container-bodyHome' >
       <Search/>
       <SomeHotels />
    </div>
  );

   
}

export default BodyHome;




