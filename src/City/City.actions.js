import fetch from 'isomorphic-unfetch';
import { API, API_HOME } from '../const';

export default cep =>
  dispatch =>
    fetch(`${API_HOME}${cep}/json`)
      .then(res => res.json())
      .then(data => dispatch({ type: API.GET, data }));
