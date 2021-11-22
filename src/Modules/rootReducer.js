import { combineReducers } from 'redux';
import { getCardReducer } from './getCard/getCard';
import { currentCommentReducer } from './currentComment/currentComment';
import { getImageReducer } from './getImage/getImage';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['getCardReducer'],
};

const rootReducer = combineReducers({
  getCardReducer,
  currentCommentReducer,
  getImageReducer,
});

export default persistReducer(persistConfig, rootReducer);
