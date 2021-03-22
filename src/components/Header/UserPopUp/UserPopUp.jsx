import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { authLogOut } from '../../../store/auth/middleware';
import close from '../../../images/header/Close.svg';
import { NavUserContainer, Close } from './UserPopUpStyled';
import WishlistLI from './WishlistLI/WishlistLI'

const mapStateToProps = (state) => ({
  isLogin: state.auth.isLogin
})

const UserPopUp = connect(mapStateToProps, { authLogOut })(({
  isOpenUser, setIsOpenUser, isLogin, authLogOut
}) => {
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
        {isLogin && <WishlistLI />}
        <li>Compare (0)</li>
        {isLogin ? null : (
          <NavLink to="/signup">
            <li>Create an Account</li>
          </NavLink>
        )}
        {isLogin
          ? (
            <NavLink to="/" onClick={authLogOut}>
              <li>LogOut</li>
            </NavLink>
          ) : (
            <NavLink to="/signin">
              <li>Sign In</li>
            </NavLink>
          )}
        <Close data-testid="closeImg" onClick={() => setIsOpenUser(false)}>
          <img src={close} alt="close" />
        </Close>
      </ul>
    </NavUserContainer>
  );
})
UserPopUp.propTypes = {
  isOpenUser: PropTypes.bool.isRequired,
  setIsOpenUser: PropTypes.func.isRequired
}

export default UserPopUp;