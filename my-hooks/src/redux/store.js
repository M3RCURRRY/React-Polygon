import { combineReducers, createStore } from "redux";
import { postReducer } from "./postReducer";

const rootReducer = combineReducers({
  posts: postReducer
})

const store = createStore(rootReducer);
export default store;