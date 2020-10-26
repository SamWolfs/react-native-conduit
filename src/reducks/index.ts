import article from "./article";
import user from "./user";
import { combineReducers } from 'redux';


export default combineReducers({user: user, article: article});