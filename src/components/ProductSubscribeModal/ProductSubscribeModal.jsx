import React from 'react';
import { connect } from 'react-redux';
import {
  Modal,
  Form,
  Input,
  message
} from 'antd';
import { hideModal } from '../../store/subscriceOnProductModal/middleware'
import { selectIsOpenModal } from '../../store/subscriceOnProductModal/reducer'

const mapStateToProps = (state) => ({
  isOpen: selectIsOpenModal(state),
})

const ProductSubscribeModal = connect(mapStateToProps, { hideModal })((
  {
    isOpen,
    hideModal,
  }
) => {
  const [form] = Form.useForm()

  const onSubmit = () => {
    form.resetFields()
    hideModal()
    message.success('Thank you, you will be notified when this item is in stock!')
  };
  const onCancel = () => {
    form.resetFields()
    hideModal()
  }

  return (
    <Modal
      title="Notify on product availability"
      visible={isOpen}
      okText="Subscribe"
      onCancel={onCancel}
      okButtonProps={{htmlType: 'submit', form: 'subscribeOnProductsForm'}}
    >
      <Form name="subscribeOnProductsForm" onFinish={onSubmit} form={form}>
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
          <Input placeholder="Email" />
        </Form.Item>
      </Form>
    </Modal>
  );
})
export default ProductSubscribeModal