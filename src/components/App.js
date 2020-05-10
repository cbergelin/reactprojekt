import React, { Component } from 'react';
import Card from './Card';
import axios from "axios";


class App extends Component{

    state={
        produkts: []
    }

    componentDidUpdate(){
        console.log("Component did update")
    }

    async componentDidMount(){
        axios.get("http://localhost:1337/produkts").then(  res => {
            console.log(res.data);
            this.setState({produkts:res.data})
        })
    }
    render(){
        return(
            <div className={"Cardmain"}>  
                    {this.state.produkts.map((produkt) =>
                        <Card 
                        image={"http://localhost:1337"+produkt.image[0].formats.thumbnail.url}
                        title={produkt.title}
                        price={produkt.price}
                        description={produkt.description}
                        
                        /> 
                    
                           
                    )}
                    
                                
            </div>
        )
    }
}

export default App

