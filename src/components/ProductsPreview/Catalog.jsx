import React from 'react'

// Redux
import { connect } from 'react-redux'
import { selectCatalog, selectIsLoading } from '../../store/productsPreview/reducer'

// Components
import { CatalogBillboard } from './CatalogBillboard/CatalogBillboard'
import { CatalogCardWrapper } from './CatalogCardWrapper/MainCatalogCardWrapper'
import StyledSpinner from '../StyledSpinner/StyledSpinner'
 
// Styles
import { StyledCatalogWrapper, StyledContainer } from './StyledCatalog'

// Redux maps
const mapStateToProps = (state) => ({
  catalogProduct: selectCatalog(state),
  isLoading: selectIsLoading(state)
})

export const Catalog = connect(mapStateToProps, null)(({
  catalogProduct, isLoading
}) => {
  if (isLoading) return <StyledSpinner size="large" tip="Loading..." margin="200px auto" />
  
  return (
    <StyledContainer>
      <StyledCatalogWrapper>
        <CatalogBillboard
          billboardInfo={{
            title: 'gaming monitors',
            img: 'https://fuzzmusic.ru/wp-content/uploads/2020/08/pesni-iz-igry-kiberpank-2077-1.jpg',
            url: '/catalog?categories=gamingMonitors',
            category: 'gaming monitors'
          }}
        />
        <CatalogCardWrapper
          productsList={catalogProduct.gamingMonitorList}
        />
      </StyledCatalogWrapper>

      <StyledCatalogWrapper>
        <CatalogBillboard
          billboardInfo={{
            title: 'desktops',
            img: 'https://merchandising-assets.bestbuy.ca/bltc8653f66842bff7f/blt3ce6d340560cf08f/5e71863623ff3341c4f5aba8/computing-evergreen-feature-gaming-desktop-orientation-s.jpg?width=2877&quality=80',
            url: '/catalog?categories=desctops',
            category: 'desktops'
          }}
        />
        <CatalogCardWrapper
          productsList={catalogProduct.desktopList}
        />
      </StyledCatalogWrapper>

      <StyledCatalogWrapper>
        <CatalogBillboard
          billboardInfo={{
            title: 'laptops',
            img: 'https://www.xmg.gg/wp-content/uploads/XMG_Pro-15_gg_Rotationsbanner_EN_Desktop.jpg',
            url: '/catalog?categories=laptops',
            category: 'laptops'
          }}
        />
        <CatalogCardWrapper
          productsList={catalogProduct.laptopList}
        />
      </StyledCatalogWrapper>

      <StyledCatalogWrapper>
        <CatalogBillboard
          billboardInfo={{
            title: 'tablets',
            img: 'https://cdn.pixabay.com/photo/2015/06/24/15/45/hands-820272_1280.jpg',
            url: '/catalog?categories=tablets',
            category: 'tablets'
          }}
        />
        <CatalogCardWrapper
          productsList={catalogProduct.tabletList}
        />
      </StyledCatalogWrapper>
    </StyledContainer>
  )
})

export default Catalog