import thunk from 'redux-thunk';
import {AsyncStorage} from 'react-native';
import {createStore, applyMiddleware} from 'redux';
import {rootReducer} from '../src/reducers/CombineReducer';
import {persistReducer, persistStore} from 'redux-persist';
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['myTheme'],
};
const PersistReducer = persistReducer(persistConfig, rootReducer);
const Store = createStore(PersistReducer, applyMiddleware(thunk));
const persistor = persistStore(Store);
export {Store, persistor};
