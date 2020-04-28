import React from "react";
import "../style/scss/main.scss";
import {Link} from 'react-router-dom'

const Card =(props)=> {
    

return (



<div className={"Cardmain"}>

   

    <h1 className={"headerTitle"}>Please choose a time when you would like to meet us!</h1><br/>
    <ul className={"cards"}>
        <li className={"cards_item"}>
            <div className={"card"}>
                <div className={"card_image"}><img src={props.image} alt={"PICTURE ERROR!"}/></div>
                <div className={"card_content"}>
                    <h2 className={"card_title"}>Klippning</h2><br/>
                    <h5>kl16:30 20.05.2020</h5>
                    <p className={"card_text"}>Klipp dig hos våra proffs, boka en tid redan idag</p>
                   
                    
                    <Link to="/Form" className={"cardLink"}><button className={"btn card_btn"}>Boka</button></Link>
                </div>
            </div>
        </li>
        <li className={"cards_item"}>
            <div className={"card"}>
                <div className={"card_image"}><img src={props.image} alt={"PICTURE ERROR!"}/></div>
                
                <div className={"card_content"}>
                    <h2 className={"card_title"}>Hårstyling</h2><br/>
                    <h5>kl16:30 20.05.2020</h5>   
                    <p className={"card_text"}>Styla håret inför festen, ta och boka en tid redan idag</p>
                   
                    
                    <Link to="/Form" className={"cardLink"}><button className={"btn card_btn"}>Boka</button></Link>
                </div>
            </div>
        </li>
        <li className={"cards_item"}>
            <div className={"card"}>
                <div className={"card_image"}><img src={props.image} alt={"PICTURE ERROR!"}/></div>
                <div className={"card_content"}>
                    <h2 className={"card_title"}>Färgning</h2><br/>
                    <h5>kl16:30 20.05.2020</h5>
                    <p className={"card_text"}>Vill du se ut som en Backstreet Boy, färga topparna med oss! </p>
                   
                    
                    <Link to="/Form" className={"cardLink"}><button className={"btn card_btn"}>Boka</button></Link>
                </div>
            </div>
        </li>
    </ul>
</div>

    )
}

export default Card;