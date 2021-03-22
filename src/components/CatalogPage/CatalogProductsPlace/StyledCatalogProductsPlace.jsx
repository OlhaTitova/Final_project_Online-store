import styled from 'styled-components'
import { forDesktop, forTablet } from '../../../styles/mediaBreakPoints'

export const Wrapper = styled.div`
  width: 100%;
  min-height: 100%;
  text-align: center;
  padding: 10px;
 `
export const ProductsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-items: center;
  
  @media (min-width: ${forTablet.minWidth}px) and (max-width: ${forTablet.maxWidth}px){
      grid-gap: 15px;
      grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: ${forDesktop.minWidth}px){
      grid-gap: 15px;
      grid-template-columns: repeat(4, 1fr);
  }
`