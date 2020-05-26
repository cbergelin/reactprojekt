import React, {Component} from "react";
import firebase from "./FirebaseConfig"


//Hämtar data från fireabase
class FirebaseTest extends Component{

    onClickFirebase(){

        

        const docRef = firebase.firestore().collection("booking").doc("info")
        const docRef2 = firebase.firestore().collection("booking").doc("info2")

        docRef.get().then(booking => 
            {if(booking.exists) {
                console.log("document data: ", booking.data())

                }else {
                    console.log("error")
                }
            })
            //Skriva in data i firebase
            docRef.set({
                price: 2000,
                item: "test"
            })
            docRef2.set({
                price: 3000,
                item: "test 2"
            })
    }

    


render(){

    return(
        <div>
           <br/><br/><br/> <center><button onClick={this.onClickFirebase.bind(this)}>Hämta firestore info</button></center>
        </div>
    )

}

}


export default FirebaseTest