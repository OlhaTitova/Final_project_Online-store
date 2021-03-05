import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import close from '../../../images/header/Close.svg';

import {NavUserContainer, Close}
  from './UserPopUpStyled';

const UserPopUp = ({isOpenUser, setIsOpenUser}) => {
  const openSlideUser = {
    hidden: {
      x: 50,
      scale: 0,
      opacity: 0,
      transition: {
        delay: 0.35,
        type: 'spring',
        stiffness: 200,
        damping: 40
      }
    },
    show: {
      opacity: 1,
      x: -180,
      scale: 1,
      transition: {
        delay: 0.35,
        type: 'spring',
        stiffness: 200,
        damping: 40
      }
    }
  };
  useEffect(() => {
    window.addEventListener('click', (e) => {
      if (e.target.closest('#userBtn') !== null) {
        setIsOpenUser(() => true);
        return
      }
      if (isOpenUser) {
        if (e.target.closest('#usePopUp') === null) {
          setIsOpenUser(() => false)
        }
      }
    })
    // console.log(isOpenUser);
  }, [isOpenUser, setIsOpenUser])
  return (
    <NavUserContainer
      id="usePopUp"
      variants={openSlideUser}
      initial={false}
      animate={isOpenUser ? 'show' : 'hidden'}
    >
      <ul>
        <li>My Account</li>
        <li>My Wish List (0)</li>
        <li>Compare (0)</li>
        <Link to="/signup">
          <li>Create an Account</li>
        </Link>
        <Link to="/signin">
          <li>Sign In</li>
        </Link>
        <Close onClick={() => setIsOpenUser(false)}>
          <img src={close} alt="close" />
        </Close>
      </ul>
    </NavUserContainer>
  );
}
UserPopUp.propTypes = {
  isOpenUser: PropTypes.bool.isRequired,
  setIsOpenUser: PropTypes.func.isRequired
}

export default UserPopUp;