import React from 'react'
import PropTypes from 'prop-types'
import { Empty } from 'antd'
import { StyledSpin } from './Styled.CatalogProducts'

const CatalogNoProducts = ({productsQuantity}) => (
  productsQuantity !== 0
    ? (<StyledSpin size="large" tip="Loading..." />)
    : (
      <Empty description={false}>
        <span>Sorry, no products</span>
      </Empty>
    )
)

CatalogNoProducts.propTypes = {
  productsQuantity: PropTypes.number.isRequired
}

export default CatalogNoProducts