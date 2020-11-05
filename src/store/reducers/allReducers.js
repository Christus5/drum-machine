import keysReducer from "./keysReducer";
import { combineReducers } from "redux";

const allReducer = combineReducers({
    keys: keysReducer
});

export default allReducer;