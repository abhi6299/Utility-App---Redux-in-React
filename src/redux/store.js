
// const redux = require("redux");
    //OR
import * as redux from "redux";
import {todoReducer} from "./reducers/todoReducer";
import {noteReducer} from "./reducers/noteReducer";
    //combineReducers funct. from redux
import { combineReducers } from "redux";

const combinedResult = combineReducers({
    todoReducerKey:todoReducer,
    noteReducerKey:noteReducer
})

export const store = redux.createStore(combinedResult);

