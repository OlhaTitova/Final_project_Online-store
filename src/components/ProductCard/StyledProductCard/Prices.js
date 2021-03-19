import styled from 'styled-components';
import { forTablet } from '../../../styles/mediaBreakPoints'

export const StyledCardPriceWrapper = styled.div`
  height: 60px;

  @media(min-width: ${forTablet.minWidth}px){
    height: 70px;
  }
`

export const StyledCardLastPrice = styled.p`
  color: #666666;
  text-decoration-line: line-through;
  font-size: 12px;

  margin-top: 5px;

  @media(min-width: ${forTablet.minWidth}px){
    font-size: 14px;
    margin-top: 10px;
  }
`

export const StyledCardNowPrice = styled.p`
  font-size: 14px;
  font-weight: 600;
  color: black;

  @media(min-width: ${forTablet.minWidth}px){
    font-size: 18px;
  }
`

export const StyledCardAreRunningOut = styled.div`
  color: #ff5c00;
  font-size: 13px;
`

export default StyledCardLastPrice