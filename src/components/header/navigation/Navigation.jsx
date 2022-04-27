import React from 'react';
import './navigation.scss';

const Navigation = ({ switchWeek, showCurrentWeek }) => (
  <div className="navigation">
    <button onClick={showCurrentWeek} className="navigation__today-btn button">
      Today
    </button>
    <button
      onClick={switchWeek}
      data-direction={'past'}
      className="icon-button navigation__nav-icon"
    >
      <i className="fas fa-chevron-left"></i>
    </button>
    <button
      onClick={switchWeek}
      data-direction={'future'}
      className="icon-button navigation__nav-icon"
    >
      <i className="fas fa-chevron-right" />
    </button>
    <span className="navigation__displayed-month"></span>
  </div>
);

export default Navigation;
