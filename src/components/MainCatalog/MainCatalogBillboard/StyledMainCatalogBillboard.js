import styled from 'styled-components'

import { forDesktop, forTablet } from '../../../styles/mediaBreakPoints'

export const StyledMainCatalogBillboardMobile = styled.div`
  position: relative;
  z-index: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 82px;
  background-image: url(${(props) => props.bgImg});
  background-size: 100%;
  background-position: center;
  background-repeat: no-repeat;
  margin-top: 15px;
  margin-right: 15px;
  ::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, .5);
  }
  @media(min-width: ${forTablet.minWidth}px){
    display: none;
  }
`

export const StyledMainCatalogBillboardDesktop = styled(StyledMainCatalogBillboardMobile)`
  display: none;
  @media(min-width: ${forTablet.minWidth}px){
    display: flex;
    min-width: 181px;
    max-width: 181px;
    height: 240px;
    background-size: cover;
    padding: 10px;
  }
  @media(min-width: ${forDesktop.minWidth}px){
    min-width: 234px;
    max-width: 234px;
    height: 320px;
  }
`

export const StyledMainCatalogBillboardTitle = styled.h3`
  color: #fff;
  font-size: 18px;
  text-transform: capitalize;
  font-weight: 700;
  margin-bottom: 10px;
`

export const StyledMainCatalogBillboardLink = styled.a`
  color: #fff;
  text-transform: capitalize;
  text-decoration: underline;
  cursor: pointer;
  :hover {
    color: #fff;
    text-decoration: underline;
  }
`