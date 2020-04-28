import React, { Component } from 'react';
import "../style/scss/main.scss";

class Form extends Component{

    constructor(props){
        super(props)
    

        this.state ={
            name: undefined,
            appointmentTime: undefined,
            phoneNumber: undefined
        }

    }

handleOnChangeName = (e)=>{
    this.setState({name: e.target.value})
}
handleOnChangeTime = (e)=>{
    this.setState({appointmentTime: e.target.value})
}
handleOnChangePhone = (e)=> {
    this.setState({phoneNumber: e.target.value})
}


handleBookingSubmit(e){
    e.preventDefault()

    

}


    render(){
        return (
            <div>
                <form onSubmit={this.handleBookingSubmit}>
                    <input type={"text"} placeholder={"Namn"} onChange={this.handleOnChangeName}></input>{this.state.name}<br /><br />
                    <select name="" id="" onChange={this.handleOnChangeTime}>
                        <option value="10:00">10:00</option>
                        <option value="10:30">10:30</option>
                        <option value="11:00">11:00</option>
                        <option value="11:30">11:30</option>
                        <option value="12:00">12:00</option>
                        <option value="12:30">12:30</option>
                        <option value="13:00">13:00</option>

                    </select> {this.state.appointmentTime}<br /><br />
                    <input type={"tel"} placeholder={"Telefonnummer"} onChange={this.handleOnChangePhone}></input>{this.state.phoneNumber} <br /><br />
                    <button type={"submit"} onSubmit={this.handleBookingSubmit}>Bekräfta Bokning</button>
                </form>
            </div>
        )
    }

}

export default Form