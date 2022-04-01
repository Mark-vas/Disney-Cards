import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import cardsReduser from "./CardsReduser";

const store = createStore(cardsReduser, applyMiddleware(thunk));

export default store;
