import React from 'react'
import 'antd/dist/antd.css';
import { Form } from 'antd'
import { useDispatch } from 'react-redux'
import StyledButton from '../../common/Buttons/StyledButton'
import { StyledInput, StyledForm } from './footer-style-components/Styled'
import { letterSubject, letterHtml} from './footer-config/letterConfig'
import createNewSubscribe from '../../../store/createSubscribe/middleware'

const FormSubscribe = () => {
  const dispatch = useDispatch()
  const onFinish = ({email}) => {
    dispatch(createNewSubscribe({email, letterHtml, letterSubject}))
  }
  return (
    <StyledForm name="nest-messages" onFinish={onFinish}>
      <Form.Item
        name="email"
        rules={[
          {
            type: 'email',
          },
        ]}
      >
        <StyledInput placeholder="email" />
      </Form.Item>
      <StyledButton type="primary" htmlType="submit" size="sm" padding="0" shape="round">
        Subscribe
      </StyledButton>
    </StyledForm>
  )
}

export default FormSubscribe