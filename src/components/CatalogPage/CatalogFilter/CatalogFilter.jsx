/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/jsx-props-no-spreading */
import React, {
  createRef, useCallback, useEffect, useMemo
} from 'react'
import PropTypes from 'prop-types';
import {
  Form
} from 'antd';
import { useHistory, useLocation } from 'react-router';
import close from '../../../images/filter/close.svg';
import WishlistBox from './WishlistBox/WishlistBox'
// styles
import {
  StyledForm, Wrapper, FilterTitle,
  CloseBtn, AlignBtn, AllBrandsTitle,
  GridFilterPart, ContainerBrandsImg, ContainerImage, GlobalStyle
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
import StyledButton from '../../common/Buttons/StyledButton'
import {FormMenu} from './FormMenu/FormMenu';

const layout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 18 },
};

const CatalogFilter = ({
  showFilter, setShowFilter, setFilter, filter
}) => {
  const {pathname} = useLocation()
  const history = useHistory()
  const formRef = createRef()

  const [form] = Form.useForm();

  const onFinish = (values) => {
    if (!Object.keys(values).length) return
    const refValue = checkFormValues(values);
    setFilter({
      ...refValue,
    })
    setShowFilter(false)
  };

  const clearForm = () => {
    form.resetFields()
    setFilter({})
  }

  const fields = useMemo(() => ([
    {
      name: 'brand',
      value: filter?.brand || null
    },
    {
      name: 'categories',
      value: filter?.categories || null
    }
  ]), [filter])

  const checkPathToConfig = useCallback((pathname) => {
    const [key, value] = pathname.split('/').splice(2)[0].split('=')
    if (value) {
      setFilter((prev) => ({
        ...prev,
        [key]: value.split(',')
      }))
    }
  }, [setFilter])
  
  useEffect(() => {
    if (pathname !== '/catalog') {
      checkPathToConfig(pathname)
      history.push('/catalog')
    }
  }, [checkPathToConfig, filter, history, pathname])

  return (
    <StyledForm ref={formRef} fields={fields} form={form} {...layout} onFinish={onFinish}>
      <GlobalStyle showFilter={showFilter} />
      <Wrapper showFilter={showFilter}>
        <FilterTitle>
          <h3>Filter By</h3>
          <CloseBtn onClick={() => setShowFilter(false)}>
            <img src={close} alt="close" />
          </CloseBtn>
        </FilterTitle>
        <FormMenu filter={filter} />
        <AlignBtn>
          <StyledButton
            size="sm"
            shape="round"
            color="borderGrey"
            onClick={clearForm}
            style={{margin: 10, padding: 7}}
          >
            Clear Filter
          </StyledButton>
          <StyledButton
            size="sm"
            shape="round"
            htmlType="submit"
            style={{margin: 10, padding: 7}}
          >
            Apply Filter
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
        <WishlistBox />
        <ContainerImage>
          <img src={styl} alt="styl" />
        </ContainerImage>
      </Wrapper>
    </StyledForm>
  );
}

CatalogFilter.propTypes = {
  filter: PropTypes.instanceOf(Object).isRequired,
  showFilter: PropTypes.bool.isRequired,
  setShowFilter: PropTypes.func.isRequired,
  setFilter: PropTypes.func.isRequired
}

export default CatalogFilter