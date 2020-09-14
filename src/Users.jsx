import React from 'react';

const Users = (props) => {
    return (
        <div style= {{backgroundColor:'lightBlue'}}>
            <h1 id ='heading 2' style ={{color:'blue', fontSize:'medium', fontStyle:'italic'}}>Contact List</h1>
            <p>Name: {props.name} </p>
            <p>Contact: {props.contact} </p>
            <p>Group: {props.group} </p>
            <button className ='update' style={{backgroundColor:'blue', borderRadius:'8px'}}>update</button> <button className ='delete' style={{backgroundColor:'blue', borderRadius:'8px'}}>delete</button>
        </div>
    );
    }

export default Users;
