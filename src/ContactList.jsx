import React from 'react';
import {Link} from "react-router-dom";

const ContactList = ( {name,contact,  group, id, deleteContact}) => {
    const handleClick = () =>{
       deleteContact (id)
    }
    return (
        <div style={{ backgroundColor: 'lightBlue' }}>
            <h1 className='heading 2' style={{ color: 'blue', fontSize: 'medium', fontStyle: 'italic', textDecoration: 'underline', }}>List Of Contacts</h1>
            <p>Name: {name} </p>
            <p>Contact: {contact} </p>
            <p>Group: {group} </p>
            <button onClick = {handleClick} className='delete' style={{color:"white", backgroundColor: 'blue', borderRadius: '8px' }}>Delete Contact</button> 
            <Link to ={`/edit/${id}`}>Edit Contact</Link>
            <hr />
  
        </div>
    );
}

export default ContactList;
