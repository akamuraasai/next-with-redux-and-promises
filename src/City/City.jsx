import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const City = ({ city }) => {
  return (
    <div>
      <h1>{city.cep}</h1>
      <h1>{city.localidade}</h1>
    </div>
  );
};

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
