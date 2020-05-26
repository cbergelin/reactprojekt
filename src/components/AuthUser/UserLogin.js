  import React, { Component } from "react";
  import firebase from "../FirebaseConfig";
  import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
  import UserProfile from "./UserProfile";
  
  
  class UserLogin extends Component {
  
    state={
      loginCondition: true,
      resetCondition: true,
      user: ""
    }

    // Configure FirebaseUI.
  uiConfig = {
  // Popup signin flow rather than redirect flow.
  signInFlow: 'popup',
  // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
  signInSuccessUrl: '/userprofile',
  // We will display Google and Facebook as auth providers.
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.FacebookAuthProvider.PROVIDER_ID,
    //firebase.auth.TwitterAuthProvider.PROVIDER_ID
  ]

};



    componentDidMount(){
      firebase.auth().onAuthStateChanged((user)=>{
        if(user){
          this.setState({user:user.email})
          console.log(user);
        } else {
          console.log("no user found")
        }
        
      })
      
  }
  
    onClickRegister(){
      this.setState({loginCondition:false})
    }
    onClickLogin(){
      this.setState({loginCondition:true})
    }

    onClickResetPassword(){
      this.setState({resetCondition:false})
    }

    resetBackClick(){
      this.setState({resetCondition:true})
    }

    //LOGINFUNKTION
        onSubmitLogin(e){
        e.preventDefault();

        const email = e.target.elements.email.value;
        const password = e.target.elements.password.value;

        firebase.auth().signInWithEmailAndPassword(email, password)
        .then(res=> this.props.userCredential(res.user.email))
        
        }

    //REGISTRERINGSFUNKTION
    onSubmitRegister(e){
      e.preventDefault();

      const email = e.target.elements.email.value;
      const password = e.target.elements.password.value;
      const displayName = e.target.elements.username.value

      firebase.auth().createUserWithEmailAndPassword(email, password)
      .then( (res)=>{
          res.user.sendEmailVerification()
          this.props.userCredential(res.user.email)
          this.props.showDisplayName(displayName)
         
      })

    }
  
    resetPassword(e){
      var auth = firebase.auth();
      var emailAddress = e.target.elements.resetEmail.value;

      auth.sendPasswordResetEmail(emailAddress).then(function(e) {
        // Email sent.
        console.log("email sent")        
      })
      e.preventDefault();
        
    }

  
    render(){

      

      return(
        <div> 

          
          {this.state.loginCondition && this.state.resetCondition &&
          <form onSubmit={this.onSubmitLogin.bind(this)}>
            <input type="email" name="email" placeholder="Mail"/><br/>
            <input type="password" name="password" placeholder="Lösenord"/><br/>
            <button>Login</button><br/><br/>
            <button onClick={this.onClickRegister.bind(this)}>Registrera</button><br/>
            <button onClick={this.onClickResetPassword.bind(this)}>Glömt Lösenord</button>
          </form>
          }
  
  
          {!this.state.loginCondition && this.state.resetCondition &&
          <form onSubmit={this.onSubmitRegister.bind(this)}>
            <input type="text" name="username" placeholder="Användarnamn"/><br/>
            <input type="email" name="email" placeholder="Mail"/><br/>
            <input type="password" name="password" placeholder="Lösenord"/><br/>
            <button>Registrera</button><br/><br/>
            <button onClick={this.onClickLogin.bind(this)}>Tillbaka</button><br/>            
            </form>}

          {!this.state.resetCondition &&
            <form onSubmit={this.resetPassword.bind(this)}>            
            <input type="email" name="resetEmail" placeholder="Mail"/><br/>
            <button>Återställ lösenord</button><br/><br/>
            <button onClick={this.resetBackClick.bind(this)}>Tillbaka</button><br/>
            
            </form>}
          
            <div>
              <StyledFirebaseAuth uiConfig={this.uiConfig} firebaseAuth={firebase.auth()}/>
            </div>
          
            {this.state.user? <UserProfile userData={this.state.user}/> : <div> </div>}
  
        </div>
      )
    }
  
  }
  
  export default UserLogin