import { RightOutlined } from '@ant-design/icons';
import React from 'react';
import { NavLink } from 'react-router-dom';
import StyledRoutingCart from './StyledRoutingCart';

const RoutingCart = () => (
  <StyledRoutingCart>
    <NavLink className="a" to="/">
      Home
    </NavLink>
    <span><RightOutlined style={{ fontSize: '7px' }} /></span>
    <NavLink className="a" to="/signin">
      Login
    </NavLink>
  </StyledRoutingCart>
)

export default RoutingCart;
