import React from 'react';
import PropTypes from 'prop-types';

const CityName = ({ name }) => (
  <h1>{name}</h1>
);

CityName.defaultProps = {
  name: '',
};

CityName.propTypes = {
  name: PropTypes.string,
};

export default CityName;
