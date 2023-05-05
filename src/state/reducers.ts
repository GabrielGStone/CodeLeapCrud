import { combineReducers } from "redux";
import { reducer as post } from "./slices/post";
import { reducer as auth } from "./slices/auth";
const rootReducer = combineReducers({
  post,
  auth,
});

export default rootReducer;
