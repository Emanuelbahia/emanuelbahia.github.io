import { useState } from "react"
import { useDispatch } from "react-redux";
import { setParams } from "../../reducers/params/paramsSlice";
import { DateRange } from "react-date-range"
import { useNavigate } from "react-router-dom"

//para el formato de la fecha
import { format } from "date-fns";

import { FaBed, FaSearch } from "react-icons/fa";
import { BiCalendar } from "react-icons/bi";
import { GiPerson } from "react-icons/gi";
import "./search.css"
//lo importo para darle el estilo al calendario
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file


function Search() {

   const dispatch = useDispatch();
   const navigate = useNavigate();

   const [openPeople, setOpenPeople] = useState(false)
   const [people, setPeople] = useState({
      adults: 1,
      children: 0
   });

   const handleOption = (name, operation) => {
      setPeople((prev) => {
         return {
            ...prev,
            [name]: operation === "i" ? people[name] + 1 : people[name] -1,
         }
      })
   }
   //hago un condicional para q adultos no pueda ser menor a 1 y children menor a 0
   if(people.adults < 1) {
      setPeople({
         adults: 1, 
         children: people.children})
   }
   if(people.children < 0) {
      setPeople({
         adults: people.adults, 
         children: 0})
   }

   //uso el useState para mostrar el calendario cuando quieran cambiar la fecha
   const [openDate, setOpenDate] = useState(false)
   const [date, setDate] = useState([
      {
         startDate: new Date(),
         endDate: new Date(),
         key: "selection"
      }
   ])

   const [search, setSearch] = useState("")
   

    return ( 
       <div className="searchContainer">
          
             <div className="centerItems">
               <FaBed className="iconMargin"/> 
               <input className="searchInput" onChange= {e => { setSearch(e.target.value) }} type="text"  placeholder=" elige un destino..." />
             </div>
         
             <div className="centerItems">
               <BiCalendar className="iconMargin"/>
               <span className="searchInput" onClick= { ()=> setOpenDate(!openDate) } > { `${format(date[0].startDate, "yyyy/MM/dd")} hasta ${format(date[0].endDate, "yyyy/MM/dd")} ` } </span>
               {/* con el condicional lo muestro cuando quieran cambiar la fecha haciendo un click*/}
               { openDate && <DateRange 
               editableDateInputs= { true }
               onChange= { item => setDate([item.selection]) }
               moveRangeOnFirstSelection= { false }
               ranges= { date }
               className="calendar"
               />
               }
             </div> 
             <div className="centerItems"> 
               <GiPerson className="iconMargin" />
               <span className="searchInput" onClick={() => setOpenPeople(!openPeople) } > {`${people.adults} adultos - ${people.children} chicos `} </span>
              { 
                openPeople && 
                 <div className="containerAdultChildren">
                     <div className="wrapperAdults">
                           <div className="adultItem">
                              Adults
                           </div>
                           <div className="adultCounter">
                              <button className="buttonCounterAdults" onClick={() => handleOption("adults", "d")} > - </button>
                              <span style= {{ margin: "0 5px" }} > { people.adults } </span>
                              <button className="buttonCounterAdults" onClick={() => handleOption("adults", "i")}  > + </button>
                           </div>
                     </div>
                     <div className="wrapperAdults">
                           <div className="adultItem">
                              childrens
                           </div>
                           <div className="adultCounter">
                              <button className="buttonCounterAdults" onClick={() => handleOption("children", "d")}  > - </button>
                              <span style= {{ margin: "0 5px" }} > { people.children } </span>
                              <button className="buttonCounterAdults" onClick={() => handleOption("children", "i")}  > + </button>
                           </div>
                     </div>
                 </div>
               }
            </div>  
             <button className="buttonFormSearch centerItems"
              onClick= {() => {
                 /**con el dispatch actualizo el estado de setParams y despues los leo con useSelector cuando hago la peticion a la API */
                dispatch(setParams({
                  location:  search ,
                  checkin: format(date[0].startDate, "yyyy-MM-dd") ,
                  checkout: format(date[0].endDate, "yyyy-MM-dd") ,
                  adults: people.adults,
                  children: people.children
                }))
                /**con el navigate lo redirijo a la pagina de hotels */
                navigate("/hotels")
             }} 
             > 
             <FaSearch className="searchIcon"/> 
             <span className="searchButton">Search</span>
             </button>
          
       </div> 
       );
}

export default Search;