import React from 'react';
import TheadCart from '../TheadCart/TheadCart';
import { CartItem } from '../CartItem/CartItem';
import { ColumnRowBetween, RowColumn} from '../Flex';
import StyledButton from '../../common/Buttons/StyledButton';
import StyledCartList from './StyledCartList';

const CartList = () => (
  <StyledCartList>
    <TheadCart />
    <CartItem
      img="https://i.citrus.ua/imgcache/size_800/uploads/shop/0/8/08d983e24e5cced849bd3ab8ac562b35.jpg"
      description="MSI MEG Trident X 10SD-1012AU Intel i7 10700K, 2070 SUPER, 32GB RAM, 1TB SSD, Windows 10 Home, Gaming Keyboard and Mouse 3 Years Warranty"
      price="12,345.00"
    //   quantity="2"
      subtotal="24,345.00"
      key="1"
    />
    <CartItem
      img="https://i.citrus.ua/imgcache/size_800/uploads/shop/0/8/08d983e24e5cced849bd3ab8ac562b35.jpg"
      description="MSI MEG Trident X 10SD-1012AU Intel i7 10700K, 2070 SUPER, 32GB RAM, 1TB SSD, Windows 10 Home, Gaming Keyboard and Mouse 3 Years Warranty"
      price="12,345.00"
    //   quantity="2"
      subtotal="24,345.00"
      key="2"
    />
    <CartItem
      img="https://i.citrus.ua/imgcache/size_800/uploads/shop/0/8/08d983e24e5cced849bd3ab8ac562b35.jpg"
      description="MSI MEG Trident X 10SD-1012AU Intel i7 10700K, 2070 SUPER, 32GB RAM, 1TB SSD, Windows 10 Home, Gaming Keyboard and Mouse 3 Years Warranty"
      price="12,345.00"
    //   quantity="2"
      subtotal="24,345.00"
      key="3"
    />
    <ColumnRowBetween>
      <RowColumn>
        <div className="margin">
          <StyledButton size="xl" smallHeight shape="round" color="borderGrey">Continue Shopping</StyledButton>
        </div>
        <div className="margin">
          <StyledButton size="xl" smallHeight shape="round" color="black">Clear Shopping Cart</StyledButton>
        </div>

      </RowColumn>
      <div className="margin">

        <StyledButton size="xl" smallHeight shape="round" color="black">
          Update Shopping Cart
        </StyledButton>
      </div>

    </ColumnRowBetween>
  </StyledCartList>
);

export default CartList;