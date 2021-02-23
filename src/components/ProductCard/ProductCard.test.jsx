import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import { ProductCard } from './ProductCard';

test('ProductCard render test', () => {
  render(
    <ProductCard
      title="Apple MacBook Air 13 256Gb Space Gray (MWTJ2) 2020"
      img="https://i.citrus.ua/imgcache/size_800/uploads/shop/0/8/08d983e24e5cced849bd3ab8ac562b35.jpg"
      lastPrice="544"
      nowPrice="644"
      reviews="444"
      rating={2}
      isGoodsInStock={false}
    />
  )
})