import {combineReducers} from "redux";

import counter from "./reducers/counter";
import tasklist from "./reducers/tasklist";

export default combineReducers({counter, tasklist})