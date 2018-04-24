import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers";


//initial setup for store
const initialState = {};
//middleware for any asynchronist work
const middleware = [thunk];

//creating our store which will hold our redux states
const store = createStore(
   rootReducer,
   initialState,
   compose(
      applyMiddleware(...middleware),
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
   )
);

export default store;