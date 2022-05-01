import React from 'react';
import PropTypes from 'prop-types';
import { getCurrentMonths } from '../../../utils/dateUtils';
import './navigation.scss';
import DirectionButton from './DirectionButton';

const Navigation = ({ weekDates, switchWeek, showCurrentWeek }) => (
  <div className="navigation">
    <button onClick={showCurrentWeek} className="navigation__today-btn button">
      Today
    </button>
    <DirectionButton direction={'past'} switchWeek={switchWeek} directionClass="left" />
    <DirectionButton direction={'future'} switchWeek={switchWeek} directionClass="right" />
    <span className="navigation__displayed-month">{getCurrentMonths(weekDates).join(' - ')}</span>
  </div>
);

export default Navigation;

Navigation.propTypes = {
  weekDates: PropTypes.array,
  switchWeek: PropTypes.func,
  showCurrentWeek: PropTypes.func,
};
