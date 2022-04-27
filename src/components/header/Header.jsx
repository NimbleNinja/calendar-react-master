import React from 'react';
import HeaderTitle from './HeaderTitle';

import './header.scss';
import CreateEventBtn from './buttons/CreateEventBtn';
import Navigation from './navigation/Navigation';
import User from './user/User';

const Header = ({ showModal, weekDates, switchWeek, showCurrentWeek }) => (
  <header className="header">
    <HeaderTitle />
    <CreateEventBtn showModal={showModal} />
    <Navigation weekDates={weekDates} switchWeek={switchWeek} showCurrentWeek={showCurrentWeek} />
    <User />
  </header>
);

export default Header;
