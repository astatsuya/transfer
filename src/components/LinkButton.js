import React from 'react';
import PropTypes from 'prop-types';

const LinkButton = ({ buttonName }) => (
  <button className="link-button" type="button">
    {buttonName}
  </button>
);

LinkButton.propTypes = {
  buttonName: PropTypes.string.isRequired,
};

export default LinkButton;
