import React from 'react';
import PropTypes from 'prop-types';
import {
  CloseOutlined, EditOutlined, MinusOutlined, PlusOutlined,
} from '@ant-design/icons';
import { Button} from 'antd';
import { ButtonRemoveEdit, StyledCartItem, StyledInput} from './StyledCartItem';
import { Row } from '../Flex';

export const CartItem = ({
  imageUrls, name, currentPrice, subtotal
}) => (
  <div>
    <StyledCartItem>
      <div className="margin">
        <Row>
          <img src={imageUrls} alt="" />
          <p>{name}</p>
        </Row>
      </div>
      <div className="margin">
        <Row>
          <span className="price">
            {currentPrice}
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
  imageUrls: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  currentPrice: PropTypes.number.isRequired,
  // cartQuantity: PropTypes.number.isRequired,
  subtotal: PropTypes.number.isRequired,
}