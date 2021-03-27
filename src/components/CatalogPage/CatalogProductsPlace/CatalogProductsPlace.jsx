/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {ProductCard} from '../../ProductCard/ProductCard'
import { getProductsToCatalog } from '../../../store/products/middleware'
import CatalogPagination from '../CatalogPagination/CatalogPagination'
import { ProductsWrapper, Wrapper } from './StyledCatalogProductsPlace'
import CatalogNoProducts from '../CatalogNoProducts/CatalogNoProducts'

const mapStateToProps = (state) => ({
  catalogProducts: state.products.catalog.catalogProducts,
  productsQuantity: state.products.catalog.productsQuantity
})

const CatalogProductsPlace = connect(mapStateToProps, {
  getProductsToCatalog
})((
  {
    config,
    setSortAndPagination,
    catalogProducts,
    productsQuantity,
    getProductsToCatalog
  }
) => {
  useEffect(() => {
    getProductsToCatalog(config)
  }, [config, getProductsToCatalog])

  return (
    catalogProducts.length === 0
      ? <CatalogNoProducts productsQuantity={productsQuantity} />
      : (
        <Wrapper>
          <ProductsWrapper>
            {catalogProducts.map((el) => (
              <ProductCard
                key={el.itemNo}
                productInfo={el}
              />
            ))}
          </ProductsWrapper>
          <CatalogPagination
            config={config}
            setSortAndPagination={setSortAndPagination}
          />
        </Wrapper>
      )
  )
})

CatalogProductsPlace.propTypes = {
  config: PropTypes.instanceOf(Object).isRequired,
  setSortAndPagination: PropTypes.func.isRequired
}

export default CatalogProductsPlace