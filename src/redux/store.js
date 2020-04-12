import { createStore, applyMiddleware } from "redux";
import rootReducer from "./rootReducer";
import { logger } from "redux-logger";
import { persistStore } from "redux-persist";

//store expects an array of middelwares from redux
const middelwares = [];

if (process.env.NODE_ENV === "development") {
  middelwares.push(logger);
}
const store = createStore(rootReducer, applyMiddleware(...middelwares));
const persistor = persistStore(store);
//creates a new provider that wraps our application
export { store, persistor };
