import React from 'react';
import {Link} from "react-router-dom";

const User = (props) => {
    const {id,email} = props;

    return (
        <div>
            <Link to={{pathname: `/user/${id}`, state: props}}>{id} - {email}</Link>
        </div>
    );
};

export default User;