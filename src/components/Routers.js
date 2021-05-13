import React from 'react';
import {Route} from "react-router-dom";
import Users from "./Users";
import UserDetails from "./UserDetails";

const Routers = () => {
    return (
        <div>
            <Route exact path={'/'} render={() => <Users page={1} /> }/>
            <Route exact path={'/:page'} render={({match: {params:{page}}}) => <Users page={page} /> }/>
            <Route exact path={'/user/:id'} render={(props) => <UserDetails {...props} /> }/>
        </div>
    );
}

export default Routers;