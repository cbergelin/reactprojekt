import React, { Component } from "react";
import axios from "axios";
import AdminEditForm from "./AdminEditForm";



class AdminEdit extends Component{

    state={
        produkts: [], 
        condtion: false,

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
    onClickEditProduct(){
        
        this.setState({condtion: true})

    }

    render(){
        return(
            <div className="adminProfile-editList">
                {this.state.produkts.map((produkt) =>
                    <li className="adminProfile-editList-product" key={produkt.id}><h5>Id:{produkt.id}</h5> Titel: {produkt.title} 
                    {this.state.condtion === false && <button onClick={this.onClickEditProduct.bind(this)}>Redigera Produkten</button>}
                    {this.state.condtion === true && <AdminEditForm 
                    title={produkt.title} 
                    description={produkt.description} 
                    price={produkt.price}
                    id={produkt.id} 
                    image={"http://localhost:1337"+produkt.image[0].formats.thumbnail.url}
                    />}

                    
                    </li>
                )}
                
            </div>
        )
    }

}

export default AdminEdit