import styled from 'styled-components';
import { forTablet } from '../../../styles/mediaBreakPoints'

export const StyledCardItem = styled.li`
  position: relative;
  width: 45vw;
  max-width: 215px;
  padding: 5px 13px;

  @media(min-width: ${forTablet.minWidth}px){
    padding: 10px 24px;
  }
`

export const StyledCardReviews = styled.span`
  color: #8C8C8C;
  font-size: 10px;

  margin-left: 10px;

  @media(min-width: ${forTablet.minWidth}px){
    font-size: 13px;
  }
`

export const StyledCardTitle = styled.h2`
  font-size: 11px;
  line-height: 16px;
  height: 2.3rem;
  overflow: hidden;

  margin-top: 5px;

  @media(min-width: ${forTablet.minWidth}px){
    font-size: 13px;
    line-height: 19px;

    margin-top: 10px;
  }
`

export default StyledCardItem;