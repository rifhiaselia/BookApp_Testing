import {createStore, applyMiddleware, combineReducers} from 'redux';
import logger from 'redux-logger';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistStore, persistReducer} from 'redux-persist';
import Reducers from '../reducers';
import thunk from 'redux-thunk';

const Reducer = {
  appData: Reducers,
};

const persistConfig={ 
  key:'root',
  storage:AsyncStorage,
  blacklist:['appData']
}

const configPersist= persistReducer(persistConfig, combineReducers(Reducer))

// const allReducer = combineReducers(Reducer);

export const Store = createStore(configPersist, applyMiddleware(thunk, logger));
export const Persistor = persistStore(Store)
