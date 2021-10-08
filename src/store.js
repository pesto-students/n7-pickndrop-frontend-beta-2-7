import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import rootReducer from './reducers';
import {persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
const loggerMiddleware = createLogger();
const persistedReducer = persistReducer({
    key: 'root',
  storage,
}, rootReducer)

export const store = createStore(
    persistedReducer,
    applyMiddleware(
        thunkMiddleware,
        loggerMiddleware
    )
);