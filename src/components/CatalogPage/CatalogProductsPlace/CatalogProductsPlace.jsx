import React, { useEffect, useMemo } from 'react'
import { connect } from 'react-redux'
import { useLocation } from 'react-router-dom'
import {ProductCard} from '../../ProductCard/ProductCard'
import { getProductsToCatalog } from '../../../store/products/middleware'
import CatalogPagination from '../CatalogPagination/CatalogPagination'
import { ProductsWrapper, Wrapper } from './StyledCatalogProductsPlace'
import CatalogNoProducts from '../CatalogNoProducts/CatalogNoProducts'
import makeConfigFromUrl from '../../../utils/makeConfigFromUrl'
import makeUrlFromConfig from '../../../utils/makeUrlFromConfig'

const mapStateToProps = (state) => ({
  catalogProducts: state.products.catalog.catalogProducts,
  productsQuantity: state.products.catalog.productsQuantity
})

const CatalogProductsPlace = connect(mapStateToProps, {
  getProductsToCatalog
})((
  {
    catalogProducts,
    productsQuantity,
    getProductsToCatalog
  }
) => {
  const {search} = useLocation()
  const config = useMemo(() => (search ? makeConfigFromUrl(search) : {}), [search])

  useEffect(() => {
    if (config.perPage) {
      getProductsToCatalog(search)
    } else {
      config.perPage = 16
      getProductsToCatalog(`?${makeUrlFromConfig(config)}`)
    }
  }, [config, getProductsToCatalog, search])

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
          {productsQuantity > (config.perPage || 16) && <CatalogPagination />}
        </Wrapper>
      )
  )
})

export default CatalogProductsPlace