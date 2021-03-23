import React, { useEffect } from 'react'
import { Tabs } from 'antd'
import { connect } from 'react-redux'
import { getMainCatalogProducts } from '../../store/mainCatalog/middleware'
import { MainCatalogCardWrapper } from './MainCatalogCardWrapper/MainCatalogCardWrapper'
import { MainCatalogBillboardMobile } from './MainCatalogBillboard/MainCatalogBillboardMobile'
import { MainCatalogBillboardDesktop } from './MainCatalogBillboard/MainCatalogBillboardDesktop'
import { StyledTabs } from './StyledMainCatalog'

// Redux maps
const mapStateToProps = (state) => ({catalogProduct: state.catalogProduct})
const mapDispatchToProps = (dispatch) => ({
  dispatchCatalogProduct: () => dispatch(getMainCatalogProducts())
})

export const MainCatalog = connect(mapStateToProps, mapDispatchToProps)(({
  catalogProduct, dispatchCatalogProduct
}) => {
  // Ant tabs
  const { TabPane } = Tabs

  useEffect(() => {
    dispatchCatalogProduct()
  })

  let catalogToRender

  if (catalogProduct !== undefined) {
    catalogToRender = catalogProduct.map((catalog) => (
      <>
        <MainCatalogBillboardMobile
          billboardInfo={catalog.billboard}
          key={`bilboard mobile ${catalog.billboard.itemNo}`}
        />
        
        <StyledTabs key={`StyledTabs ${catalog.catalogNo}`}>
          {
            catalog.category.map((categoryItem) => (
              <TabPane
                tab={categoryItem.productSubcategory}
                key={`main catalog nav${categoryItem.productSubcategory}`}
              >
                <div style={{display: 'flex'}}>
                  <MainCatalogBillboardDesktop
                    billboardInfo={catalog.billboard}
                    key={`bilboard desktop ${catalog.billboard.itemNo}`}
                  />
                  <MainCatalogCardWrapper
                    productsList={categoryItem.productItem}
                    key={`main catalog card wrapper' ${categoryItem.productSubcategory}`}
                  />
                </div>
              </TabPane>
            ))
        }
        </StyledTabs>
      </>
    ))
  }
  console.log(catalogToRender)
  return (
    <>
      {/* { catalogToRender } */}
      some
    </>
  )
})

export default MainCatalog