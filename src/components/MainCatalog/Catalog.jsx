import React, { useEffect } from 'react'

// Redux
import { connect } from 'react-redux'
import { getMainCatalogProducts } from '../../store/mainCatalog/middleware'
import { selectCatalog } from '../../store/mainCatalog/reducer'

// Components
import { CatalogBillboard } from './CatalogBillboard/CatalogBillboard'
import { CatalogCardWrapper } from './CatalogCardWrapper/MainCatalogCardWrapper'
import SpinAnimation from '../SpinAnimation/SpinAnimation'
 
// Styles
import { StyledCatalogWrapper, StyledContainer } from './StyledCatalog'

// Redux maps
const mapStateToProps = (state) => ({catalogProduct: selectCatalog(state)})

export const Catalog = connect(mapStateToProps, { getMainCatalogProducts })(({
  catalogProduct, getMainCatalogProducts
}) => {
  useEffect(() => {
    getMainCatalogProducts()
  }, [getMainCatalogProducts])

  const checkProductsAreLoaded = (
    catalogProduct.gamingMonitorList.length > 0
    && catalogProduct.desktopList.length > 0
    && catalogProduct.laptopList.length > 0
    && catalogProduct.tabletList.length > 0
  )

  if (!checkProductsAreLoaded) return <SpinAnimation width="100%" height="30vh" />
  
  return (
    <StyledContainer>
      <StyledCatalogWrapper>
        <CatalogBillboard
          billboardInfo={{
            title: 'gaming monitors',
            img: 'https://fuzzmusic.ru/wp-content/uploads/2020/08/pesni-iz-igry-kiberpank-2077-1.jpg',
            url: '/catalog'
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
            url: '/catalog'
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
            url: '/catalog'
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
            url: '/catalog'
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