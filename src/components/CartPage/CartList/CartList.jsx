import React from 'react';
// import {Button } from 'antd';
import TheadCart from '../TheadCart/TheadCart';
import { CartItem } from '../CartItem/CartItem';
import {Row, RowBetween} from '../Cart/Row';
import ButtonStyled from '../../common/Buttons/Button';
import ButtonGrey from './ButtonGrey';

const CartList = () => (
  <div>
    <TheadCart />
    <CartItem
      img="https://i.citrus.ua/imgcache/size_800/uploads/shop/0/8/08d983e24e5cced849bd3ab8ac562b35.jpg"
      description="MSI MEG Trident X 10SD-1012AU Intel i7 10700K, 2070 SUPER, 32GB RAM, 1TB SSD, Windows 10 Home, Gaming Keyboard and Mouse 3 Years Warranty"
      price="12,345.00"
    //   quantity="2"
      subtotal="24,345.00"
      key="123"
    />
    <CartItem
      img="https://i.citrus.ua/imgcache/size_800/uploads/shop/0/8/08d983e24e5cced849bd3ab8ac562b35.jpg"
      description="MSI MEG Trident X 10SD-1012AU Intel i7 10700K, 2070 SUPER, 32GB RAM, 1TB SSD, Windows 10 Home, Gaming Keyboard and Mouse 3 Years Warranty"
      price="12,345.00"
    //   quantity="2"
      subtotal="24,345.00"
      key="123"
    />
    <RowBetween>
      <Row>
        <ButtonGrey shape="round">
          Continue Shopping
        </ButtonGrey>
        <ButtonStyled shape="round" color="borderGrey">Continue Shopping</ButtonStyled>
        <ButtonStyled shape="round" color="black">Clear Shopping Cart</ButtonStyled>
        {/* <Button shape="round">Clear Shopping Cart</Button> */}
      </Row>
      {/* <Button shape="round">Update Shopping Cart</Button> */}
      <ButtonStyled shape="round" color="black">Update Shopping Cart</ButtonStyled>

    </RowBetween>
  </div>
);

export default CartList;