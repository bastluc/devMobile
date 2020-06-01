import {createStore} from "redux";
import favoritesReducer from './Reducers/favoritesReducer'
import ExpoFileSystemStorage from "redux-persist-expo-filesystem";
import { persistStore, persistReducer } from "redux-persist";

const persistConfig = {
    key: "root",
    storage: ExpoFileSystemStorage
};

const persistedReducer = persistReducer(persistConfig, favoritesReducer);

export default () => {
    let store = createStore(persistedReducer);
    let persistor = persistStore(store);
    return {store, persistor};
}