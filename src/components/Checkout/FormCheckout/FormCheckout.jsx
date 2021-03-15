/* eslint-disable no-underscore-dangle */
/* eslint-disable react/jsx-props-no-spreading */
import React, {useRef, useState} from 'react';
import PropTypes from 'prop-types';
import {
  Form, Input, Radio, Select
} from 'antd';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom/';
import {
  selectBranches,
  selectCities,
  selectCustomer,
  selectShippingCost
} from '../../../store/cart/reducer';
import {StyledRatio, StyledShippingTitle} from '../StyledCheckout';
import StyledButton from '../../common/Buttons/StyledButton';
import {
  getCity, getShippingCost, PlaceOrder
} from '../../../store/cart/middleware';

const mapStateToProps = (state) => ({
  cities: selectCities(state),
  branches: selectBranches(state),
  customer: selectCustomer(state),
  shippingCost: selectShippingCost(state),
})

const FormCheckout = connect(mapStateToProps, {getCity, getShippingCost, PlaceOrder})(({
  cities, branches, customer, getCity, getShippingCost, shippingCost, PlaceOrder
}) => {
  const recipientCityRef = useRef();
  const countryRef = useRef();
  const branchRef = useRef();

  const [valuePaymentInfo, setValuePaymentInfo] = useState('Cash');

  const onChange = (e) => {
    setValuePaymentInfo(e.target.value);
  };

  const history = useHistory()

  const onFinish = (values) => {
    PlaceOrder(values, customer, shippingCost, valuePaymentInfo)
    history.push('/payment')
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

  const fields = [{
    name: 'email',
    value: customer.email
  },
  {
    name: 'firstName',
    value: customer.firstName
  },
  {
    name: 'lastName',
    value: customer.lastName
  },
  {
    name: 'phoneNumber',
    value: customer.telephone
  },
  {
    name: 'country',
    value: 'Ukraine'
  },
  ]

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
      <Form.Item
        label="Email"
        name="email"
        rules={[
          {
            required: true,
            message: 'Please input your email.',
          },
          {
            type: 'email',
            message: 'Entered data is not an email.',
          },
        ]}
      >
        <Input />
      </Form.Item>
      
      <Form.Item
        label="First name"
        name="firstName"
        id={customer.firstName}
        options={customer.firstName}
        rules={[
          {
            required: true,
            message: 'Please input your name.',
          },
        ]}
      >
        <Input placeholder="First name" value={customer.firstName} />
      </Form.Item>

      <Form.Item
        label="Last name"
        name="lastName"
        rules={[
          {
            required: true,
            message: 'Please input your Last name.',
          },
        ]}
      >
        <Input placeholder="Last name" value={customer.lastName} />
      </Form.Item>

      <Form.Item
        label="Phone number"
        name="phoneNumber"
        rules={[
          {
            required: true,
            message: 'Please input your phone number',
          },
        ]}
      >
        <Input placeholder="Mobile Number (+380 XX XXX XXXX)" value={customer.telephone} />
      </Form.Item>

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
        <Select placeholder="Select the city of recipient" onChange={getCity} ref={recipientCityRef}>
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
          ref={branchRef}
        >
          {branches.map((item) => (
            <Option value={item.branchRef} key={item.branchRef}>
              {item.branchName}
            </Option>
          ))}
        </Select>
      </Form.Item>
      <StyledShippingTitle>
        Payment Details:
      </StyledShippingTitle>

      <Radio.Group name="paymentInfo" onChange={onChange} value={valuePaymentInfo} style={{marginBottom: '20px'}}>
        <StyledRatio value="Cash">
          Cash
        </StyledRatio>
        <StyledRatio value="Card">
          Card
        </StyledRatio>
      </Radio.Group>
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