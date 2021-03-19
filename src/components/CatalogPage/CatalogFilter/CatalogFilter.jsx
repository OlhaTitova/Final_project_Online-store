/* eslint-disable react/jsx-props-no-spreading */
import React, {useState} from 'react'
import PropTypes from 'prop-types';
import {
  Checkbox, InputNumber,
  Menu, Form
} from 'antd';
import close from '../../../images/filter/close.svg';
// styles
import {
  StyledForm, Wrapper, FilterTitle,
  CloseBtn, AlignBtn, AllBrandsTitle,
  StyledCheckbox,
  GridFilterPart, ContainerBrandsImg, WishList, NoWishItem,
  WishItem, ContainerImage
} from './StylesCatalogfilter';
import {checkFormValues} from '../../../utils/checkFormValues';
// img
import imageBrands1 from '../../../images/filter/imageBrands1.svg';
import imageBrands2 from '../../../images/filter/imageBrands2.svg';
import imageBrands3 from '../../../images/filter/imageBrands3.svg';
import imageBrands4 from '../../../images/filter/imageBrands4.svg';
import imageBrands5 from '../../../images/filter/imageBrands5.svg';
import imageBrands6 from '../../../images/filter/imageBrands6.svg';
import styl from '../../../images/filter/styl.svg';
import { brands, categories } from '../filterConfig'
import StyledButton from '../../common/Buttons/StyledButton'

const { SubMenu } = Menu;

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const CatalogFilter = ({
  showFilter, setShowFilter, setFilter
}) => {
  // eslint-disable-next-line no-unused-vars
  const [wish, setWish] = useState(true); // temporaly for wish list

  const [form] = Form.useForm();

  const onFinish = (values) => {
    if (!Object.keys(values).length) return
    const refValue = checkFormValues(values);
    setFilter({
      ...refValue,
    })
    setShowFilter((prev) => !prev)
  };

  const clearForm = () => {
    form.resetFields()
    setFilter({})
  }

  return (
    <StyledForm form={form} {...layout} onFinish={onFinish}>
      <Wrapper showFilter={showFilter}>
        <FilterTitle>
          <h3>Filter By</h3>
          <CloseBtn onClick={() => setShowFilter((prev) => !prev)}>
            <img src={close} alt="close" />
          </CloseBtn>
        </FilterTitle>
        <AlignBtn>
          <StyledButton
            size="xs"
            shape="round"
            color="borderGrey"
            onClick={clearForm}
          >
            Clear

          </StyledButton>
        </AlignBtn>
        <Menu defaultOpenKeys={['brands']} inlineIndent={10} mode="inline">
          <SubMenu key="brands" title="Brand">
            <Form.Item name="brand" noStyle>
              <Checkbox.Group>
                {brands.map(({value, title}) => (
                  <StyledCheckbox
                    key={value}
                    value={value}
                  >
                    {title}
                  </StyledCheckbox>
                ))}
              </Checkbox.Group>
            </Form.Item>
          </SubMenu>
          <SubMenu key="price" title="Price">
            <div style={{padding: '20px 20px 0'}}>
              <Form.Item name="minPrice" label="From">
                <InputNumber style={{width: '100%'}} min={0} />
              </Form.Item>
              <Form.Item name="maxPrice" label="To">
                <InputNumber style={{width: '100%'}} min={0} />
              </Form.Item>
            </div>
          </SubMenu>
          <SubMenu key="сategories" title="Сategories">
            <Form.Item name="categories" noStyle>
              <Checkbox.Group>
                {categories.map(({value, title}) => (
                  <StyledCheckbox
                    key={value}
                    value={value}
                  >
                    {title}
                  </StyledCheckbox>
                ))}
              </Checkbox.Group>
            </Form.Item>
          </SubMenu>
        </Menu>
        <AlignBtn>
          <StyledButton size="xs" shape="round" htmlType="submit">
            Apply Filtres
          </StyledButton>
        </AlignBtn>
        <AllBrandsTitle>
          <h5>All Brands</h5>
        </AllBrandsTitle>
        <GridFilterPart>
          <ContainerBrandsImg>
            <img src={imageBrands1} alt="imageBrands1" />
          </ContainerBrandsImg>
          <ContainerBrandsImg>
            <img src={imageBrands2} alt="imageBrands2" />
          </ContainerBrandsImg>
          <ContainerBrandsImg>
            <img src={imageBrands3} alt="imageBrands3" />
          </ContainerBrandsImg>
          <ContainerBrandsImg>
            <img src={imageBrands4} alt="imageBrands4" />
          </ContainerBrandsImg>
          <ContainerBrandsImg>
            <img src={imageBrands5} alt="imageBrands5" />
          </ContainerBrandsImg>
          <ContainerBrandsImg>
            <img src={imageBrands6} alt="imageBrands6" />
          </ContainerBrandsImg>
        </GridFilterPart>
        <WishList>
          <h5>My Wish List</h5>
          {wish ? (
            <NoWishItem>
              <p>You have no items in your wish lists</p>
            </NoWishItem>
          ) : (
            <WishItem>
              <p>You have some items in your wish lists</p>
            </WishItem>
          )}
        </WishList>
        <ContainerImage>
          <img src={styl} alt="styl" />
        </ContainerImage>
      </Wrapper>
    </StyledForm>
  );
}
CatalogFilter.propTypes = {
  showFilter: PropTypes.bool.isRequired,
  setShowFilter: PropTypes.func.isRequired,
  setFilter: PropTypes.func.isRequired
}

export default CatalogFilter