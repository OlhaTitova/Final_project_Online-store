/* eslint-disable no-underscore-dangle */
import React from 'react';
import {
  Descriptions, Dropdown, Button, Menu
} from 'antd';
import PropTypes from 'prop-types';
import { ContainerOrder, ShowListStyled, StyledMenu } from './StyledOrderComponent'
import UpperCaseFirstLetter from '../../../utils/upperCaseFirstLetter';
import slicePlus from '../../../utils/slicePlus';
 
const OrderComponent = ({orders}) => {
  const menu = (
    <StyledMenu style={{width: '90%'}}>
      {orders.products.map((item) => (
        <Menu.Item key={item._id}>
          {`${UpperCaseFirstLetter(item.product.name)} - ${item.cartQuantity} pc`}
        </Menu.Item>
      ))}
    </StyledMenu>
  );
  return (
    <ContainerOrder>
      <br />
      <br />
      <Descriptions
        bordered
        title={`Order number: ${orders.orderNo}`}
        size="small"
      >
        <Descriptions.Item label="Order Date">{orders.date.substr(0, 10)}</Descriptions.Item>
        <Descriptions.Item label="Payment type">{orders.paymentInfo}</Descriptions.Item>
        <Descriptions.Item label="Quantity of goods">
          {orders.products.length}
          {' '}
          <ShowListStyled>
            <Dropdown overlay={menu} placement="bottomCenter">
              <Button>Show</Button>
            </Dropdown>
          </ShowListStyled>
        </Descriptions.Item>
        <Descriptions.Item label="Shipping">{`${orders.shipping} ₴`}</Descriptions.Item>
        <Descriptions.Item label="Total amount">{`${orders.totalSum} ₴`}</Descriptions.Item>
        <Descriptions.Item label="Phone">{slicePlus(orders.mobile)}</Descriptions.Item>
      </Descriptions>
      <br />
      <br />
    </ContainerOrder>
  );
}

OrderComponent.propTypes = {
  orders: PropTypes.instanceOf(Object).isRequired
}

export default OrderComponent;
