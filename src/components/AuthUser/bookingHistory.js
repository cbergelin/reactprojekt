import React, { Component } from "react";
import UserProfile from "./UserProfile";
import UserPage from "./UserPage";
import firebase from "../FirebaseConfig";



class bookingHistory extends Component{

    



    render(){
        return(

            <div className="bookingHistory-container">

                <li>
                <h3>Orderdatum: </h3>{this.props.date}
                <h3>Produkt: </h3>{this.props.title}
                <h3>Pris: </h3>{this.props.price}
                </li>

            </div>

        )
    }

}

export default bookingHistory;