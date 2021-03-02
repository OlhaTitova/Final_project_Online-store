import React from 'react';
import PropTypes from 'prop-types';
import {
  CloseOutlined, EditOutlined, MinusOutlined, PlusOutlined,
} from '@ant-design/icons';
import { Button} from 'antd';
import { ButtonRemoveEdit, StyledCartItem, StyledInput} from './StyledCartItem';
import { Row } from '../Flex';

export const CartItem = ({
  img, description, price, subtotal
}) => (
  <div>
    <StyledCartItem>
      <div className="margin">
        <Row>
          <img src={img} alt="" />
          <p>{description}</p>
        </Row>
      </div>
      <div className="margin">
        <Row>
          <span className="price">
            {price}
            <span className="price">
              ₴
            </span>
          </span>

          <Button shape="circle" icon={<MinusOutlined />} />
          <StyledInput defaultValue="1" />
          <Button shape="circle" icon={<PlusOutlined />} />
          
          <span className="subtotal">
            {subtotal}
            <span className="price">
              ₴
            </span>
          </span>

          <div className="column">
            <ButtonRemoveEdit shape="circle" icon={<CloseOutlined />} />
            <ButtonRemoveEdit shape="circle" icon={<EditOutlined />} />
          </div>
        </Row>
      </div>
    </StyledCartItem>

  </div>
)
  
export default CartItem;

CartItem.propTypes = {
  img: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  // quantity: PropTypes.number.isRequired,
  subtotal: PropTypes.number.isRequired,
}