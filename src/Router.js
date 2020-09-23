import React from 'react';
import {BrowserRouter, Route} from "react-router-dom";
import App from "./App";
import EditContact from './EditContact';

const Router = () => {
    return (
       <BrowserRouter>
       <Route exact path="/" component={App}/>
       <Route path="edit/:id" component={EditContact} />
       </BrowserRouter>
    );
}

export default Router;
 