import React from 'react';
import { unmountComponentAtNode } from 'react-dom';
import { render } from 'react-dom/cjs/react-dom.development';
import { OrderInfoComponent } from './OrderInfo';

let container = null
beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});
afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

test('render OrderInfoComponent', () => {
  render(<OrderInfoComponent
    order={{
      deliveryAddress: {country: 'Ukraine', city: 'db5c88f0-391c-11dd-90d9-001a92567626', branch: 'Отделение №2: ул. Академика Янгеля, 40'},
      email: 'o.titova.ua@gmail.com',
      firstName: 'test',
      letterHtml: '<h1>Your order is placed. Our manager will contact you soon.</h1>',
      letterSubject: 'test, thank you for order!',
      mobile: '+380660788828',
      orderNo: 8395086,
      paymentInfo: 'Payment at the time of receipt of the goods',
      shipping: 121,
      totalSum: 117400,
      _id: '6070d130058f4e00154bbe23'
    }}
    cities={{
      CityName: 'Kyiv',
      Ref: '8d5a980d-391c-11dd-90d9-001a92567626'
    }}
    isLoading
  />, container)
})