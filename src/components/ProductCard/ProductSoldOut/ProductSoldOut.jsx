import React from 'react';
import { ProductSoldOutWrapper, SoldOutIcon, SoldOutText } from './StyledProductSoldOut';

export const ProductSoldOut = () => (
  <ProductSoldOutWrapper>
    <SoldOutIcon />
    <SoldOutText>Product is sold out.</SoldOutText>
  </ProductSoldOutWrapper>
)

export default ProductSoldOut;
