import React, { Component } from "react";
import axios from "axios";




class AdminDelete extends Component{

    state={
        produkts: []

    }

    componentDidUpdate(){
        console.log("Component did update")
    }

    async componentDidMount(){
        axios.get("http://localhost:1337/produkts").then(  res => {            
            this.setState({produkts:res.data})
            console.log(this.state);
        })
    
    }
   

    render(){
        return(
            <div className="adminProfile-editList">
                {this.state.produkts.map((produkt) =>
                    <li className="adminProfile-editList-product" key={produkt.id}><h5>Id:{produkt.id}</h5> Titel: {produkt.title} 
                    <button onClick={()=> {
                        axios.delete("http://localhost:1337/produkts/"+produkt.id) 
                    window.location.reload(false)
                
                
                    } } >Ta Bort Produkten</button></li>
                )}
                
            </div>
        )
    }

}

export default AdminDelete 