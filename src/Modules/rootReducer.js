import { combineReducers } from 'redux';
import { getCardIdReducer } from './getCardId/getCardId';

// catReducer 를 rootReducer 로 합쳐 내보냄
const rootReducer = combineReducers({
  getCardIdReducer,
});

export default rootReducer;
