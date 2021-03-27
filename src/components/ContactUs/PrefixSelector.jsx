import React from 'react'
import { Form, Select } from 'antd';

const { Option } = Select;

export const prefixSelector = (
  <Form.Item name="prefix" noStyle>
    <Select
      style={{
        width: 70,
      }}
    >
      <Option value="38">+38</Option>
    </Select>
  </Form.Item>
);

export default prefixSelector