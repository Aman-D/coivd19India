import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import { appReducer } from "./app/app.reducer";
import storage from "redux-persist/lib/storage"; //gives the actual local storage
import { chartReducer } from "./chart/chart.reducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: [],
};

const rootReducer = combineReducers({
  app: appReducer,
  chart: chartReducer,
});

export default persistReducer(persistConfig, rootReducer);
