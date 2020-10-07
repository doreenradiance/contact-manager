import './App.css';

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addContact, deleteContact, getAllContacts } from './store/contactAction';
import {logoutUser} from './store/authActions';
import Navbar from './Navbar';
import NewContact from './NewContact';
import ContactList from './ContactList';



export class App extends Component {

  addNewContact = (contact) => {
    this.props.addContact({ contact: [...this.addcontact, contact] })
    console.log(contact)
  };

  deleteContact = contact_id => {
    this.props.deleteContact(contact_id);
  }

  componentDidMount() {
    this.props.getAllContacts();
  }

  render() {
    console.log(this.props)
    return (
      <div className='App' style={{ backgroundColor: 'lightBlue', }}>  

        <button onClick={this.props.logoutUser}>Logout</button>
        
        <Navbar />
        <h1 id='heading' style={{
          color: 'blue', fontWeight: 'bold', textDecoration: 'underline',
        }}> New Contact </h1>
        <NewContact addNewContact={this.addContact} />
        <div className="App_contact-list">
          {this.props.contacts.map((item,) => {
            return (
              <ContactList
                key={item.id}
                id={item.id}
                name={item.name}
                contact={item.contact}
                group={item.group}
                deleteContact={this.deleteContact}
              />
            );
          })}
        </div>

      </div>


    );
  }
}

const mapStateToProps = (state) => {
  console.log(state)
  return {
    contacts: state.contactState.contacts,
  };
}

const mapDispatchToProps = {
  addContact: addContact,
  deleteContact: deleteContact,
  getAllContacts: getAllContacts,
  logoutUser: logoutUser,

}

export default connect(mapStateToProps, mapDispatchToProps)(App);
