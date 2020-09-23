import React, { Component } from 'react';
import {addContact} from "./store/contactAction";
import { connect } from "react-redux";




class NewContact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            contact: "",
            group: "",
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
        console.log(this.state);
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addContact(this.state)
        console.log("submitted");

    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" onChange={this.handleChange} id='input ' style={{ backgroundColor: 'cream', }} />
                </div>
                <div>
                    <label htmlFor="contact">Contact</label>
                    <input type="numerals" name="contact" onChange={this.handleChange} id='input' style={{ backgroundColor: 'cream', }} />
                </div>
                <div>
                        Group<select value={this.state.value} onChange={this.handleChange} name="group">
                            <option value=""></option>
                            <option value="family">Family</option>
                            <option value="friend">Friend</option>
                            <option value="customer">Customer</option>
                        </select>
                </div>
                <input type="submit" value="Submit" id='input' style={{ backgroundColor: 'blue', color: 'white', borderRadius: '8px', }} />

            </form>
            
        );
    }
}

const mapDispatchToProps = {
    addContact:addContact,
}

export default connect( null, mapDispatchToProps) (NewContact);
