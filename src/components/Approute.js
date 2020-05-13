import React from "react";
import { BrowserRouter, Route} from "react-router-dom";
import Booking from "./Booking";
import Navbar from "./Navbar"
import Formular from "../pages/Formular"
import App from "./App";
import AdminSida from "./AdminSida"


const Approute = ()=>{

    return (
        <div>
             
            <BrowserRouter>
                 <Navbar/>
                 
                 <Route path="/" component= {App} exact ></Route>
                 
                 <Route path="/bookings" component= {Booking} exact></Route>
                 <Route path="/form" exact component= {Formular}></Route>                              
                 <Route path="/adminpage" exact component= {AdminSida}></Route>
                 
                 
            </BrowserRouter>
            
              
        </div>
    )
}

export default Approute;