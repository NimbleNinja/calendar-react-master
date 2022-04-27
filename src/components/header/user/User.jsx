import React from 'react';
import './user.scss';

const User = () => {
  return (
    <div className="user header__user">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg"
        alt="user icon"
        className="user__icon"
      />
    </div>
  );
};

export default User;
