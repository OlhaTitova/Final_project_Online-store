import styled from 'styled-components';
import { forDesktop } from '../../styles/mediaBreakPoints'

const StyledCardItem = styled.li`
  list-style: none;
  width: 215px;
  padding: 5px 13px;

  @media(min-width: ${forDesktop.minWidth}px){
    padding: 10px 24px;
  }
`

export const StyledCardImg = styled.div`
  width: 100%;
  height: 100px;

  background-image: url(${(props) => props.url});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;

  margin-bottom: 5px;

  @media(min-width: ${forDesktop.minWidth}px){
    height: 150px;
  }

`

export const StyledCardReviews = styled.span`
  color: #8C8C8C;
  font-size: 10px;

  margin-left: 10px;

  @media(min-width: ${forDesktop.minWidth}px){
    font-size: 13px;
  }
`

export const StyledCardTitle = styled.h2`
  font-size: 11px;
  line-height: 16px;

  margin-top: 5px;

  @media(min-width: ${forDesktop.minWidth}px){
    font-size: 13px;
    line-height: 19px;

    margin-top: 10px;
  }
`

export const StyledCardLastPrice = styled.p`
  color: #666666;
  text-decoration-line: line-through;
  font-size: 12px;

  margin-top: 5px;

  @media(min-width: ${forDesktop.minWidth}px){
    font-size: 14px;
    margin-top: 10px;
  }
`

export const StyledCardNowPrice = styled.p`
  font-size: 14px;
  font-weight: 600;
  color: black;
  margin-top: 3px;

  @media(min-width: ${forDesktop.minWidth}px){
    font-size: 18px;
    margin-top: 6px;
  }
`

export default StyledCardItem;
