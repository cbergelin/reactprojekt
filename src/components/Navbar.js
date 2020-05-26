import React, { Component } from "react";
import {Link} from 'react-router-dom'
import "../style/scss/main.scss";
import $ from "jquery";


$(function() {
    $(".navigation__icon").click(function() {
      $(".navigation").toggleClass('navigation-open');
    });
  });


class Navbar extends Component {

  


  render(){
    return(



        
      

      <nav className="navigation">
    
        <section className="logo"></section>
    
        <section className="navigation__icon">
          <span className="topBar"></span>
          <span className="middleBar"></span>
          <span className="bottomBar"></span>
        </section>
    
        <ul className="navigation__ul">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/card">Features</Link></li>          
          <li><Link to="/form">Formulär</Link></li>
          <li><Link to="userpage">Användare</Link></li>
          <li><Link to="/bookings">FAQ</Link></li>
          <li><Link to="/adminpage">Admin</Link></li>
          <li><Link to="/contact">Kontakta Oss</Link></li>
        </ul>
    
        

        </nav>

        
           
      )

  }
}

export default Navbar