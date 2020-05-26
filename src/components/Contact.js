import React, { Component } from "react";
import firebase from "firebase";

export default class Contact extends Component{


onSubmitForm(e){
    e.preventDefault();

    const today = new Date();
    const dateStr = today.toString()
    

    const db = firebase.firestore();
    const docRef = db.collection("contactFormData").doc(e.target.elements.email.value + dateStr);

    docRef.set({
        contactName : e.target.elements.name.value,
        contactEmail : e.target.elements.email.value,
        contactMessage : e.target.elements.message.value
    })

    console.log(dateStr)

    
}
    render(){
        return(
               <div className="contact-main">
                    <form className="contact-form" onSubmit={this.onSubmitForm.bind(this)}>
                        <input type="text" placeholder="Namn" name="name"/>
                        <input type="email" placeholder="Email" name="email"/>
                        <textarea type="textarea" placeholder="Ditt Meddelande" rows="4" cols="20" name="message"/>
                     
                        <button>Kontakta oss</button>
                    </form>
               </div>
        )
    }
}