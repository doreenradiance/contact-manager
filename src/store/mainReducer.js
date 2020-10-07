import ContactReducer from "./ContactReducer";
import {firebaseReducer} from 'react-redux-firebase';
import {combineReducers} from 'redux';


export default combineReducers({
    contactState:ContactReducer,
    firebase:firebaseReducer
})