import { applyMiddleware, createStore } from "@reduxjs/toolkit";
import rootReducer from "./reducer/rootReducer";
import logger from "redux-logger";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { createWrapper } from "next-redux-wrapper";
const middleware = [thunk, logger];

export const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(...middleware))
);
const makeStore = () => store


export const wrapper = createWrapper(makeStore);