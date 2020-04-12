import { createStore, applyMiddleware } from "redux";
import rootReducer from "./rootReducer";
import { logger } from "redux-logger";
import { persistStore } from "redux-persist";

//store expects an array of middelwares from redux
const middelwares = [logger];
console.log(process.env.NODE_ENV);
const store = createStore(
  rootReducer,
  process.env.NODE_ENV == "development"
    ? applyMiddleware(...middelwares)
    : applyMiddleware([])
);
const persistor = persistStore(store);
//creates a new provider that wraps our application
export { store, persistor };
