// testa skapa:  Dashboard
//admin profile
import React, {Component} from "react";
import firebase from "../FirebaseConfig"
import bookingHistory from "./bookingHistory";



class UserProfile extends Component {

    state={
        historyCondition: false,
        produkts: []
        
    }

    /* async componentDidMount(){
        
        const db = firebase.firestore();
        const user = firebase.auth().currentUser;
        var docRef = db.collection("bookings").doc(user.uid).collection("individBooking");

        docRef.get().then(function(doc) {
            if (doc.exists) {
                console.log("Document data:", doc.data());
                this.setState({produkts:doc.data})
            } else {
                // doc.data() will be undefined in this case
                console.log("No such document!");
            }
        }).catch(function(error) {
            console.log("Error getting document:", error);
        });
    } */

    onClickHistory(){
        this.setState({historyCondition:true})
    }

    
    historyBack(){
        this.setState({historyCondition:false})
    }


    logOut(){
        localStorage.clear() 
        setTimeout(function(){ console.log("Hello"); }, 30000000000);       
        window.location.reload(false);
        firebase.auth().signOut();
        
    }

    deleteUser(){
        var user = firebase.auth().currentUser;

        user.delete().then(function() {
            localStorage.clear()
            window.location.reload(false);
        // User deleted.
        })
    }

    

    render(){
        return(
            <div className="adminProfile-container">
                <div className="adminprofile-userContainer">
                    Profile info: {this.props.userData}

                    <button onClick={this.logOut.bind(this)}> Logout</button>
                    <button onClick={this.deleteUser.bind(this)}>Radera Konto</button>
                </div>

                <div className="adminProfile-dashboard">
                    {this.state.historyCondition === false && <button onClick={this.onClickHistory.bind(this)}>Köphistorik</button>}
                    {this.state.historyCondition === true &&                                    
                 <button onClick={this.historyBack.bind(this)}>Tillbaka</button>
                    
                    }
                </div>

            </div>     
            
        )
    }
}


export default UserProfile;



/* bookingHistory(e){
    const user = firebase.auth().currentUser
    const db = firebase.firestore()
    const docRef = db.collection("bookings").doc(user.uid).collection("individBooking");
    

    docRef.get().then(function(doc) {
        if (doc.exists) {
            console.log("Document data:", doc.data());
        } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
        }
    }).catch(function(error) {
        console.log("Error getting document:", error);
}); */