/* eslint-disable no-underscore-dangle */
/* eslint-disable react/jsx-props-no-spreading */
import React, {useRef, useState} from 'react';
import {
  Form, Input, message, Radio, Select
} from 'antd';
import { connect } from 'react-redux';
import axios from 'axios';
import {
  selectBranches,
  selectCartSummary,
  selectCities,
  selectCustomer,
  selectProducts,
  selectShippingCost
} from '../../../store/cart/reducer';
import { getCity, getShippingCost } from '../../../store/cart/middleware';
import {StyledRatio, StyledShippingTitle} from '../StyledCheckout';
import StyledButton from '../../common/Buttons/StyledButton';
import { headers } from '../../../store/headers';

const mapStateToProps = (state) => ({
  cities: selectCities(state),
  branches: selectBranches(state),
  customer: selectCustomer(state),
  shippingCost: selectShippingCost(state),
  products: selectProducts(state),
  summary: selectCartSummary(state),
})

const FormCheckout = connect(mapStateToProps, {getCity, getShippingCost})(({
  cities, branches, customer, getCity, getShippingCost, shippingCost, products
}) => {
  const recipientCityRef = useRef();
  const countryRef = useRef();
  const branchRef = useRef();

  const [valuePaymentInfo, setValuePaymentInfo] = useState('Cash');

  const onChange = (e) => {
    setValuePaymentInfo(e.target.value);
  };

  const PlaceOrder = (values) => {
    axios
      .post('/orders', {
        canceled: false,
        products: JSON.stringify(products),
        customerId: {
          _id: customer._id
        },
        deliveryAddress: JSON.stringify({
          country: values.country,
          city: values.recipientCity,
          address: values.recipientBranch,
        }),
        shipping: JSON.stringify(shippingCost),
        paymentInfo: JSON.stringify(valuePaymentInfo),
        status: 'not shipped',
        email: customer.email,
        mobile: customer.telephone,
        letterSubject: 'Thank you for order! You are welcome!',
        letterHtml: '<h1>Your order is placed. OrderNo and details about order in your dashboard.</h1>'
      }, {headers})
      .then((newOrder) => {
        message.success(`Thank you for order! Your Order № is ${newOrder.data.order.orderNo}`)
        console.log(newOrder)
      })
      .catch((err) => {
        message.error(`Your order is not placed. ${err.response}`)
        console.log(err.response)
      });
  }

  const onFinish = (values) => {
    PlaceOrder(values, valuePaymentInfo)
    // console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
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
      onFinishFailed={onFinishFailed}
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
        Select a payment method:
      </StyledShippingTitle>

      <Radio.Group name="paymentInfo" onChange={onChange} value={valuePaymentInfo}>
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