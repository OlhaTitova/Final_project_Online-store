import React from 'react'
import PropTypes from 'prop-types';
import 'antd/dist/antd.css'
import { Select } from 'antd'
import {
  FilterBtn, SelectWrapper, StyledSelect, Wrapper
} from './StyledCatalogSort';

const CatalogSort = ({config, setSortAndPagination, setShowFilter}) => {
  const {perPage} = config
  
  const onChange = (value, key) => {
    if (value !== 'default') {
      if (key === 'perPage') setSortAndPagination((prev) => ({...prev, perPage: value}))
      if (key === 'sort') setSortAndPagination((prev) => ({...prev, sort: value}))
    } else {
      setSortAndPagination((prev) => {
        const {sort, ...result} = prev
        return result
      })
    }
  }

  return (
    <Wrapper>
      <FilterBtn type="submit" onClick={() => setShowFilter((prev) => !prev)}>Filter</FilterBtn>
      <SelectWrapper>
        <span className="title-select">Sort By:</span>
        <StyledSelect bordered={false} onChange={(value) => onChange(value, 'sort')} defaultValue="default">
          <Select.Option value="default">Position</Select.Option>
          <Select.Option value="+currentPrice">From min price</Select.Option>
          <Select.Option value="-currentPrice">From max price</Select.Option>
        </StyledSelect>
      </SelectWrapper>
      <SelectWrapper>
        <span className="title-select">Show:</span>
        <StyledSelect bordered={false} onChange={(value) => onChange(value, 'perPage')} defaultValue={perPage}>
          <Select.Option value="16">16 per page</Select.Option>
          <Select.Option value="32">32 per page</Select.Option>
          <Select.Option value="48">48 per page</Select.Option>
          <Select.Option value="60">60 per page</Select.Option>
        </StyledSelect>
      </SelectWrapper>
    </Wrapper>
  )
}

CatalogSort.propTypes = {
  config: PropTypes.instanceOf(Object).isRequired,
  setSortAndPagination: PropTypes.func.isRequired,
  setShowFilter: PropTypes.func.isRequired,
}

export default CatalogSort