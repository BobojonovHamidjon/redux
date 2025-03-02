import { createStore } from "redux";
import { counterRedaucer } from "../Reducer/Reducer";

export const  Store = createStore(counterRedaucer)