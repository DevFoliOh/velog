import { combineReducers } from 'redux';
import { getCardIdReducer } from './getCardId/getCardId';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['getCardIdReducer'],
};

const rootReducer = combineReducers({
  getCardIdReducer,
});

export default persistReducer(persistConfig, rootReducer);
