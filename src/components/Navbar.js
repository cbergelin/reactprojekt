import React from 'react';
import {Link} from 'react-router-dom'
import "../style/scss/main.scss";

const Navbar = ()=>{

    return(



        
        <nav>
          <div className={"Menu-container"}>
              <input id={"responsive-menu"} type={"checkbox"}/>
              <label htmlFor={"responsive-menu"}>Menu <span id={"menu-icon"}></span></label>
            
              <ul> <li><Link to="/">Start</Link></li>
                  <li><Link to="/Card.js">Features</Link></li>
                  <li><Link to="/Booking.js">Bookings</Link></li>
                  <li><Link to="/Form">Form</Link></li>
              </ul>
          </div>
        </nav>
     
           
      )


}

export default Navbar