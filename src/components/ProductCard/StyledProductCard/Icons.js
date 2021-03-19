import {ShoppingCartOutlined } from '@ant-design/icons';
import styled from 'styled-components';

export const StyledCardIconAddToCartWrapper = styled.button`
  position: absolute;
  top: 9px;
  right: 13px;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  width: 32px;
  height: 32px;

  background-color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  margin-bottom: 4px;
  padding: 0;
  
  :hover {
    background-color: #e9ffee;
  }
`

export const StyledCardIconAddToCart = styled(ShoppingCartOutlined)`
  color: #78A962;
  font-size: 20px;

  transition: .3s;
  z-index: 1;

  padding: 3px;
`

export default StyledCardIconAddToCartWrapper
