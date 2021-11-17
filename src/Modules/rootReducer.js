import { combineReducers } from 'redux';
import { getCardReducer } from './getCardData/getCardData';

// catReducer 를 rootReducer 로 합쳐 내보냄
const rootReducer = combineReducers({
  getCardReducer,
});

export default rootReducer;
