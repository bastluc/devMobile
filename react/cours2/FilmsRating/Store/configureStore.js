import {createStore, combineReducers, compose, applyMiddleware} from 'redux'
import {persistStore, persistReducer} from 'redux-persist'
import AsyncStorage from '@react-native-community/async-storage';

import filmsReducer from './Reducers/filmsReducer'

const persistConfig = {
    key: "root",
    storage: AsyncStorage
};

const persistedReducer = persistReducer(persistConfig, filmsReducer);

let composeEnhancers = compose;

export const store = createStore(
    persistedReducer
)

export const persistor = persistStore(store);