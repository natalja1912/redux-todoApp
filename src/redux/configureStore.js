import { createStore, combineReducers } from "redux";
import { todos, visibilityFilter } from './reducers';

const todoApp = combineReducers({ todos, visibilityFilter });

export const store = createStore(todoApp);
