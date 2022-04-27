import React from 'react';
import HeaderTitle from './HeaderTitle';

import './header.scss';
import CreateEventBtn from './buttons/CreateEventBtn';
import Navigation from './navigation/Navigation';
import User from './user/User';

const Header = ({ switchWeek }) => (
  <header className="header">
    <HeaderTitle />
    <CreateEventBtn />
    <Navigation switchWeek={switchWeek} />
    <User />
  </header>
);

export default Header;
