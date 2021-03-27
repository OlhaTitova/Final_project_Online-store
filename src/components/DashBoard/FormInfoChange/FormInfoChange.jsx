import React, { useEffect } from 'react';
import {
  Form, Input, Button
} from 'antd';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { updateCustomer } from '../../../store/customer/middleware';
import { setHideModal } from '../../../store/dashBoardModal/middleware';
import { selectModalState } from '../../../store/dashBoardModal/reducer'

const mapStateToProps = (state) => ({
  show: selectModalState(state)
})

const FormInfoChange = connect(mapStateToProps, { setHideModal })(({
  setInfo, setHideModal, show
}) => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    updateCustomer(values);
    setHideModal();
    setInfo((prev) => ({
      ...prev,
      ...values
    }))
    form.resetFields()
  }
  useEffect(() => {
    if (!show) {
      form.resetFields()
    }
  }, [form, show])
  return (
    <Form name="nest" form={form} onFinish={onFinish} datatest-id="ModalFormInfo">
      <Form.Item
        name="firstName"
        label="First name"
        rules={[{
          required: true,
          type: 'string',
          pattern: /^[a-zA-ZА-Яа-я]+$/,
          message: 'Enter correct First name'
        }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        style={{paddingBottom: '0px'}}
        name="lastName"
        label="Last name"
        rules={[{
          required: true,
          type: 'string',
          pattern: /^[a-zA-ZА-Яа-я]+$/,
          message: 'Enter correct Last name'
        }]}
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
  setHideModal: PropTypes.func.isRequired,
}
export default FormInfoChange;
