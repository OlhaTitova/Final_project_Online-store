/* eslint-disable no-underscore-dangle */
/* eslint-disable react/jsx-props-no-spreading */
import React, {useMemo, useRef, useState} from 'react';
import PropTypes from 'prop-types';
import {
  Form, Input, Radio, Row, Select
} from 'antd';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom/';
import {
  selectBranches,
  selectCities,
  selectCustomer,
  selectProducts,
  selectShippingCost
} from '../../../store/cart/reducer';
import {StyledRadio, StyledShippingTitle} from '../StyledCheckout';
import StyledButton from '../../common/Buttons/StyledButton';
import {
  getCity, getShippingCost, PlaceOrder
} from '../../../store/cart/middleware';

const mapStateToProps = (state) => ({
  cities: selectCities(state),
  branches: selectBranches(state),
  customer: selectCustomer(state),
  shippingCost: selectShippingCost(state),
  products: selectProducts(state),
  isLogin: state.auth.isLogin
})

const FormCheckout = connect(mapStateToProps, {getCity, getShippingCost, PlaceOrder})(({
  cities, branches, customer, getCity, getShippingCost, shippingCost, PlaceOrder, isLogin, products
}) => {
  const recipientCityRef = useRef();
  const countryRef = useRef();
  const branchName = useRef();

  const [valuePaymentInfo, setValuePaymentInfo] = useState('Cash');

  const onChange = (e) => {
    setValuePaymentInfo(e.target.value);
  };

  const history = useHistory()

  const onFinish = (values) => {
    PlaceOrder(products, isLogin, values, customer, shippingCost, valuePaymentInfo)
    history.push('/order')
  };

  const formLayout = {
    labelCol: {
      xs: {
        span: 24,
      },
      sm: {
        span: 6,
      },
      md: {
        span: 8,
      },
      lg: {
        span: 7,
      },
    },
    wrapperCol: {
      xs: {
        span: 24,
      },
      sm: {
        span: 16,
      },
      md: {
        span: 16,
      },
      lg: {
        span: 12,
      },
    },
  };
        
  const { Option } = Select;

  const fields = useMemo(() => ([{
    name: 'email',
    value: customer.email || null
  },
  {
    name: 'firstName',
    value: customer.firstName || null
  },
  {
    name: 'lastName',
    value: customer.lastName || null
  },
  {
    name: 'phoneNumber',
    value: customer.telephone || null
  },
  {
    name: 'country',
    value: 'Ukraine'
  },
  ]), [customer])

  return (
    <Form
      {...formLayout}
      name="checkout-form"
      fields={fields}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
    >
      <StyledShippingTitle>
        Customer Details:
      </StyledShippingTitle>

      <Form.Item
        label="Email"
        name="email"
        rules={[
          {
            required: true,
            message: 'Please input your active email.',
          },
          {
            type: 'email',
            message: 'Entered data is not an email.',
          },
        ]}
      >
        <Input placeholder="test@testmail.com" />
      </Form.Item>
      
      <Form.Item
        label="First name"
        name="firstName"
        rules={[
          {
            required: true,
            message: 'Please input your name.',
          },
          {
            type: 'string',
            min: 2,
            max: 25,
          },
        ]}
      >
        <Input placeholder="First name" />
      </Form.Item>

      <Form.Item
        label="Last name"
        name="lastName"
        rules={[
          {
            required: true,
            message: 'Please input your Last name.',
          },
          {
            type: 'string',
            min: 2,
            max: 25,
          },
        ]}
      >
        <Input placeholder="Last name" />
      </Form.Item>

      <Form.Item
        label="Phone number"
        name="phoneNumber"
        rules={[
          {
            required: true,
            message: 'Please input your phone number 380 XX XXX XXXX',
            min: 12,
            max: 12,
          },
        ]}
      >
        <Input placeholder="Mobile Number 380 XX XXX XXXX" />
      </Form.Item>

      <StyledShippingTitle>
        Payment Details:
      </StyledShippingTitle>

      <Radio.Group
        name="paymentInfo"
        onChange={onChange}
        value={valuePaymentInfo}
        style={{marginBottom: '20px'}}
      >
        <Row>
          <StyledRadio value="Cash">
            Cash
          </StyledRadio>
          <StyledRadio value="Card">
            Card
          </StyledRadio>
        </Row>
      </Radio.Group>
      
      <StyledShippingTitle>
        Shipping Details:
      </StyledShippingTitle>

      <Form.Item
        label="Country"
        name="country"
        rules={[{ required: true, message: 'Country is required' }]}
      >
        <Input disabled ref={countryRef} />
      </Form.Item>

      <Form.Item
        label="City"
        name="recipientCity"
        rules={[{ required: true, message: 'Recipient city is required' }]}
      >
        <Select
          placeholder="Select the city of recipient"
          onChange={getCity}
          ref={recipientCityRef}
        >
          {cities.map((item) => (
            <Option value={item.Ref} key={item.Ref}>
              {item.CityName}
            </Option>
          ))}
        </Select>
      </Form.Item>

      <Form.Item
        label="№ branch"
        name="recipientBranch"
        rules={[{ required: true, message: 'Branch is required' }]}
      >
        <Select
          placeholder="Select the branch of Nova Poshta of the recipient"
          onChange={() => getShippingCost(recipientCityRef)}
          ref={branchName}
        >
          {branches.map((item) => (
            <Option value={item.branchName} key={item.branchRef}>
              {item.branchName}
            </Option>
          ))}
        </Select>
      </Form.Item>
      
      <StyledButton shape="round" htmlType="submit">
        Place Order
      </StyledButton>

    </Form>
  )
})

export default FormCheckout;

FormCheckout.propTypes = {
  cities: PropTypes.string,
  branches: PropTypes.string,
  shippingCost: PropTypes.number,
  getCity: PropTypes.func,
  getShippingCost: PropTypes.func,
  PlaceOrder: PropTypes.func,
  customer: PropTypes.shape({
    telephone: PropTypes.string,
    lastName: PropTypes.string,
    firstName: PropTypes.string,
    email: PropTypes.string,
  }),
}