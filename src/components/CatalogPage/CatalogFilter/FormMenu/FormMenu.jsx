import {
  Checkbox, Form, InputNumber, Menu
} from 'antd'
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import { brands as defBrands, categories as defCategories, checkFilterConfig } from '../../filterConfig'
import { StyledCheckbox } from '../StylesCatalogfilter'
import makeConfigFromUrl from '../../../../utils/makeConfigFromUrl';

export const FormMenu = () => {
  const {search} = useLocation()
  const [{brand, categories}, setConfig] = useState({brand: defBrands, categories: defCategories})

  const checkConfig = async (search = {}) => {
    const newConfig = search.categories ? await checkFilterConfig(search) : {}
    if (Object.keys(newConfig).length) {
      setConfig((prev) => ({
        ...prev,
        ...newConfig
      }))
    } else setConfig({brand: defBrands, categories: defCategories})
  }

  useEffect(() => {
    const config = search ? makeConfigFromUrl(search) : {}
    checkConfig(config)
  }, [search])

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

export default FormMenu