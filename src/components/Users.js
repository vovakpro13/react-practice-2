import React, {useEffect, useReducer} from 'react';
import {requestUsers} from "../services/api";
import User from "./User";
import {Link} from "react-router-dom";

const SET_USERS = 'SET_USERS';
const SET_TOTAL_PAGES = 'SET_TOTAL_PAGES';

const reducer = (state, action) => {
    switch (action.type) {
        case SET_USERS:
            return {...state, users: action.users}
        case SET_TOTAL_PAGES:
            return {...state, total_pages: action.total_pages}
        default:
            return state;
    }
}

const Users = ({page}) => {
    const [state, dispatch] = useReducer(reducer, {users: null,  total_pages: null});
    const {users, total_pages} = state;

    useEffect(() => requestUsers(page).then(res => {
        dispatch({type: SET_USERS, users: res.data})
        dispatch({type: SET_TOTAL_PAGES, total_pages: res.total_pages});
    }), [page]);

    return (
        <div>
            {users && users.map(user => <User key={user.id} {...user}/>)}
            <div>
                {page > 1 && <Link to={`/${+page - 1}`}><button> {'<-'}</button></Link>}
                {page < total_pages && <Link to={`/${+page + 1}`}><button > {'->'}</button></Link>}
            </div>


        </div>
    );
}

export default Users;