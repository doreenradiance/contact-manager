import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import NewContact from './NewContact';
import ContactList from './ContactList';
import Users from './Users';
import Update from './Update';


class App extends Component {
    constructor(props){
      super(props);
      this.state = {
        users : []
      }
    
   this.addNewUser = this.addNewUser.bind(this)
    }
    addNewUser = (user) => {
      this.setState({users: [...this.state.users, user]})
      console.log (user)
    }
    render(){
      return (
        <div className='App' style ={{backgroundColor:'lightBlue',}}>
          <Navbar />
          <h1 id ='heading' style ={{color:'blue', fontWeight:'bold',}}> New Contact </h1>
          <NewContact addUser ={this.addNewUser} />
          <ContactList userInfo={this.state.users} />
          
        </div>

  
    );
  }
}


export default App;
