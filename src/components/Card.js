import React from "react";
import "../style/scss/main.scss";
import {Link} from 'react-router-dom'

const Card =(props)=> {
    

return (



      
    <ul className={"cards"}>
        <li className={"cards_item"}>
            <div className={"card"}>
                <img src={props.image} className={"card_image"} alt={"PICTURE ERROR!"}/>
                <div className={"card_content"}>
                    <h2 className={"card_title"}>{props.title}</h2><br/>
                    <p className={"card_text"}>{props.description}</p>
                    <p>{props.price}:-</p>          
                    <Link to="/Form" className={"cardLink"}><button className={"btn card_btn"}>Boka</button></Link>
                </div>
            </div>
        </li>
    </ul>

    )
}

export default Card;


