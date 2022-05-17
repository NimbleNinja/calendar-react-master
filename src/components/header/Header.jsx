import React, { useState } from 'react';
import PropTypes from 'prop-types';
import HeaderTitle from './HeaderTitle';
import CreateEventBtn from './buttons/CreateEventBtn';
import Navigation from './navigation/Navigation';
import User from './user/User';
import Modal from '../modal/Modal';
import './header.scss';

const Header = ({ weekDates, goToNextWeek, goToPrevWeek, showCurrentWeek, createNewEvent }) => {
  const [modalVisibility, setModalVisibility] = useState(false);

  const showModal = () => {
    setModalVisibility(true);
  };

  const closeModal = e => {
    const { canDelete } = e.target.dataset;
    if (canDelete) {
      setModalVisibility(false);
    }
  };

  return (
    <header className="header">
      <HeaderTitle />
      <CreateEventBtn showModal={showModal} />
      <Navigation
        weekDates={weekDates}
        goToNextWeek={goToNextWeek}
        goToPrevWeek={goToPrevWeek}
        showCurrentWeek={showCurrentWeek}
      />
      <User />
      <Modal visible={modalVisibility} createNewEvent={createNewEvent} closeModal={closeModal} />
    </header>
  );
};

export default Header;

Header.propTypes = {
  weekDates: PropTypes.array,
  goToPrevWeek: PropTypes.func,
  goToNextWeek: PropTypes.func,
  showCurrentWeek: PropTypes.func,
  createNewEvent: PropTypes.func,
};
