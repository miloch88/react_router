import React from 'react';
import {Route, Redirect} from 'react-router-dom';

const permission = true; 

const AdminPAge = () => {
    return ( 
    <Route render={()=>(
        permission ? <h3>Panel Admina - dzień dobry</h3> :<Redirect to="/login"></Redirect>
    )}/>)
;
}
 
export default AdminPAge;