import React from "react";
import App from "./components/App";
import rootReducer from "./Data/Indexroot";

import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import { createStore } from "redux";

const Medshub24by7 = () => {
  const persistConfig = {
    key: "root",
    storage,
  };

  const persistedReducer = persistReducer(persistConfig, rootReducer);

  let store = createStore(persistedReducer);
  let persistor = persistStore(store);

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  );
};

export default Medshub24by7;
