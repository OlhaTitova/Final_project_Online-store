import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {StyledPagination} from './StyledCatalogPagination'

const mapStateToProps = (state) => ({
  productsQuantity: state.products.catalog.productsQuantity
})

const CatalogPagination = connect(mapStateToProps)(({
  config,
  setSortAndPagination,
  productsQuantity
}) => {
  const {perPage, startPage} = config

  const onChangePage = (page) => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
    setSortAndPagination((prev) => ({
      ...prev,
      startPage: page
    }))
  }

  return (
    <StyledPagination
      showSizeChanger={false}
      onChange={onChangePage}
      current={+startPage}
      pageSize={+perPage}
      total={+productsQuantity}
    />
  )
})

CatalogPagination.propTypes = {
  config: PropTypes.instanceOf(Object).isRequired,
  setSortAndPagination: PropTypes.func.isRequired
}

export default CatalogPagination