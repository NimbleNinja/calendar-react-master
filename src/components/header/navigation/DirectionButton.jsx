import React from 'react';
import PropTypes from 'prop-types';

const DirectionButton = ({ direction, switchWeek, directionClass }) => (
  <button
    onClick={switchWeek}
    data-direction={direction}
    className="icon-button navigation__nav-icon"
  >
    <i className={`fas fa-chevron-${directionClass}`} />
  </button>
);

export default DirectionButton;

DirectionButton.propTypes = {
  direction: PropTypes.string,
  switchWeek: PropTypes.func,
  directionClass: PropTypes.string,
};
