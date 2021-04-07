import React from 'react';
import {
  Form, Input, Button
} from 'antd';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { updateCustomer } from '../../../store/customer/middleware';
import { setHideModal } from '../../../store/dashBoardModal/middleware';
import { validName } from '../../../utils/constants'

const FormInfoChange = connect(null, { setHideModal })(({
  setInfo, setHideModal
}) => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    updateCustomer(values, 'Your contact information has been changed');
    setHideModal();
    setInfo((prev) => ({
      ...prev,
      ...values
    }))
    form.resetFields()
  }
  return (
    <Form name="nest" form={form} onFinish={onFinish} datatest-id="ModalFormInfo">
      <Form.Item
        name="firstName"
        label="First name"
        rules={[
          {
            required: true,
            message: 'Please input your name.',
          },
          {
            pattern: validName,
            message: 'Allowed characters is a-z, а-я.'
          },
          {
            min: 2,
            max: 25,
            message: 'First name must be beetwen 2 and 25 characters.'
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        style={{paddingBottom: '0px'}}
        name="lastName"
        label="Last name"
        rules={[
          {
            required: true,
            message: 'Please input your last name.',
          },
          {
            pattern: validName,
            message: 'Allowed characters is a-z, а-я.'
          },
          {
            min: 2,
            max: 25,
            message: 'Last Name must be beetwen 2 and 25 characters.'
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
})
FormInfoChange.propTypes = {
  setInfo: PropTypes.func.isRequired,
  setHideModal: PropTypes.func
}
export default FormInfoChange;
