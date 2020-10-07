import React, { Component } from 'react';
import { connect } from "react-redux";
import { editContact } from "./store/contactAction";




class EditContact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: props.contact.name,
            contact: props.contact.contact,
            group: props.contact.group,
        };
           this.contact.id = props.match.params.id
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    };
    handleSubmit = (e) => {
        e.preventDefault();
        const updatedContact = {
            name: this.state.name,
            contact: this.state.contact,
            group: this.state.group,
        };
        this.props.editContact(this.contact.id, updatedContact);
        this.setState({
            name: "",
            contact: "",
            group: "",
        });
        this.props.history.push("/")
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit} className="App_contact-list">
                <div className="list-control">
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
const mapStateToProps = (state, ownProps) => ({
    contact: state.contactState.contact.find(contact => contact.id === ownProps.match.params.id)
})

const mapDispatchToProps = {
    editContact: editContact,
}

export default connect(mapStateToProps, mapDispatchToProps)(EditContact);
