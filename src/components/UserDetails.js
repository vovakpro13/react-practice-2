import React from 'react';

const UserDetails = ({location:{state}}) => {
    const {id, avatar, email,first_name, last_name} = state;
    return (
        <div>
            <img src={avatar} alt="avatar"/>
            <h4>{id} {first_name} {last_name}</h4>
            <p><strong>Email:</strong> {email}</p>
        </div>
    );
};

export default UserDetails;