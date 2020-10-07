import React from 'react';
import {BrowserRouter, Route} from "react-router-dom";
import App from "./App";
import EditContact from './EditContact';
import Register from './Register';
import Login from './Login';
import ProtectedRoute from './ProtectedRoute';

const Router = () => {
    return (
       <BrowserRouter>
       <ProtectedRoute exact path="/" component={App}/>
       <ProtectedRoute path="edit/:id" component={EditContact} />
       <Route path="/register" component={Register} />
       <Route path="/login" component={Login} />
       </BrowserRouter>
    );
}

export default Router;
 