import {
  Checkbox, Form, InputNumber, Menu
} from 'antd'
import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types';
import { brands as defBrands, categories as defCategories, checkFilterConfig } from '../../filterConfig'
import { StyledCheckbox } from '../StylesCatalogfilter'

export const FormMenu = ({filter}) => {
  const [{brand, categories}, setConfig] = useState({brand: defBrands, categories: defCategories})

  const checkConfig = async (filter) => {
    const newConfig = filter.categories ? await checkFilterConfig(filter) : {}
    if (Object.keys(newConfig).length) {
      setConfig((prev) => ({
        ...prev,
        ...newConfig
      }))
    } else setConfig({brand: defBrands, categories: defCategories})
  }

  useEffect(() => {
    checkConfig(filter)
  }, [filter])

  return (
    <Menu defaultOpenKeys={['сategories', 'brands']} mode="inline">
      <Menu.SubMenu key="сategories" title="Сategories">
        <Form.Item name="categories" noStyle>
          <Checkbox.Group style={{width: '100%'}}>
            {categories?.map(({value, title}) => (
              <StyledCheckbox
                key={value}
                value={value}
              >
                {title}
              </StyledCheckbox>
            ))}
          </Checkbox.Group>
        </Form.Item>
      </Menu.SubMenu>
      <Menu.SubMenu key="brands" title="Brand">
        <Form.Item name="brand" noStyle>
          <Checkbox.Group style={{width: '100%'}}>
            {brand?.map(({value, title}) => (
              <StyledCheckbox
                key={value}
                value={value}
              >
                {title}
              </StyledCheckbox>
            ))}
          </Checkbox.Group>
        </Form.Item>
      </Menu.SubMenu>
      <Menu.SubMenu key="price" title="Price">
        <div style={{padding: '20px 20px 0'}}>
          <Form.Item name="minPrice" label="From">
            <InputNumber style={{width: '100%'}} min={0} />
          </Form.Item>
          <Form.Item name="maxPrice" label="To">
            <InputNumber style={{width: '100%'}} min={0} />
          </Form.Item>
        </div>
      </Menu.SubMenu>
    </Menu>
  )
}

FormMenu.propTypes = {
  filter: PropTypes.instanceOf(Object).isRequired
}

export default FormMenu