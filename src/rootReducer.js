import { combineReducers } from 'redux';

import CityReducer from './City/City.reducer';

export default combineReducers({
  city: CityReducer,
});
