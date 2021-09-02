import { applyMiddleware, createStore } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
 
import rootReducer from './RootReducer'

import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
 
const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)
let store = createStore(persistedReducer,composeWithDevTools(applyMiddleware(thunk)))
let persistor = persistStore(store)

export { store, persistor }
