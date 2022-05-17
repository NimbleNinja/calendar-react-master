import React from 'react';
import PropTypes from 'prop-types';
import { getCurrentMonths } from '../../../utils/dateUtils';
import './navigation.scss';
import DirectionButton from './DirectionButton';

const Navigation = ({ weekDates, goToNextWeek, goToPrevWeek, showCurrentWeek }) => (
  <div className="navigation">
    <button onClick={showCurrentWeek} className="navigation__today-btn button">
      Today
    </button>
    <DirectionButton switchWeek={goToPrevWeek} directionClass="left" />
    <DirectionButton switchWeek={goToNextWeek} directionClass="right" />
    <span className="navigation__displayed-month">{getCurrentMonths(weekDates).join(' - ')}</span>
  </div>
);

export default Navigation;

Navigation.propTypes = {
  weekDates: PropTypes.array,
  goToNextWeek: PropTypes.func,
  goToPrevWeek: PropTypes.func,
  showCurrentWeek: PropTypes.func,
};
