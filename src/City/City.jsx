import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import CityName from '../CityName/CityName';

const City = ({ city }) => (
  <div>
    <h1>{city.cep}</h1>
    <CityName name={city.localidade} />
  </div>
);

City.defaultProps = {
  city: { cep: '', localidade: '' },
};

City.propTypes = {
  city: PropTypes.shape({
    cep: PropTypes.string,
    localidade: PropTypes.string,
  }),
};

const mapStateToProps = state => ({ city: state.city });
export default connect(mapStateToProps)(City);
