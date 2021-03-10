/* eslint-disable react/jsx-props-no-spreading */
import React, {useRef} from 'react';
import { Form, Input, Select} from 'antd';
import { connect } from 'react-redux';
import {
  selectBranches, selectCities, selectCustomer,
} from '../../../store/cart/reducer';
import { getCity, getShippingCost } from '../../../store/cart/middleware';

const mapStateToProps = (state) => ({
  cities: selectCities(state),
  branches: selectBranches(state),
  customer: selectCustomer(state),
})

const FormCheckout = connect(mapStateToProps, {getCity, getShippingCost})(({
  cities, branches, customer, getCity, getShippingCost
}) => {
  const senderCityRef = useRef();
  const recipientCityRef = useRef();

  const getShippingCostHandler = () => {
    getShippingCost(senderCityRef, recipientCityRef)
  }

  const formLayout = {
    labelCol: {
      xs: {
        span: 24,
      },
      sm: {
        span: 8,
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
        <Input disabled />
      </Form.Item>
      
      <Form.Item
        label="Sender city"
        name="senderCity"
        rules={[{ required: true, message: 'Sender city is required' }]}
      >
        <Select placeholder="Select sender city" onChange={getCity} ref={senderCityRef}>
          {cities.map((item) => (
            <Option value={item.Ref} key={item.Ref}>
              {item.CityName}
            </Option>
          ))}
        </Select>
      </Form.Item>

      <Form.Item
        label="№ sender branch"
        name="SenderBranch"
        rules={[{ required: true, message: 'Branch is required' }]}
      >
        <Select placeholder="Select Sender branch">
          {branches.map((item) => (
            <Option value={item.branchRef} key={item.branchRef}>
              {item.branchName}
            </Option>
          ))}
        </Select>
      </Form.Item>

      <Form.Item
        label="Recipient city"
        name="recipientCity"
        rules={[{ required: true, message: 'Recipient city is required' }]}
      >
        <Select placeholder="Select recipient city" onChange={getCity} ref={recipientCityRef}>
          {cities.map((item) => (
            <Option value={item.Ref} key={item.Ref}>
              {item.CityName}
            </Option>
          ))}
        </Select>
      </Form.Item>

      <Form.Item
        label="№ recipient branch"
        name="recipientBranch"
        rules={[{ required: true, message: 'Branch is required' }]}
      >
        <Select placeholder="Select recipient branch" onChange={getShippingCostHandler}>
          {branches.map((item) => (
            <Option value={item.branchRef} key={item.branchRef}>
              {item.branchName}
            </Option>
          ))}
        </Select>
      </Form.Item>
    </Form>
  )
})
export default FormCheckout;