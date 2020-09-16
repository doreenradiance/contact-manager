import React from 'react';
import Users from './Users';

const ContactList = (props) => {
    return (
        <div>
            {props.userInfo.map((user, index) => {
                return <Users name={user.name}
                    contact={user.contact}
                    group={user.group}
                     key={index} />
            })}
        </div>
    );
}

export default ContactList;
