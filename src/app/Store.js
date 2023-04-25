import { configureStore } from "@reduxjs/toolkit";


import {
  authSlice,
} from "../features";

import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import thunk from "redux-thunk";

const persistConfig = {
    key: "root",
    storage : storage
  };

  const auth = persistReducer(persistConfig, authSlice);


//sauvgarder les info et toussel l compenet l kol 
export const store = configureStore({
    reducer :{
      auth: auth,

    },
    middleware: [thunk],

})

export const persistor = persistStore(store);
