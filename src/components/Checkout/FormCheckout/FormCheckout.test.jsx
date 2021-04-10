import React from 'react';
import { render } from '@testing-library/react';
import { FormCheckoutComponent } from './FormCheckout';
import { productsMock } from '../../../mocks/products';
import { citiesMock } from '../../../mocks/cities';
import { branchesMock } from '../../../mocks/branches';

describe('FormCheckoutComponent', () => {
  test('render', () => {
    const {asFragment} = render(<FormCheckoutComponent
      products={productsMock}
      shippingCost={121}
      customer={{
        customerNo: '82724063',
        email: 'o.titova.ua@gmail.com',
        enabled: true,
        firstName: 'test',
        isAdmin: true,
        lastName: 'test',
        telephone: '+380660788828',
        _id: '602ff192ad29b70015add9ab'
      }}
      branches={branchesMock}
      cities={citiesMock}
      getBranches={() => {}}
      placeOrder={() => {}}
      getShippingCost={() => {}}
    />)
    expect(asFragment()).toMatchSnapshot()
  });

  it('handle', () => {
    
  });
})
