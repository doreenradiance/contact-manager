import React, { Component, Fragment } from 'react';
import Form from './Form';


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
        this.props.addUser(this.state)
        this.setState({ name: "", contact: "", group: "", })
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
                    Group<select name="group" id="select" onChange={this.handleChange} id='input' style={{ backgroundColor: 'cream', }} >
                        <option>family</option>
                        <option>friend</option>
                        <option>customer</option>
                    </select>
                </div>
                <input type="submit" value="Submit" id='input' style={{ backgroundColor: 'blue', color: 'white', borderRadius: '8px', }} />
                <hr />
            </form>
        );
    }
}

export default NewContact;
