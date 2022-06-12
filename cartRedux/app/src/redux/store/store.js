import { createStore, } from "redux";
import reducer from "../reducers";
import { cartReducer } from "../reducers/cartReducer";

const store =createStore(reducer);


export default store