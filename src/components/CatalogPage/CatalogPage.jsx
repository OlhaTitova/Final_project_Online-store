import React, {useState} from 'react'
import {Container} from '../common/Container'
import Heading from '../common/Heading/Heading'
import CatalogFilter from './CatalogFilter/CatalogFilter'
import CatalogProductsPlace from './CatalogProductsPlace/CatalogProductsPlace'
import CatalogSort from './CatalogSort/CatalogSort'
import { CatalogProducts, Flex } from './StyledCatalogPage'

const CatalogPage = () => {
  const [showFilter, setShowFilter] = useState(false);

  return (
    <Container>
      <Heading>Products</Heading>
      <Flex>
        <CatalogFilter
          showFilter={showFilter}
          setShowFilter={setShowFilter}
        />
        <CatalogProducts>
          <CatalogSort
            setShowFilter={setShowFilter}
          />
          <CatalogProductsPlace />
        </CatalogProducts>
      </Flex>
    </Container>
  )
}

export default CatalogPage