import React, { useMemo, useState} from 'react'
import {Container} from '../common/Container'
import Heading from '../common/Heading/Heading'
import CatalogFilter from './CatalogFilter/CatalogFilter'
import CatalogProductsPlace from './CatalogProductsPlace/CatalogProductsPlace'
import CatalogSort from './CatalogSort/CatalogSort'
import { CatalogProducts, Flex } from './StyledCatalogPage'

const CatalogPage = () => {
  const [showFilter, setShowFilter] = useState(false);
  const [sortAndPagination, setSortAndPagination] = useState({perPage: '15', startPage: 1})
  const [filter, setFilter] = useState({});

  const config = useMemo(() => ({
    ...sortAndPagination,
    ...filter
  }), [sortAndPagination, filter])

  return (
    <Container>
      <Heading>Products</Heading>
      <Flex>
        <CatalogFilter
          setFilter={setFilter}
          showFilter={showFilter}
          setShowFilter={setShowFilter}
        />
        <CatalogProducts>
          <CatalogSort
            config={config}
            setSortAndPagination={setSortAndPagination}
            setShowFilter={setShowFilter}
          />
          <CatalogProductsPlace
            config={config}
            setSortAndPagination={setSortAndPagination}
          />
        </CatalogProducts>
      </Flex>
    </Container>
  )
}

export default CatalogPage