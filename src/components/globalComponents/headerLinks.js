import React, {PropTypes} from 'react';
import {Link, IndexLink} from 'react-router';

//STATELESS FUNCTION IS RECOMMENDED
const HeaderLinks = () => {
  return (
    <nav>
      <IndexLink to="/" activateClassName="active">Home</IndexLink>
      {" | "}
      <IndexLink to="/login" activateClassName="active">Login</IndexLink>
      {" | "}
      <IndexLink to="/courses" activateClassName="active">Courses</IndexLink>
    </nav>
  );
};

export default HeaderLinks;
