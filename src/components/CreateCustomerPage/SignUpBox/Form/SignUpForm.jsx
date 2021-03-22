/* eslint-disable prefer-promise-reject-errors */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react'
import { useHistory } from 'react-router-dom';
import { Input } from 'antd';
import StyledFrom from './StylesSignUpForm'
import 'antd/dist/antd.css'
import { createCustomer } from '../../../../store/customer/middleware'
import StyledButton from '../../../common/Buttons/StyledButton'

const SignUpForm = () => {
  const history = useHistory()
  const onSubmit = (values) => {
    const credentials = Object.entries(values).reduce((acc, [key, value]) => {
      if (key !== 'confrimPassword' && value !== undefined) {
        acc[key] = value
        return acc
      }
      return acc
    }, {})
    credentials.isAdmin = true

    createCustomer(credentials, history)
  };
  
  const formLayout = {
    labelCol: {
      span: 10,
      offset: 0
    },
    wrapperCol: {
      span: 14,
    },
    
  }
  const tailLayout = {
    wrapperCol: { offset: 10 },
  };
  
  const passwordMatchValidator = ({ getFieldValue }) => {
    const isPasswordsMatch = (_, value) => {
      if (getFieldValue('password') !== value) {
        return Promise.reject('Passwords is not match.')
      }
      return Promise.resolve()
    }
    return {
      validator: isPasswordsMatch
    }
  }
    
  return (
    <StyledFrom
      {...formLayout}
      name="sign-up-form"
      initialValues={{
        remember: true,
      }}
      onFinish={onSubmit}
    >

      <StyledFrom.Item
        label="First name"
        name="firstName"
        rules={[
          {
            required: true,
            message: 'Please input your name.',
          },
        ]}
      >
        <Input />
      </StyledFrom.Item>

      <StyledFrom.Item
        label="Last name"
        name="lastName"
        rules={[
          {
            required: true,
            message: 'Please input your Surename.',
          },
        ]}
      >
        <Input />
      </StyledFrom.Item>

      <StyledFrom.Item
        label="Login"
        name="login"
        rules={[
          {
            required: true,
            message: 'Please set your login.',
          },
          {
            min: 3,
            message: 'Login must be between 3 and 10 characters.',
            // Backend requirement
          },
          {
            max: 10,
            message: 'Login must be between 3 and 10 characters.'
          }
        ]}
      >
        <Input />
      </StyledFrom.Item>
      
      <StyledFrom.Item
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
      </StyledFrom.Item>

      <StyledFrom.Item
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your password.',
          },
          {
            message: 'Password length must be at least 8 symbols.',
            min: 8
          },
        ]}
      >
        <Input.Password />
      </StyledFrom.Item>

      <StyledFrom.Item
        label="Confrim password"
        name="confrimPassword"
        rules={[
          {
            required: true,
            message: 'Please input your password.',
          },
          passwordMatchValidator,
        ]}
      >
        <Input.Password />
      </StyledFrom.Item>

      <StyledFrom.Item
        label="Avatar url"
        name="avatarUrl"
        rules={[
          {
            type: 'url',
            message: 'Entered data is not an url.'
          }
        ]}
      >
        <Input />
      </StyledFrom.Item>

      <StyledFrom.Item {...tailLayout}>
        <StyledButton size="lg" shape="round" htmlType="submit">Submit</StyledButton>
      </StyledFrom.Item>

    </StyledFrom>
  )
}

export default SignUpForm