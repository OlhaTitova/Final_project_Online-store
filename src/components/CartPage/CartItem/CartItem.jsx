import React from 'react';
import PropTypes from 'prop-types';
import { CloseOutlined, EditOutlined } from '@ant-design/icons';
import { Select } from 'antd';
import { StyledButton, StyledCartItem, StyledSelect} from './StyledCartItem';

export const CartItem = ({
  img, description, price, subtotal
}) => {
  const { Option } = Select;
  return (
    <div>
      <StyledCartItem>
        <img src={img} alt="" />
        <p>{description}</p>
        <span className="price">
          {price}
          <span className="price">
            ₴
          </span>
        </span>
        <div>
          <StyledSelect defaultValue="1">
            <Option value="1">1</Option>
            <Option value="2">2</Option>
            <Option value="2">3</Option>
            <Option value="2">4</Option>
            <Option value="2">5</Option>
          </StyledSelect>
        </div>
        {/* <select name="select">
        {[...Array(10)].map((x) => <option key={x} value={x}>{quantity}</option>)}
      </select> */}
        <span className="price">
          {subtotal}
          <span className="price">
            ₴
          </span>
        </span>
        <div className="column">
          <StyledButton shape="circle" icon={<CloseOutlined />} />
          <StyledButton shape="circle" icon={<EditOutlined />} />

          {/* <div className="removeButton" />
        <div className="editButton" /> */}
        </div>
      </StyledCartItem>

    </div>
  )
}
  
export default CartItem;

CartItem.propTypes = {
  img: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  // quantity: PropTypes.number.isRequired,
  subtotal: PropTypes.number.isRequired,
}