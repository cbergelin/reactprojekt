import React from "react";
import { BrowserRouter, Route} from "react-router-dom";
import Booking from "./Booking";
import Navbar from "./Navbar"
import Formular from "../pages/Formular"
import App from "./App";
import AdminSida from "./AdminSida"
import FirebaseTest from "./FirebaseTest";
import UserPage from "./AuthUser/UserPage";
import UserProfile from "./AuthUser/UserProfile";
import Contact from "./Contact";


const Approute = ()=>{

    return (
        <div>
             
            <BrowserRouter>
                 <Navbar/>
                 
                 <Route path="/" component= {App} exact ></Route>
                 <Route path="/userprofile" exact component={UserProfile}></Route>
                 <Route path="/bookings" component= {Booking} exact></Route>
                 <Route path="/form" exact component= {Formular}></Route>                              
                 <Route path="/adminpage" exact component= {AdminSida}></Route>
                 <Route path="/firebasetest" exact component = {FirebaseTest}></Route>
                 <Route path="/userpage" exact component = {UserPage}></Route>
                 <Route path="/contact" exact component= {Contact}></Route>
                 
            </BrowserRouter>
            
              
        </div>
    )
}

export default Approute;