import { combineReducers } from "redux";
import counter from "./counter/reducer";
import todo from "./todo/reducer";
import student from "./student/reducer";

export default combineReducers({counter, todo, student});
 