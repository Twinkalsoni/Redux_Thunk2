import { createStore,  applyMiddleware, combineReducers } from "redux";
import thunk from 'redux-thunk'
import { composeWithDevTools } from "redux-devtools-extension";
import { userReducer } from "./Redux/reducers/userreducer";

const rootReducer = combineReducers({
    usersList: userReducer,
})
const initialstate = {};
const middleware = [thunk];
const store = createStore(
    rootReducer,
    initialstate,
    composeWithDevTools(applyMiddleware(...middleware))
);
export default store;