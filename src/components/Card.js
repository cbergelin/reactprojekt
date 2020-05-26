import React, { Component } from "react";
import "../style/scss/main.scss";
import firebase from "./FirebaseConfig"

class Card extends Component {

    bookingDB(){
        const user = firebase.auth().currentUser
        const docRef = firebase.firestore().collection("booking").doc(user.uid).collection("individBooking");
        const today = new Date;
        const dateStr = today.toString();
       docRef.add({
            
           name: this.props.title,
           description: this.props.description,
           price: this.props.price,
           date: dateStr           
       }) 
       docRef.get({}).then(res=>console.log(res.metaData()))
    }

    render(){

return (



      
    <ul className={"cards"}>
        <li className={"cards_item"}>
            <div className={"card"}>
                <img src={this.props.image} className={"card_image"} alt={"PICTURE ERROR!"}/>
                <div className={"card_content"}>
                    <h2 className={"card_title"}>{this.props.title}</h2><br/>
                    <p className={"card_text"}>{this.props.description}</p>
                    <p>{this.props.price}:-</p>          
                    <button className={"btn card_btn"} onClick={this.bookingDB.bind(this)}>Boka</button>
                </div>
            </div>
        </li>
    </ul>

        )
    }
}

export default Card;


