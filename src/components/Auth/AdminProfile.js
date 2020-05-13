import React, {Component} from "react";
import Adminform from "../Adminform";
import AdminEdit from "../AdminEdit";
import AdminDelete from "../AdminDelete";



class AdminProfile extends Component{

    state={
        adminForm: false,
        adminEdit: false,
        adminDelete: false

    }
    
    logOut(){
        localStorage.clear();
        window.location.reload(false);
        
        
    }

     /******************************/
     /******On Click Functions******/ 
     /******************************/
    onClickFormOpen(){
        this.setState({adminForm:true})
    }

    onClickFormClose(){
        this.setState({adminForm:false})
    }

    onClickEditOpen(){
        this.setState({adminEdit:true})
    }

    onClickEditClose(){
        this.setState({adminEdit:false})
    }

    onClickDeleteOpen(){
        this.setState({adminDelete:true})
    }

    onClickDeleteClose(){
        this.setState({adminDelete:false})
    }

    
    render(){
        return(
            <div className="adminProfile-container">
                <div className="adminprofile-userContainer">
                    <div className="logedIn-as"> Inloggad Som: {this.props.userData}</div>
                    
                    <button onClick={this.logOut.bind(this)} className="adminProfile-LogOut"> Logga Ut</button>
                </div>
                <div className="adminProfile-dashboard">   
                    {this.state.adminForm ===false && this.state.adminEdit === false && this.state.adminDelete === false && <button className="adminProfile-dashBtn"  onClick={this.onClickFormOpen.bind(this)}>Lägg till Produkt</button>}
                    {this.state.adminForm ===true && <button className="adminProfile-dashBtn"  onClick={this.onClickFormClose.bind(this)}>Tillbaka</button>} 
                    {this.state.adminForm ===true &&<Adminform/>}
                        {this.state.adminForm ===false && this.state.adminEdit === false && this.state.adminDelete === false && <button onClick={this.onClickEditOpen.bind(this)}>Redigera Produkt (Fungerar Ej)</button>}
                        {this.state.adminEdit === true && <button onClick={this.onClickEditClose.bind(this)}>Tillbaka</button>}
                        {this.state.adminEdit ===true &&<AdminEdit/>}
                        {this.state.adminForm ===false && this.state.adminEdit === false && this.state.adminDelete === false && <button onClick={this.onClickDeleteOpen.bind(this)}>Ta Bort Produkt (Fungerar Ej)</button>}
                        {this.state.adminDelete === true && <button onClick={this.onClickDeleteClose.bind(this)}>Tillbaka</button>}
                        {this.state.adminDelete ===true &&<AdminDelete/>}
                </div> 
            </div>
        )
    }
}


export default AdminProfile;