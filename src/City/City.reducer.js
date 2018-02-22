import { T, cond, propEq } from 'ramda';
import { INITIAL_API_STATE, API } from '../const';

const reducer = state => cond([
  [propEq('type', API.GET), ({ data }) => ({ ...state, localidade: data.localidade, cep: data.cep })],
  [T, () => state],
]);

export default (state = INITIAL_API_STATE, action) => reducer(state)(action);
