import React from 'react';
import StyledThead from './StyledTheadCart';

const TheadCart = () => (
  <StyledThead>
    <p className="item">Item</p>
    <p className="description" />
    <p className="price">Price</p>
    <p className="qty">Qty</p>
    <p className="subtotal">Subtotal</p>
    <p className="edit" />
  </StyledThead>
);

export default TheadCart;