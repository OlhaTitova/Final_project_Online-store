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
// styles
import {
  StyledForm, Wrapper, FilterTitle,
  CloseBtn, AlignBtn, ContainerImage, GlobalStyle
} from './StylesCatalogfilter';
import {checkFormValues} from '../../../utils/checkFormValues';
// img
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
  const {search} = useLocation()
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

  const checkPathToConfig = useCallback((search) => {
    const refSearch = {}
    const params = search?.split('?').splice(1)[0].split('&')
    params?.forEach((param) => {
      const [key, value] = param.split('=')
      refSearch[key] = value.split(',')
    })
    setFilter((prev) => ({
      ...prev,
      ...refSearch
    }))
  }, [setFilter])
  
  useEffect(() => {
    if (search !== '') {
      checkPathToConfig(search)
      history.push('/catalog')
    }
  }, [checkPathToConfig, search, history])

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