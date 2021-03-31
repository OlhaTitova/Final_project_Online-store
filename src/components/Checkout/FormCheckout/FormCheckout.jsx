/* eslint-disable no-unused-vars */
/* eslint-disable no-underscore-dangle */
/* eslint-disable react/jsx-props-no-spreading */
import React, {
  useMemo, useRef, useState, useEffect
} from 'react';
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
  selectProducts,
  selectShippingCost
} from '../../../store/cart/reducer';
import {StyledRadio, StyledShippingTitle} from '../StyledCheckout';
import StyledButton from '../../common/Buttons/StyledButton';
import {
  getCity, getShippingCost, PlaceOrder
} from '../../../store/cart/middleware';
import { selectIsLogin } from '../../../store/auth/reducer';
import { validName, validTelephone } from '../../../utils/constants';

const mapStateToProps = (state) => ({
  cities: selectCities(state),
  branches: selectBranches(state),
  customer: selectCustomer(state),
  shippingCost: selectShippingCost(state),
  products: selectProducts(state),
  isLogin: selectIsLogin(state)
})

const FormCheckout = connect(mapStateToProps, {getCity, getShippingCost, PlaceOrder})(({
  cities, branches, customer, getCity, shippingCost, PlaceOrder, isLogin, products
}) => {
  console.log(branches)
  const history = useHistory()

  const recipientCityRef = useRef();
  const countryRef = useRef();
  const branchSelect = useRef();

  const [valuePaymentInfo, setValuePaymentInfo] = useState(
    'Payment at the time of receipt of the goods'
  );
  
  // const onChangeHandler = async (props, values.recipientBranch) => {
  //   await getCity(props);
  //   console.log(values)
  //   // values.value = null
  // }

  // const [cities, setCities] = useState();
  // const [branch, setBranch] = useState(branches[cities[0]][0]);
  
  const onChange = (e) => {
    setValuePaymentInfo(e.target.value);
  };
  
  const onFinish = (values) => {
    PlaceOrder(products, isLogin, values, customer, shippingCost, valuePaymentInfo)
    window.scrollTo(0, 0);
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
    value: customer.telephone || '+380'
  },
  {
    name: 'country',
    value: 'Ukraine'
  },
  {
    name: 'recipientBranch',
    value: null
  },
  ]), [customer])

  const [value, setValue] = useState('')

  useEffect(() => {
    console.log(value)
  })

  const handleCityChange = async (props) => {
    await getCity(props);
    setValue('');
  }

  const handlerBranchValue = (e) => {
    // console.log(e)
    getShippingCost(recipientCityRef);
    setValue(e);
  }

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
        <Input
          placeholder="test@testmail.com"
        />
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
            message: 'FirstName must be between 2 and 25 characters',
          },
          {
            pattern: validName,
            message: 'First name cannot contain characters or numbers'
          }
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
            message: 'LastName must be between 2 and 25 characters',
          },
          {
            pattern: validName,
            message: 'Last name cannot contain characters or numbers'
          }
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
            message: 'Please input your phone number +380 XX XXX XXXX',
            min: 12,
            max: 12,
          },
          {
            pattern: validTelephone,
            message: 'Phone number cannot contain letter'
          }
        ]}
      >
        <Input placeholder="Mobile Number +380 XX XXX XXXX" />
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
        <StyledRadio value="Payment at the time of receipt of the goods">
          Payment at the time of receipt of the goods
        </StyledRadio>
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
        rules={[
          { required: true, message: 'Recipient city is required' },
          
        ]}
      >
        <Select
          placeholder="Select the city of recipient"
          onChange={handleCityChange}
          ref={recipientCityRef}
        >
          {cities.map((item) => (
            <Option value={item.Ref} key={item.Ref}>
              {/* {console.log(item.CityName)} */}
              {item.CityName}
            </Option>
          ))}
        </Select>
      </Form.Item>

      <Form.Item
        label="№ branch"
        name="recipientBranch"
        rules={[
          { required: true, message: 'Branch is required' },
        ]}
      >
        <Select
          placeholder="Select the branch of Nova Poshta of the recipient"
          onChange={handlerBranchValue}
          value={value}
          ref={branchSelect}
        >
          <Option value="Chose the branch" key={0}>
            Chose the branch
          </Option>
          {branches.map((item) => (
            <Option value={item.branchName} key={item.branchRef}>
              {/* {console.log(item.branchName)} */}
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