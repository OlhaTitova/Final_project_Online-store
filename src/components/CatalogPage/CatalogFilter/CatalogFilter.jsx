/* eslint-disable react/jsx-props-no-spreading */
import React, { useMemo} from 'react'
import PropTypes from 'prop-types';
import {
  Form
} from 'antd';
import { useHistory, useLocation } from 'react-router-dom';
import close from '../../../images/filter/close.svg';
import {
  StyledForm, Wrapper, FilterTitle,
  CloseBtn, AlignBtn, ContainerImage, GlobalStyle
} from './StylesCatalogfilter';
import {checkFormValues} from '../../../utils/checkFormValues';
import styl from '../../../images/filter/styl.svg';
import StyledButton from '../../common/Buttons/StyledButton'
import {FormMenu} from './FormMenu/FormMenu';
import makeConfigFromUrl from '../../../utils/makeConfigFromUrl';
import makeUrlFromConfig from '../../../utils/makeUrlFromConfig';

const layout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 18 },
};

const CatalogFilter = ({
  showFilter, setShowFilter
}) => {
  const {search} = useLocation()
  const history = useHistory()
  const config = search ? makeConfigFromUrl(search) : {}
  const [form] = Form.useForm();

  const onFinish = (values) => {
    if (!Object.keys(values).length) return
    const filterParts = ['brand', 'categories', 'minPrice', 'maxPrice']
    const refValue = checkFormValues(values)
    const refConfig = {...config, ...refValue}
    Object.keys(refConfig).forEach((key) => {
      if (filterParts.includes(key) && (refValue[key] === undefined || refValue[key] === null)) {
        delete refConfig[key]
      }
    })
    history.push(`/catalog?${makeUrlFromConfig(refConfig)}`)
    setShowFilter(false)
  };

  const clearForm = () => {
    form.resetFields()
    const {
      brand, categories, minPrice, maxPrice, ...refConfig
    } = config
    history.push(`/catalog?${makeUrlFromConfig(refConfig)}`)
  }

  const fields = useMemo(() => ([
    {
      name: 'brand',
      value: config?.brand || null
    },
    {
      name: 'categories',
      value: config?.categories || null
    },
    {
      name: 'minPrice',
      value: +config?.minPrice || null
    },
    {
      name: 'maxPrice',
      value: (config.maxPrice === '10000000' ? null : +config?.maxPrice) || null
    }
  ]), [config.brand, config.categories, config.maxPrice, config.minPrice])

  return (
    <StyledForm fields={fields} form={form} {...layout} onFinish={onFinish}>
      <GlobalStyle showFilter={showFilter} />
      <Wrapper showFilter={showFilter}>
        <FilterTitle>
          <h3>Filter By</h3>
          <CloseBtn onClick={() => setShowFilter(false)}>
            <img src={close} alt="close" />
          </CloseBtn>
        </FilterTitle>
        <FormMenu filter={config} />
        <AlignBtn>
          <StyledButton
            size="sm"
            shape="round"
            htmlType="submit"
            style={{margin: 10, padding: 7}}
          >
            Apply Filter
          </StyledButton>
          <StyledButton
            size="sm"
            shape="round"
            color="borderGrey"
            onClick={clearForm}
            style={{margin: 10, padding: 7}}
          >
            Clear Filter
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
  showFilter: PropTypes.bool.isRequired,
  setShowFilter: PropTypes.func.isRequired,
}

export default CatalogFilter