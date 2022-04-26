import React from 'react';

import './header.scss';

const Header = () => {
  return (
    <header className="header">
      <h1 className="header__title">
        <img
          className="header__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Google_Calendar_icon_%282020%29.svg/1024px-Google_Calendar_icon_%282020%29.svg.png"
        />
        <span className="header__title-text">Calendar</span>
      </h1>
      <button className="create-event-btn">+</button>
      <div className="navigation">
        <button className="navigation__today-btn button">Today</button>
        <button className="icon-button navigation__nav-icon">
          <i className="fas fa-chevron-left"></i>
        </button>
        <button className="icon-button navigation__nav-icon">
          <i className="fas fa-chevron-right"></i>
        </button>
        <span className="navigation__displayed-month"></span>
      </div>
      <div className="user">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg"
          alt="user icon"
          className="user__icon"
        />
      </div>
    </header>
  );
};

export default Header;
